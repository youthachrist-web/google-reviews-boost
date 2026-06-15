import { Router } from "express";
import nodemailer from "nodemailer";
import { logger } from "../lib/logger";

const router = Router();

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

router.post("/contact", async (req, res) => {
  const { name, business, email, phone, plan } = req.body;

  if (!name || !business || !email || !phone || !plan) {
    res.status(400).json({ error: "Todos os campos são obrigatórios." });
    return;
  }

  const planLabels: Record<string, string> = {
    basico: "Plano Básico (€39)",
    premium: "Plano Premium (€79 - €149)",
    mensal: "Plano Mensal (€29 - €99/mês)",
    completa: "A Solução Completa (€100 - €300)",
    menu_essencial: "Menu Essencial para Restaurante (€49)",
    menu_reviews: "Menu + Reviews para Restaurante (€89)",
    restaurante_completo: "Restaurante Completo (€149/mês)",
  };

  const planLabel = planLabels[plan] || plan;

  try {
    await transporter.sendMail({
      from: `"Google Reviews Boost" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Novo Lead: ${name} — ${planLabel}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #f9f9f9; padding: 24px; border-radius: 12px;">
          <div style="background: #1a1a2e; padding: 24px; border-radius: 8px; margin-bottom: 24px;">
            <h1 style="color: #fbbf24; margin: 0; font-size: 24px;">Reviews<span style="color: #fff;">Boost</span></h1>
            <p style="color: #aaa; margin: 4px 0 0;">Novo pedido de contacto</p>
          </div>
          
          <div style="background: #fff; padding: 24px; border-radius: 8px; border: 1px solid #e5e7eb;">
            <h2 style="color: #1a1a2e; margin: 0 0 16px; font-size: 18px;">Dados do Lead</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px; width: 40%;">Nome</td>
                <td style="padding: 10px 0; color: #1a1a2e; font-weight: 600;">${name}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Negócio</td>
                <td style="padding: 10px 0; color: #1a1a2e; font-weight: 600;">${business}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Email</td>
                <td style="padding: 10px 0; color: #1a1a2e; font-weight: 600;"><a href="mailto:${email}" style="color: #fbbf24;">${email}</a></td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Telemóvel</td>
                <td style="padding: 10px 0; color: #1a1a2e; font-weight: 600;"><a href="tel:${phone}" style="color: #fbbf24;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #6b7280; font-size: 14px;">Plano</td>
                <td style="padding: 10px 0;">
                  <span style="background: #fbbf24; color: #1a1a2e; padding: 4px 12px; border-radius: 99px; font-weight: 700; font-size: 13px;">${planLabel}</span>
                </td>
              </tr>
            </table>
          </div>

          <div style="margin-top: 16px; padding: 16px; background: #fef9ec; border-radius: 8px; border: 1px solid #fde68a;">
            <p style="margin: 0; color: #92400e; font-size: 13px;">
              <strong>Acao recomendada:</strong> Entra em contacto com ${name} nas próximas 24 horas para fechar a venda.
            </p>
          </div>

          <p style="text-align: center; color: #9ca3af; font-size: 12px; margin-top: 24px;">
            Google Reviews Boost • ${new Date().toLocaleDateString("pt-PT", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
          </p>
        </div>
      `,
    });

    logger.info({ name, business, plan }, "Contact form submitted and email sent");
    res.json({ success: true, message: "Pedido enviado com sucesso!" });
  } catch (err) {
    logger.error({ err }, "Failed to send contact email");
    res.status(500).json({ error: "Erro ao enviar pedido. Por favor tente novamente." });
  }
});

export default router;
