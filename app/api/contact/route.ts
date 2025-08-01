import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import * as z from "zod";

// Validación de los datos del formulario
const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z.string().optional(),
  subject: z.string().min(5, "El asunto debe tener al menos 5 caracteres"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

// Escapa HTML para evitar inyecciones
function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    // Verificá que esté la API key
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY no está definida");
      return NextResponse.json(
        { error: "Configuración del servidor incompleta" },
        { status: 500 }
      );
    }

    // Inicializá Resend aquí, en tiempo de request (evita romper el build)
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    const { name, email, phone, subject, message } = contactSchema.parse(body);

    // Sanitiza datos para prevenir XSS
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : null;
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const emailContent = `
      <div style="font-family: Arial, sans-serif; padding: 16px; color: #333;">
        <h2>📩 Nuevo mensaje de contacto desde ZentheraSoft</h2>
        <p><strong>Nombre:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        ${safePhone ? `<p><strong>Teléfono:</strong> ${safePhone}</p>` : ""}
        <p><strong>Asunto:</strong> ${safeSubject}</p>
        <hr style="margin: 16px 0;" />
        <p><strong>Mensaje:</strong></p>
        <p>${safeMessage}</p>
      </div>
    `;

    // Enviar email interno a ZentheraSoft
    await resend.emails.send({
      from: "ZentheraSoft <onboarding@resend.dev>",
      to: ["contacto@zentherasoft.com"],
      subject: `Nuevo contacto: ${safeSubject}`,
      html: emailContent,
      reply_to: safeEmail,
    });

    // Email automático de confirmación al cliente
    await resend.emails.send({
      from: "ZentheraSoft <contacto@zentherasoft.com>",
      to: [safeEmail],
      subject: "Gracias por contactarnos - ZentheraSoft",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 16px; color: #333;">
          <h2>¡Gracias por contactarnos, ${safeName}!</h2>
          <p>Hemos recibido tu mensaje y te responderemos a la brevedad.</p>
          <p><strong>Resumen de tu mensaje:</strong></p>
          <p>${safeMessage}</p>
          <br>
          <p style="margin-top: 24px;">Saludos,<br>Equipo ZentheraSoft</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Error al enviar el email:", error);
    const message =
      error instanceof z.ZodError
        ? "Datos inválidos en el formulario"
        : "Error al enviar el mensaje";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}