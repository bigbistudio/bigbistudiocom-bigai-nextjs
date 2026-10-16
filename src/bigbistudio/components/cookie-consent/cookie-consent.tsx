"use client";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

import { cn } from "@/bigbistudio/utils/shadcn-utils";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

import { bigbiStyles } from "@/bigbistudio/lib/bigbistyles";

const CONSENT_COOKIE_NAME = "bigbi-cookie-consent";
const CONSENT_VERSION = 1;
const CONSENT_MAX_AGE = 60 * 60 * 24 * 180;

type CookiePreferences = {
  version: number;
  essential: true;
  analytics: boolean;
};

type ConsentSnapshot = boolean | null | "loading";

type ClarityFunction = {
  (...args: [string, ...unknown[]]): void;
  q?: unknown[][];
};

declare global {
  interface Window {
    clarity?: ClarityFunction;
  }
}

const consentListeners = new Set<() => void>();
let hasLoadedConsent = false;
let analyticsAllowed = false;

function filterAnalyticsEvents<T extends { type: string; url: string }>(event: T): T | null {
  return analyticsAllowed ? event : null;
}

function isCookiePreferences(value: unknown): value is CookiePreferences {
  return (
    typeof value === "object" &&
    value !== null &&
    "version" in value &&
    value.version === CONSENT_VERSION &&
    "essential" in value &&
    value.essential === true &&
    "analytics" in value &&
    typeof value.analytics === "boolean"
  );
}

function readCookiePreferences(): CookiePreferences | null {
  const cookie = document.cookie
    .split(";")
    .map((entry) => entry.trim())
    .find((entry) => entry.startsWith(`${CONSENT_COOKIE_NAME}=`));

  if (!cookie) return null;

  try {
    const value: unknown = JSON.parse(
      decodeURIComponent(cookie.slice(CONSENT_COOKIE_NAME.length + 1)),
    );
    return isCookiePreferences(value) ? value : null;
  } catch {
    return null;
  }
}

function saveCookiePreferences(analytics: boolean) {
  const preferences: CookiePreferences = {
    version: CONSENT_VERSION,
    essential: true,
    analytics,
  };
  const secure = window.location.protocol === "https:" ? "; Secure" : "";

  document.cookie = `${CONSENT_COOKIE_NAME}=${encodeURIComponent(
    JSON.stringify(preferences),
  )}; Path=/; Max-Age=${CONSENT_MAX_AGE}; SameSite=Lax${secure}`;
  analyticsAllowed = analytics;
  hasLoadedConsent = true;
  consentListeners.forEach((listener) => listener());
}

function subscribeToConsent(listener: () => void) {
  consentListeners.add(listener);

  if (!hasLoadedConsent) {
    hasLoadedConsent = true;
    listener();
  }

  return () => consentListeners.delete(listener);
}

function getConsentSnapshot(): ConsentSnapshot {
  if (!hasLoadedConsent) return "loading";
  const analytics = readCookiePreferences()?.analytics ?? null;
  analyticsAllowed = analytics === true;
  return analytics;
}

function getServerConsentSnapshot(): ConsentSnapshot {
  return "loading";
}

function getClarity(): ClarityFunction {
  if (window.clarity) return window.clarity;

  const queue: unknown[][] = [];
  const clarity: ClarityFunction = Object.assign(
    (...args: [string, ...unknown[]]) => {
      queue.push(args);
    },
    { q: queue },
  );
  window.clarity = clarity;
  return clarity;
}

