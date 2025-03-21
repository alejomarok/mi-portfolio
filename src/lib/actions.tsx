// src/lib/actions.ts
import nodemailer from "nodemailer";

// Configuración del transporte de correos (usando Gmail como ejemplo)
const transporter = nodemailer.createTransport({
  service: "gmail", // Usa tu servicio de correo (en este caso Gmail)
  auth: {
    user: process.env.EMAIL_USER, // Usuario de correo electrónico (por ejemplo, tu cuenta de Gmail)
    pass: process.env.EMAIL_PASS, // Contraseña de la cuenta (o aplicación específica si usas Gmail)
  },
});

interface EmailOptions {
  email: string;  // Correo del remitente
  to: string;     // Dirección de destino
  subject: string; // Asunto del correo
  message: string;  // Cuerpo del correo (ahora 'message' en lugar de 'text')
  html?: string;  // Cuerpo en HTML (opcional)
  name?: string;  // Nombre del remitente, opcional
}

export const sendEmail = async ({ to, subject, message, html, email }: EmailOptions) => {
  try {
    const mailOptions = {
      from: email, // Dirección del remitente
      to, // Dirección de destino
      subject, // Asunto del correo
      text: message, // Cuerpo en texto plano (ahora 'message' en lugar de 'text')
      html, // Cuerpo en HTML (si lo tienes)
    };

    // Enviar el correo
    const info = await transporter.sendMail(mailOptions);
    console.log("Correo enviado: " + info.response);
    return info;
  } catch (error) {
    console.error("Error al enviar correo: ", error);
    throw new Error("No se pudo enviar el correo.");
  }
};
