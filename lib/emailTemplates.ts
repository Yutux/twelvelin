// Templates HTML des emails envoyés via Resend

const formations: Record<string, string> = {
  "advf-9": "Formation ADVF — Cursus 9 mois",
  "advf-court": "Formation ADVF — Cursus 3 à 6 mois",
  "alpha-a1": "Alphabétisation A1",
  "alpha-a2": "Alphabétisation A2",
  "alpha-b1": "Alphabétisation B1",
  "alpha-b2": "Alphabétisation B2",
  "alpha-c1": "Français avancé C1",
  "autre": "Autre / À définir",
};

// ─── Email reçu par le client (Twelvelin) ────────────────────────────────────
export function adminEmailHtml({
  nom,
  email,
  telephone,
  formation,
  message,
}: {
  nom: string;
  email: string;
  telephone?: string;
  formation: string;
  message?: string;
}) {
  const formationLabel = formations[formation] || formation;
  const date = new Date().toLocaleDateString("fr-FR", {
    weekday: "long", year: "numeric", month: "long", day: "numeric",
    hour: "2-digit", minute: "2-digit",
  });

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Nouvelle demande — ${nom}</title>
</head>
<body style="margin:0;padding:0;background:#F4F7FA;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7FA;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0D2137 0%,#1A3A5C 60%,#0D3D2C 100%);border-radius:16px 16px 0 0;padding:32px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td>
                    <span style="font-family:Georgia,serif;font-size:22px;font-weight:bold;color:white;letter-spacing:-0.5px;">
                      Twelvelin <span style="color:#C9A84C;font-weight:normal;">Formation</span>
                    </span>
                  </td>
                  <td align="right">
                    <span style="background:rgba(201,168,76,0.2);border:1px solid rgba(201,168,76,0.4);color:#C9A84C;font-size:11px;font-weight:700;padding:5px 12px;border-radius:100px;letter-spacing:0.05em;">
                      NOUVELLE DEMANDE
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:white;padding:36px 40px;">

              <p style="margin:0 0 8px;font-size:13px;color:#5A6A7A;text-transform:uppercase;letter-spacing:0.06em;font-weight:600;">Reçue le</p>
              <p style="margin:0 0 28px;font-size:15px;color:#0D2137;font-weight:500;">${date}</p>

              <!-- Formation badge -->
              <div style="background:#E8F5F0;border:1px solid #0E7C5B33;border-radius:10px;padding:14px 18px;margin-bottom:28px;display:inline-block;">
                <p style="margin:0;font-size:12px;color:#0E7C5B;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Formation souhaitée</p>
                <p style="margin:0;font-size:16px;color:#0D2137;font-weight:700;">${formationLabel}</p>
              </div>

              <!-- Infos contact -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:12px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Nom</p>
                    <p style="margin:0;font-size:16px;color:#0D2137;font-weight:600;">${nom}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:12px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Email</p>
                    <a href="mailto:${email}" style="color:#0E7C5B;font-size:16px;font-weight:600;text-decoration:none;">${email}</a>
                  </td>
                </tr>
                ${telephone ? `
                <tr>
                  <td style="padding-bottom:16px;">
                    <p style="margin:0 0 4px;font-size:12px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Téléphone</p>
                    <a href="tel:${telephone}" style="color:#0E7C5B;font-size:16px;font-weight:600;text-decoration:none;">${telephone}</a>
                  </td>
                </tr>
                ` : ""}
              </table>

              ${message ? `
              <!-- Message -->
              <div style="background:#F4F7FA;border-left:3px solid #0E7C5B;border-radius:0 10px 10px 0;padding:16px 20px;margin-bottom:28px;">
                <p style="margin:0 0 8px;font-size:12px;color:#5A6A7A;font-weight:600;text-transform:uppercase;letter-spacing:0.06em;">Message</p>
                <p style="margin:0;font-size:14px;color:#0D2137;line-height:1.7;">${message.replace(/\n/g, "<br>")}</p>
              </div>
              ` : ""}

              <!-- CTA répondre -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="border-radius:10px;background:#0E7C5B;">
                    <a href="mailto:${email}?subject=Re: Votre demande de formation — Twelvelin Formation"
                      style="display:inline-block;padding:14px 28px;color:white;font-weight:700;font-size:14px;text-decoration:none;border-radius:10px;">
                      ✉️ Répondre à ${nom}
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F4F7FA;border-radius:0 0 16px 16px;padding:20px 40px;border-top:1px solid #E0E8F0;">
              <p style="margin:0;font-size:12px;color:#5A6A7A;text-align:center;">
                Twelvelin Formation · 12 rue de la Formation, 75000 Paris · contact@twelvelin.fr
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

// ─── Email de confirmation envoyé à l'utilisateur ─────────────────────────────
export function confirmationEmailHtml({
  nom,
  formation,
}: {
  nom: string;
  formation: string;
}) {
  const formationLabel = formations[formation] || formation;
  const prenom = nom.split(" ")[0];

  return `
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Votre demande a bien été reçue — Twelvelin Formation</title>
</head>
<body style="margin:0;padding:0;background:#F4F7FA;font-family:Inter,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#F4F7FA;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#0D2137 0%,#1A3A5C 60%,#0D3D2C 100%);border-radius:16px 16px 0 0;padding:40px;">
              <p style="margin:0 0 6px;font-family:Georgia,serif;font-size:22px;font-weight:bold;color:white;">
                Twelvelin <span style="color:#C9A84C;font-weight:normal;">Formation</span>
              </p>
              <p style="margin:0;font-size:13px;color:rgba(255,255,255,0.5);">Organisme certifié par l'État</p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="background:white;padding:40px;">

              <!-- Checkmark -->
              <div style="text-align:center;margin-bottom:28px;">
                <div style="width:64px;height:64px;border-radius:50%;background:#E8F5F0;margin:0 auto 16px;display:flex;align-items:center;justify-content:center;font-size:28px;line-height:64px;text-align:center;">
                  ✓
                </div>
                <h1 style="margin:0;font-size:24px;font-weight:800;color:#0D2137;letter-spacing:-0.5px;">
                  Demande bien reçue !
                </h1>
              </div>

              <p style="font-size:15px;color:#0D2137;line-height:1.7;margin:0 0 20px;">
                Bonjour <strong>${prenom}</strong>,
              </p>
              <p style="font-size:15px;color:#5A6A7A;line-height:1.7;margin:0 0 24px;">
                Nous avons bien reçu votre demande concernant la formation <strong style="color:#0D2137;">${formationLabel}</strong>.
                Notre équipe va étudier votre profil et vous contactera <strong style="color:#0E7C5B;">dans les 24 heures</strong>.
              </p>

              <!-- Ce qui se passe ensuite -->
              <div style="background:#F4F7FA;border-radius:12px;padding:24px;margin-bottom:28px;">
                <p style="margin:0 0 16px;font-size:13px;font-weight:700;color:#0D2137;text-transform:uppercase;letter-spacing:0.06em;">Ce qui va se passer</p>
                ${[
                  ["📞", "Un conseiller vous appellera dans les 24h", "#0E7C5B"],
                  ["📋", "Il étudiera votre profil et vos objectifs", "#C9A84C"],
                  ["🎓", "Il vous orientera vers le cursus le plus adapté", "#0E7C5B"],
                ].map(([emoji, text, color]) => `
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                  <span style="font-size:18px;">${emoji}</span>
                  <span style="font-size:14px;color:#5A6A7A;">${text}</span>
                </div>
                `).join("")}
              </div>

              <p style="font-size:14px;color:#5A6A7A;line-height:1.7;margin:0 0 28px;">
                En attendant, n'hésitez pas à consulter le détail de vos formations sur notre site.
              </p>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:8px;">
                <tr>
                  <td style="border-radius:10px;background:#0E7C5B;">
                    <a href="https://twelvelin.fr" style="display:inline-block;padding:14px 28px;color:white;font-weight:700;font-size:14px;text-decoration:none;border-radius:10px;">
                      Visiter notre site →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#F4F7FA;border-radius:0 0 16px 16px;padding:20px 40px;border-top:1px solid #E0E8F0;">
              <p style="margin:0 0 6px;font-size:12px;color:#5A6A7A;text-align:center;">
                Twelvelin Formation · 12 rue de la Formation, 75000 Paris
              </p>
              <p style="margin:0;font-size:12px;color:#5A6A7A;text-align:center;">
                <a href="mailto:contact@twelvelin.fr" style="color:#0E7C5B;text-decoration:none;">contact@twelvelin.fr</a>
                · 01 23 45 67 89
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