export function CookieConsent() {
  const consentSnapshot = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const analyticsConsent = typeof consentSnapshot === "boolean" ? consentSnapshot : null;
  const [draftAnalyticsConsent, setDraftAnalyticsConsent] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;
    if (analyticsConsent) {
      if (!clarityId) return;

      getClarity()("consentv2", {
        ad_Storage: "denied",
        analytics_Storage: "granted",
      });

      const scriptId = "microsoft-clarity-script";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.async = true;
        script.src = `https://www.clarity.ms/tag/${encodeURIComponent(clarityId)}`;
        script.onerror = () => {
          console.error("Failed to load the Microsoft Clarity analytics script.");
        };
        document.head.append(script);
      }
    } else if (analyticsConsent === false && window.clarity) {
      window.clarity("consentv2", {
        ad_Storage: "denied",
        analytics_Storage: "denied",
      });
      window.clarity("consent", false);
    }
  }, [analyticsConsent]);

  function savePreferences(analytics: boolean) {
    saveCookiePreferences(analytics);
    setDraftAnalyticsConsent(analytics);
    setSettingsOpen(false);
  }

  function openSettings() {
    setDraftAnalyticsConsent(analyticsConsent ?? false);
    setSettingsOpen(true);
  }

  if (consentSnapshot === "loading") return null;

  if (analyticsConsent !== null && !settingsOpen) {
    return (
      <>
        {analyticsConsent && (
          <>
            <Analytics beforeSend={filterAnalyticsEvents} />
            <SpeedInsights beforeSend={filterAnalyticsEvents} />
          </>
        )}
        <Button
          type="button"
          variant="outline"
          size="sm"
          className="fixed bottom-4 right-4 z-50"
          onClick={openSettings}
        >
          Cookie settings
        </Button>
      </>
    );
  }

  return (
    <>
      {analyticsConsent && (
        <>
          <Analytics beforeSend={filterAnalyticsEvents} />
          <SpeedInsights beforeSend={filterAnalyticsEvents} />
        </>
      )}
      <section
        aria-label="Cookie preferences"
        aria-live="polite"
        className="fixed inset-x-0 bottom-0 z-50 border-t border-line-primary bg-surface-secondary/80 backdrop-blur-lg text-ink-primary shadow-2xl"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-5 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-2xl space-y-1">
            <h2 className="text-base font-semibold">Cookie preferences</h2>
            <p className="text-sm leading-relaxed text-ink-tertiary">
              Essential cookies keep this site working. With your permission, analytics cookies help
              us understand how it is used.{" "}
              <Link
                href="/cookie-policy"
                className="text-ink-primary underline underline-offset-4 hover:text-ink-secondary"
              >
                Read our Cookie Policy
              </Link>
              .
            </p>
          </div>

          <div className="flex w-full flex-col gap-4 lg:max-w-md">
            <div
              id="cookie-consent-settings"
              hidden={!settingsOpen}
              className="flex flex-col gap-4"
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-medium">Essential cookies</p>
                  <p className="text-xs text-ink-tertiary">
                    Required for site operation and always enabled.
                  </p>
                </div>
                <span className="shrink-0 text-xs text-ink-tertiary">Always on</span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p id="analytics-cookie-label" className="text-sm font-medium">
                    Analytics cookies
                  </p>
                  <p id="analytics-cookie-description" className="text-xs text-ink-tertiary">
                    Help us understand website usage and improve the experience.
                  </p>
                </div>
                <Switch
                  id="analytics-cookie-switch"
                  aria-labelledby="analytics-cookie-label"
                  aria-describedby="analytics-cookie-description"
                  checked={draftAnalyticsConsent}
                  onCheckedChange={setDraftAnalyticsConsent}
                />
              </div>
            </div>
            {settingsOpen && (
              <Button
                type="button"
                onClick={() => savePreferences(draftAnalyticsConsent)}
                className={cn(bigbiStyles.button["primary"], "py-4 self-end")}
              >
                Save preferences
              </Button>
            )}
            <div className="flex flex-wrap gap-2 lg:shrink-0">
              <Button
                type="button"
                variant="outline"
                onClick={() => savePreferences(false)}
                className={cn(bigbiStyles.button["secondary"], "py-4")}
              >
                Reject Optional
              </Button>
              <Button
                type="button"
                onClick={() => savePreferences(true)}
                className={cn(bigbiStyles.button["primary"], "py-4")}
              >
                Accept All
              </Button>
              <Button
                type="button"
                variant="secondary"
                aria-expanded={settingsOpen}
                aria-controls="cookie-consent-settings"
                onClick={() => (settingsOpen ? setSettingsOpen(false) : openSettings())}
                className={cn(bigbiStyles.button["secondary"], "py-4")}
              >
                {settingsOpen ? "Close Settings" : "Settings"}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
