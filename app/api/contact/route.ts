import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"
import * as z from "zod"

// Validación de los datos del formulario
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
  recaptchaToken: z.string().optional(),
})

// Verificar reCAPTCHA
async function verifyRecaptcha(token: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY
  
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY no está definida")
    return false
  }

  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${secretKey}&response=${token}`,
    })

    const data = await response.json()
    console.log("Respuesta reCAPTCHA:", data) // Para debug
    
    // Para reCAPTCHA v2, solo verificamos success (SIN score)
    return data.success === true
  } catch (error) {
    console.error("Error verificando reCAPTCHA:", error)
    return false
  }
}

// Escapa HTML para evitar inyecciones
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
}

export async function GET() {
  return NextResponse.json({ status: "OK - api/contact reachable" })
}

export async function POST(request: NextRequest) {
  try {
    // Verificar que estén las API keys
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está definida")
      return NextResponse.json(
        { error: "Configuración del servidor incompleta" },
        { status: 500 }
      )
    }

    const body = await request.json()
    const { name, email, phone, subject, message, recaptchaToken } = contactSchema.parse(body)

    // Verificar reCAPTCHA solo si está configurado y hay token
    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken)
      if (!isRecaptchaValid) {
        return NextResponse.json(
          { error: "Verificación reCAPTCHA fallida. Por favor intenta de nuevo." },
          { status: 400 }
        )
      }
    } else if (process.env.RECAPTCHA_SECRET_KEY && !recaptchaToken) {
      return NextResponse.json(
        { error: "Token reCAPTCHA requerido" },
        { status: 400 }
      )
    }

    // Inicializar Resend
    const resend = new Resend(process.env.RESEND_API_KEY)

    // Sanitizar datos para prevenir XSS
    const safeName = escapeHtml(name)
    const safeEmail = escapeHtml(email)
    const safePhone = phone ? escapeHtml(phone) : null
    const safeSubject = escapeHtml(subject)
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>")

    const emailContent = `
      <div style="font-family: Arial, sans-serif; padding: 16px; color: #333; max-width: 600px;">
        <div style="background: linear-gradient(135deg, #6761af, #f8973d); padding: 20px; border-radius: 10px; margin-bottom: 20px;">
          <h2 style="color: white; margin: 0; text-align: center;">📩 Nuevo mensaje de contacto desde ZentheraSoft</h2>
        </div>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; border-left: 4px solid #6761af;">
          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          ${safePhone ? `<p><strong>Teléfono:</strong> ${safePhone}</p>` : ""}
          <p><strong>Asunto:</strong> ${safeSubject}</p>
          <hr style="margin: 16px 0; border: none; border-top: 1px solid #ddd;" />
          <p><strong>Mensaje:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 5px; border: 1px solid #e0e0e0;">
            <p>${safeMessage}</p>
          </div>
        </div>
        <div style="margin-top: 20px; padding: 15px; background: #e8f4fd; border-radius: 8px; text-align: center;">
          <p style="margin: 0; color: #666; font-size: 14px;">
            Este mensaje fue enviado desde el formulario de contacto de ZentheraSoft.com
          </p>
        </div>
      </div>
    `

    // Enviar email interno a ZentheraSoft
    await resend.emails.send({
      from: "ZentheraSoft <contacto@zentherasoft.com>",
      to: ["contacto@zentherasoft.com"],
      subject: `🚀 Nuevo contacto: ${safeSubject}`,
      html: emailContent,
      replyTo: safeEmail,
    })

    // Email automático de confirmación al cliente
    await resend.emails.send({
      from: "ZentheraSoft <contacto@zentherasoft.com>",
      to: [safeEmail],
      subject: "✅ Gracias por contactarnos - ZentheraSoft",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px; color: #333; max-width: 600px;">
          <div style="background: linear-gradient(135deg, #6761af, #f8973d); padding: 20px; border-radius: 10px; margin-bottom: 20px; text-align: center;">
            <h2 style="color: white; margin: 0;">¡Gracias por contactarnos, ${safeName}! 🎉</h2>
          </div>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p>Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
            <div style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #f8973d; margin: 15px 0;">
              <p><strong>Resumen de tu mensaje:</strong></p>
              <p style="color: #666;">${safeMessage}</p>
            </div>
            <p>Nuestro equipo revisará tu consulta y te contactaremos dentro de las próximas 24 horas.</p>
          </div>
          <div style="margin-top: 20px; text-align: center;">
            <p style="margin-bottom: 10px;">Mientras tanto, puedes seguirnos en nuestras redes:</p>
            <div style="margin: 15px 0;">
              <a href="https://github.com/zentherasoft" style="margin: 0 10px; text-decoration: none; color: #6761af;">GitHub</a>
              <a href="https://linkedin.com/company/zentherasoft" style="margin: 0 10px; text-decoration: none; color: #6761af;">LinkedIn</a>
              <a href="https://twitter.com/zentherasoft" style="margin: 0 10px; text-decoration: none; color: #6761af;">Twitter</a>
            </div>
          </div>
          <div style="margin-top: 30px; padding: 15px; background: #e8f4fd; border-radius: 8px; text-align: center;">
            <p style="margin: 0; font-weight: bold; color: #6761af;">Saludos,</p>
            <p style="margin: 5px 0 0 0; color: #666;">Equipo ZentheraSoft 🚀</p>
          </div>
        </div>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error: any) {
    console.error("Error al enviar el email:", error)
    const message =
      error instanceof z.ZodError
        ? "Datos inválidos en el formulario"
        : "Error al enviar el mensaje"
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
