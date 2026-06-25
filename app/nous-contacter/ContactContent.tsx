"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Send, MapPin, Mail, Phone, Clock, CheckCircle, MessageSquare } from "lucide-react";
import PageHero from "@/components/UI/PageHero";
import Image from "next/image";

type FormData = { nom: string; email: string; telephone: string; formation: string; message: string; };

export default function ContactContent() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const [submitError, setSubmitError] = useState<string | null>(null);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.success) {
        setSubmitError(json.error || "Une erreur est survenue. Veuillez réessayer.");
        return;
      }
      setSent(true);
    } catch {
      setSubmitError("Impossible d envoyer le message. Vérifiez votre connexion.");
    }
  };

  const inputStyle = (err?: boolean) => ({
    width: "100%", padding: "0.85rem 1rem",
    border: `1.5px solid ${err ? "#e53e3e" : "rgba(13,33,55,0.15)"}`,
    borderRadius: 10, fontSize: "0.9rem", fontFamily: "Inter,sans-serif",
    color: "var(--navy)", background: "white", outline: "none", transition: "border-color 0.2s",
  });

  return (
    <>
      <PageHero
        tag="Nous joindre"
        title="Prenons contact"
        titleAccent="ensemble."
        subtitle="Une question sur nos formations ? Vous souhaitez vous inscrire ou obtenir un devis ? Notre équipe répond dans les 24 heures."
        image="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
        imageAlt="Équipe Twelvelin Formation"
        breadcrumbs={[{ label: "Accueil", href: "/" }, { label: "Contact" }]}
        badgeIcon={<MessageSquare size={12} />}
        badgeLabel="Réponse sous 24h"
      />

      <section style={{ padding: "6rem 1.5rem", background: "var(--bg-light)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "3rem", alignItems: "start" }} className="contact-grid">

          {/* Infos */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            {/* Image équipe */}
            <div style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 240, marginBottom: "2rem" }}>
              <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Équipe Twelvelin" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,33,55,0.65) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1.2rem", color: "white", fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1rem" }}>
                Notre équipe vous attend
              </div>
            </div>

            {/* Coordonnées */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.9rem", marginBottom: "2rem" }}>
              {[
                { icon: <MapPin size={18} />, label: "Adresse", val: "12 rue de la Formation, 75000 Paris", color: "var(--emerald)" },
                { icon: <Mail size={18} />, label: "Email", val: "contact@twelvelin.fr", color: "var(--gold)" },
                { icon: <Phone size={18} />, label: "Téléphone", val: "01 23 45 67 89", color: "var(--emerald)" },
                { icon: <Clock size={18} />, label: "Horaires", val: "Lun–Ven : 9h–18h", color: "var(--gold)" },
              ].map((c, i) => (
                <motion.div key={i}
                  initial={{ opacity: 0, x: -16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  style={{ display: "flex", gap: "1rem", alignItems: "center", background: "white", padding: "1rem 1.2rem", borderRadius: 12, boxShadow: "0 2px 10px rgba(13,33,55,0.06)" }}>
                  <div style={{ background: c.color + "18", color: c.color, borderRadius: 10, padding: "0.55rem", display: "flex", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "var(--gray-text)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: "0.9rem", color: "var(--navy)", fontWeight: 500 }}>{c.val}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Formations links */}
            <div style={{ background: "white", borderRadius: 14, padding: "1.4rem", boxShadow: "0 2px 10px rgba(13,33,55,0.06)" }}>
              <p style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "0.92rem", color: "var(--navy)", marginBottom: "1rem" }}>Nos formations</p>
              {[
                { label: "Formation ADVF — 9 mois", href: "/formations/advf", color: "var(--emerald)" },
                { label: "Formation ADVF — 3 à 6 mois", href: "/formations/advf", color: "var(--emerald)" },
                { label: "Alphabétisation A1 → C1", href: "/formations/alphabetisation", color: "var(--gold)" },
              ].map((f, i) => (
                <a key={i} href={f.href} style={{ display: "flex", alignItems: "center", gap: "0.5rem", color: "var(--navy)", fontSize: "0.86rem", textDecoration: "none", padding: "0.45rem 0", borderBottom: i < 2 ? "1px solid rgba(13,33,55,0.06)" : "none" }}>
                  <CheckCircle size={13} color={f.color} /> {f.label}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
            style={{ background: "white", borderRadius: 20, padding: "2.5rem", boxShadow: "0 4px 30px rgba(13,33,55,0.08)", border: "1px solid rgba(13,33,55,0.07)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "3rem 0" }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                  style={{ width: 72, height: 72, borderRadius: "50%", background: "var(--emerald-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <CheckCircle size={36} color="var(--emerald)" />
                </motion.div>
                <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "var(--navy)", marginBottom: "0.75rem" }}>Message envoyé !</h3>
                <p style={{ color: "var(--gray-text)", lineHeight: 1.7, maxWidth: 380, margin: "0 auto" }}>
                  Notre équipe vous contactera dans les 24 heures ouvrées. Merci de votre confiance.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--navy)", marginBottom: "0.4rem" }}>Envoyez-nous un message</h2>
                <p style={{ color: "var(--gray-text)", fontSize: "0.87rem", marginBottom: "2rem" }}>Tous les champs marqués * sont obligatoires.</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", marginBottom: "1rem" }} className="form-row">
                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: "0.4rem" }}>Nom complet *</label>
                      <input {...register("nom", { required: true })} placeholder="Marie Dupont" style={inputStyle(!!errors.nom)}
                        onFocus={e => e.target.style.borderColor = "var(--emerald)"}
                        onBlur={e => e.target.style.borderColor = errors.nom ? "#e53e3e" : "rgba(13,33,55,0.15)"} />
                    </div>
                    <div>
                      <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: "0.4rem" }}>Téléphone</label>
                      <input {...register("telephone")} placeholder="06 12 34 56 78" style={inputStyle()}
                        onFocus={e => e.target.style.borderColor = "var(--emerald)"}
                        onBlur={e => e.target.style.borderColor = "rgba(13,33,55,0.15)"} />
                    </div>
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: "0.4rem" }}>Email *</label>
                    <input {...register("email", { required: true, pattern: /^\S+@\S+\.\S+$/ })} placeholder="marie@email.fr" type="email" style={inputStyle(!!errors.email)}
                      onFocus={e => e.target.style.borderColor = "var(--emerald)"}
                      onBlur={e => e.target.style.borderColor = errors.email ? "#e53e3e" : "rgba(13,33,55,0.15)"} />
                  </div>

                  <div style={{ marginBottom: "1rem" }}>
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: "0.4rem" }}>Formation souhaitée *</label>
                    <select {...register("formation", { required: true })} style={{ ...inputStyle(!!errors.formation), cursor: "pointer" }}
                      onFocus={e => e.target.style.borderColor = "var(--emerald)"}
                      onBlur={e => e.target.style.borderColor = "rgba(13,33,55,0.15)"}>
                      <option value="">Choisissez une formation…</option>
                      <optgroup label="Formation ADVF">
                        <option value="advf-9">ADVF — Cursus 9 mois</option>
                        <option value="advf-court">ADVF — Cursus 3 à 6 mois</option>
                      </optgroup>
                      <optgroup label="Alphabétisation">
                        <option value="alpha-a1">Alphabétisation A1</option>
                        <option value="alpha-a2">Alphabétisation A2</option>
                        <option value="alpha-b1">Alphabétisation B1</option>
                        <option value="alpha-b2">Alphabétisation B2</option>
                        <option value="alpha-c1">Français avancé C1</option>
                      </optgroup>
                      <option value="autre">Autre / Je ne sais pas encore</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: "1.5rem" }}>
                    <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: "0.4rem" }}>Message</label>
                    <textarea {...register("message")} placeholder="Décrivez votre projet, vos questions, votre situation…" rows={5}
                      style={{ ...inputStyle(), resize: "vertical" }}
                      onFocus={e => e.target.style.borderColor = "var(--emerald)"}
                      onBlur={e => e.target.style.borderColor = "rgba(13,33,55,0.15)"} />
                  </div>

                  {submitError && (
                    <div style={{ background: "#FEE2E2", border: "1px solid #FECACA", borderRadius: 10, padding: "0.75rem 1rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                      <span style={{ color: "#DC2626", fontSize: "0.85rem", fontWeight: 500 }}>⚠ {submitError}</span>
                    </div>
                  )}

                  <button type="submit" disabled={isSubmitting}
                    style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", background: isSubmitting ? "var(--gray-text)" : "var(--emerald)", color: "white", border: "none", padding: "0.95rem", borderRadius: 10, fontWeight: 700, fontSize: "0.95rem", fontFamily: "Inter,sans-serif", cursor: isSubmitting ? "not-allowed" : "pointer", transition: "opacity 0.15s,transform 0.15s" }}
                    onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}>
                    {isSubmitting ? "Envoi en cours…" : <><Send size={16} /> Envoyer ma demande</>}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <style>{`
        @media(max-width:768px){
          .contact-grid{grid-template-columns:1fr!important;}
          .form-row{grid-template-columns:1fr!important;}
        }
      `}</style>
    </>
  );
}
