// External
import { Resend } from "resend"

// Types
import type { ContactFormValues } from "./contact-form.types"

const resend = new Resend(process.env.RESEND_API_KEY)

const fromEmail = process.env.CONTACT_FROM_EMAIL!
const toEmail = process.env.CONTACT_TO_EMAIL!

/**
 * Send contact email.
 */
export async function sendContactEmail(
    values: ContactFormValues,
): Promise<void> {
    // console.log("Contact form submitted:", values);

    const { data, error } = await resend.emails.send({
        from: fromEmail,
        to: [toEmail],
        subject: `New contact from ${values.name}`,
        text: `
            Name: ${values.name}

            Email: ${values.email}

            Message:
            
            ${values.message}
        `
    })

    if (error) {
        console.log("Resend API Error:", error)
        console.log("Response Data:", data)
        throw error
    }
}