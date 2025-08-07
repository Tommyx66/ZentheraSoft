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
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  
  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY no está definida");
    return false;
  }

  try {
    const params = new URLSearchParams();
    params.append("secret", secretKey);
    params.append("response", token);

    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });

    const data = await response.json();
    console.log("✅ Respuesta reCAPTCHA:", data);

    return data.success === true;
  } catch (error) {
    console.error("❌ Error verificando reCAPTCHA:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  console.log("🚀 Iniciando procesamiento de formulario de contacto...");
  
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY no está definida");
      return NextResponse.json(
        { error: "Configuración del servidor incompleta" },
        { status: 500 }
      );
    }

    console.log("✅ RESEND_API_KEY encontrada");

    const body = await request.json();
    console.log("📝 Datos recibidos:", { 
      name: body.name, 
      email: body.email, 
      subject: body.subject,
      hasRecaptcha: !!body.recaptchaToken 
    });

    const { name, email, phone, subject, message, recaptchaToken } = contactSchema.parse(body);

    if (process.env.RECAPTCHA_SECRET_KEY && recaptchaToken) {
      console.log("🔐 Verificando reCAPTCHA...");
      const isRecaptchaValid = await verifyRecaptcha(recaptchaToken);
      if (!isRecaptchaValid) {
        console.log("❌ reCAPTCHA inválido");
        return NextResponse.json(
          { error: "Verificación reCAPTCHA fallida. Por favor intenta de nuevo." },
          { status: 400 }
        );
      }
      console.log("✅ reCAPTCHA válido");
    } else if (process.env.RECAPTCHA_SECRET_KEY && !recaptchaToken) {
      console.log("❌ Token reCAPTCHA faltante");
      return NextResponse.json(
        { error: "Token reCAPTCHA requerido" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = phone ? escapeHtml(phone) : null;
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replace(/\n/g, "<br>");

    const emailContent = `...`; // mantengo tu html aquí

    console.log("📤 Enviando email interno...");
    try {
      const internalEmailResult = await resend.emails.send({
        from: "ZentheraSoft Contacto <contacto@zentherasoft.com>",
        to: ["contacto@zentherasoft.com"],
        subject: `🚀 Nuevo contacto ZentheraSoft: ${safeSubject}`,
        html: emailContent,
        replyTo: safeEmail, // <- CORRECCIÓN IMPORTANTE
      });

      console.log("✅ Email interno enviado exitosamente!");
      console.log("📧 Resultado interno:", internalEmailResult);
      
    } catch (internalError: any) {
      console.error("❌ Error enviando email interno:", internalError);
    }

    console.log("📤 Enviando email de confirmación...");
    try {
      const confirmationResult = await resend.emails.send({
        from: "ZentheraSoft <contacto@zentherasoft.com>",
        to: [safeEmail],
        subject: "✅ Gracias por contactarnos - ZentheraSoft",
        html: `...`, // mantengo tu html aquí
      });

      console.log("✅ Email de confirmación enviado exitosamente!");
      console.log("📧 Resultado confirmación:", confirmationResult);

    } catch (confirmationError: any) {
      console.error("❌ Error enviando email de confirmación:", confirmationError);
    }

    console.log("🎉 Procesamiento completado exitosamente");
    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("💥 Error general en el procesamiento:", error);

    const message =
      error instanceof z.ZodError
        ? "Datos inválidos en el formulario"
        : "Error al enviar el mensaje";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
