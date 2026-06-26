import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { adminEmailHtml, confirmationEmailHtml } from "@/lib/emailTemplates";



// Validation simple côté serveur
function validate(data: Record<string, unknown>) {
  const errors: string[] = [];

  if (!data.nom || typeof data.nom !== "string" || data.nom.trim().length < 2) {
    errors.push("Nom invalide");
  }
  if (!data.email || typeof data.email !== "string" || !/^\S+@\S+\.\S+$/.test(data.email)) {
    errors.push("Email invalide");
  }
  if (!data.formation || typeof data.formation !== "string") {
    errors.push("Formation non sélectionnée");
  }

  return errors;
}

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { nom, email, telephone, formation, message } = body;

    // Validation
    const errors = validate(body);
    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, error: "Données invalides", details: errors },
        { status: 400 }
      );
    }

    const fromAddress = process.env.CONTACT_FROM || "Twelvelin Formation <noreply@twelvelin.fr>";
    const toAddress = process.env.CONTACT_EMAIL || "contact@twelvelin.fr";

    // Envoyer les deux emails en parallèle
    const [adminResult, confirmResult] = await Promise.allSettled([
      // 1. Email au client (Twelvelin) avec toutes les infos
      resend.emails.send({
        from: fromAddress,
        to: toAddress,
        replyTo: email,
        subject: `📋 Nouvelle demande — ${nom} (${formation})`,
        html: adminEmailHtml({ nom, email, telephone, formation, message }),
      }),

      // 2. Email de confirmation à l'utilisateur
      resend.emails.send({
        from: fromAddress,
        to: email,
        subject: "Votre demande a bien été reçue — Twelvelin Formation",
        html: confirmationEmailHtml({ nom, formation }),
      }),
    ]);

    // L'email admin est critique — si il échoue on renvoie une erreur
    if (adminResult.status === "rejected") {
      console.error("Échec envoi email admin:", adminResult.reason);
      return NextResponse.json(
        { success: false, error: "Erreur lors de l'envoi. Veuillez réessayer." },
        { status: 500 }
      );
    }

    // L'email de confirmation est optionnel — on log l'erreur sans bloquer
    if (confirmResult.status === "rejected") {
      console.warn("Échec envoi email confirmation:", confirmResult.reason);
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error("Erreur API contact:", error);
    return NextResponse.json(
      { success: false, error: "Erreur serveur. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

// Bloquer les autres méthodes HTTP
export async function GET() {
  return NextResponse.json({ error: "Méthode non autorisée" }, { status: 405 });
}
