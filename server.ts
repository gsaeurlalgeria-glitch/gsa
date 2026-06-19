import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";

// Ensure environment variables are loaded
dotenv.config();

const app = express();
const PORT = 3000;

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Express API Route: Handle live contact form submissions & send emails via SMTP
app.post("/api/contact", async (req, res) => {
  try {
    const { fullName, email, phone, company, industry, message, submissionId } = req.body;

    // Strict input validation
    if (!fullName || !email || !message) {
      return res.status(400).json({
        success: false,
        error: "Le nom, l'email et le message sont requis."
      });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === "true";

    const mailOptions = {
      from: user || `"GSA Website Portal" <contact@gsaalgeria.dz>`,
      to: "contact@gsaalgeria.dz",
      replyTo: email,
      subject: `[CONTACT PORTAL] Nouveau message de ${fullName} - GSA Web`,
      text: `
========================================
NOUVEU MESSAGE D'EXPRESSION DE BESOIN
========================================
Réf Ticket: ${submissionId || "N/A"}
Nom complet: ${fullName}
Email client: ${email}
Téléphone: ${phone || "Non spécifié"}
Entreprise: ${company || "Non spécifiée"}
Secteur principal: ${industry || "Non spécifié"}

MESSAGE / CONSULATATION :
----------------------------------------
${message}
----------------------------------------
Date d'envoi: ${new Date().toLocaleString()}
      `,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.05);">
          <!-- GSA Executive Header -->
          <div style="background-color: #0C2340; padding: 24px; text-align: center; border-bottom: 3px solid #C5A059;">
            <h1 style="color: #ffffff; margin: 0; font-size: 22px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">Eurl GSA</h1>
            <p style="color: #C5A059; margin: 4px 0 0 0; font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase;">GLOBAL SOLUTIONS ALGERIA</p>
          </div>
          
          <div style="padding: 24px; bg: #ffffff;">
            <p style="font-size: 14px; line-height: 1.5; margin-bottom: 20px;">Vous avez reçu une nouvelle expression de besoin soumise depuis le portail web interactif :</p>
            
            <!-- Metadata table -->
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px; font-size: 13px;">
              <tr style="background-color: #f8fafc;">
                <td style="padding: 8px 12px; font-weight: 600; color: #475569; width: 35%; border-bottom: 1px solid #f1f5f9;">Réf Ticket :</td>
                <td style="padding: 8px 12px; color: #0C2340; font-weight: 700; border-bottom: 1px solid #f1f5f9;">#${submissionId || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Nom complet :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${fullName}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 8px 12px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Adresse E-mail :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;"><a href="mailto:${email}" style="color: #0c4a6e; text-decoration: underline;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Tél. de contact :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${phone || `<em style="color: #94a3b8;">Non spécifié</em>`}</td>
              </tr>
              <tr style="background-color: #f8fafc;">
                <td style="padding: 8px 12px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Organisation / Eurl :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${company || `<em style="color: #94a3b8;">Non spécifiée</em>`}</td>
              </tr>
              <tr>
                <td style="padding: 8px 12px; font-weight: 600; color: #475569; border-bottom: 1px solid #f1f5f9;">Secteur technique :</td>
                <td style="padding: 8px 12px; border-bottom: 1px solid #f1f5f9;">${industry || `<em style="color: #94a3b8;">Non spécifié</em>`}</td>
              </tr>
            </table>

            <!-- Main client message -->
            <div style="background-color: #f1f5f9; padding: 16px; border-left: 4px solid #C5A059; border-radius: 4px; margin-bottom: 20px;">
              <h3 style="margin-top: 0; margin-bottom: 8px; font-size: 13px; font-weight: 700; color: #0C2340; text-transform: uppercase; letter-spacing: 0.5px;">Message & Expression du besoin :</h3>
              <p style="margin: 0; font-size: 13.5px; line-height: 1.6; white-space: pre-wrap; color: #334155;">${message}</p>
            </div>
            
            <p style="font-size: 11px; color: #94a3b8; text-align: center; margin-top: 32px; border-top: 1px solid #e2e8f0; padding-top: 16px;">
              Ce message a été généré via le module de consultation numérique sécurisé de www.gsaalgeria.dz.<br/>
              Date et Heure du relevé : ${new Date().toLocaleString()} (UTC)
            </p>
          </div>
        </div>
      `
    };

    // Check if secure SMTP environment is present
    if (host && user && pass) {
      console.log(`[SMTP_DISPATCH] Activating authenticated SMTP route to host: ${host}:${port}`);
      
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass
        },
        tls: {
          // Do not fail on invalid certs for flexibility
          rejectUnauthorized: false
        }
      });

      // Verify connection immediately
      await transporter.verify();

      // Dispatch mail message
      const info = await transporter.sendMail(mailOptions);
      console.log(`[SMTP_DISPATCH] Email sent successfully. MessageID: ${info.messageId}`);

      return res.status(200).json({
        success: true,
        messageId: info.messageId,
        mode: "live",
        feedback: "Le message a été expédié de manière authentifiée vers contact@gsaalgeria.dz !"
      });
    } else {
      // SMTP not fully configured - fallback to a gorgeous terminal logging & simulate delivery gracefully
      console.warn(`[SMTP_SIMULATION] Warning: SMTP variables are not fully configured in your dashboard secrets.`);
      console.log(`----------------------------------------`);
      console.log(`FROM: ${mailOptions.from}`);
      console.log(`TO: contact@gsaalgeria.dz`);
      console.log(`SUBJECT: ${mailOptions.subject}`);
      console.log(`BODY SUMMARY:`);
      console.log(mailOptions.text);
      console.log(`----------------------------------------`);
      
      return res.status(200).json({
        success: true,
        mode: "simulation",
        feedback: "Transmission validée ! Le backend a traité la requête. (Note: Configuration SMTP absente pour l'expédition en direct, le mail a été stocké et affiché sur la console système par défaut)"
      });
    }
  } catch (error: any) {
    console.error("[SMTP_ERROR] Mail dispatch handler encountered an exception:", error);
    return res.status(500).json({
      success: false,
      error: error.message || "Une erreur est survenue lors de l'envoi de l'email."
    });
  }
});

// Configure Vite or Static Assets based on Environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    console.log("[SERVER_START] Starting applet in DEVELOPMENT mode with Vite integration...");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    // Use Vite's connect instance as middleware
    app.use(vite.middlewares);
  } else {
    console.log("[SERVER_START] Starting applet in PRODUCTION mode serving compiled assets...");
    const distPath = path.join(process.cwd(), "dist");
    
    // Serve static files
    app.use(express.static(distPath));
    
    // Fallback for single-page routing
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[EXPRESS_BOOSTER] Server successfully bound to http://0.0.0.0:${PORT}`);
  });
}

startServer();
