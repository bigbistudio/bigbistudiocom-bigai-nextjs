import type { SVGProps } from "react"

export function FramerIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      role="img"
      {...props}
      fill="currentColor"
    >
      <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"></path>
      </g>
    </svg>
  )
}
