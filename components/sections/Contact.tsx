"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Send, MapPin, Mail, Phone, CheckCircle } from "lucide-react";
import Image from "next/image";

type FormData = {
  nom: string;
  email: string;
  telephone: string;
  formation: string;
  message: string;
};

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log(data);
    await new Promise(r => setTimeout(r, 1000));
    setSent(true);
  };

  const inputStyle = (hasError?: boolean) => ({
    width: "100%",
    padding: "0.8rem 1rem",
    border: `1.5px solid ${hasError ? "#e53e3e" : "rgba(13,33,55,0.15)"}`,
    borderRadius: 10,
    fontSize: "0.9rem",
    fontFamily: "Inter,sans-serif",
    color: "var(--navy)",
    background: "white",
    outline: "none",
    transition: "border-color 0.2s",
  });

  return (
    <section id="contact" style={{ padding: "6rem 1.5rem", background: "var(--bg-light)" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <span style={{ color: "var(--emerald)", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Nous rejoindre</span>
          <h2 style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "var(--navy)", marginTop: "0.5rem", letterSpacing: "-0.02em" }}>
            Prenons contact
          </h2>
          <p style={{ color: "var(--gray-text)", fontSize: "1rem", lineHeight: 1.7, maxWidth: 480, margin: "0.75rem auto 0" }}>
            Une question sur nos formations ? Prêt à vous inscrire ? Notre équipe répond sous 24h.
          </p>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "3rem", alignItems: "start" }} className="contact-grid">
          {/* Infos */}
          <motion.div initial={{ opacity: 0, x: -24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            {/* Image */}
            <div style={{ borderRadius: 18, overflow: "hidden", position: "relative", height: 220, marginBottom: "2rem" }}>
              <Image src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&q=80" alt="Notre équipe" fill style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,33,55,0.6) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1.2rem", color: "white", fontFamily: "Syne,sans-serif", fontWeight: 700, fontSize: "1.05rem" }}>Notre équipe vous attend</div>
            </div>

            {/* Coordonnées */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { icon: <MapPin size={18} />, label: "Adresse", val: "12 rue de la Formation, 75000 Paris" },
                { icon: <Mail size={18} />, label: "Email", val: "contact@twelvelin.fr" },
                { icon: <Phone size={18} />, label: "Téléphone", val: "01 23 45 67 89" },
              ].map((c, i) => (
                <div key={i} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", background: "white", padding: "1rem 1.2rem", borderRadius: 12, boxShadow: "0 2px 10px rgba(13,33,55,0.06)" }}>
                  <div style={{ background: "var(--emerald-light)", color: "var(--emerald)", borderRadius: 10, padding: "0.55rem", display: "flex", flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <p style={{ fontSize: "0.72rem", color: "var(--gray-text)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 2 }}>{c.label}</p>
                    <p style={{ fontSize: "0.9rem", color: "var(--navy)", fontWeight: 500 }}>{c.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div initial={{ opacity: 0, x: 24 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}
            style={{ background: "white", borderRadius: 20, padding: "2.5rem", boxShadow: "0 4px 30px rgba(13,33,55,0.08)", border: "1px solid rgba(13,33,55,0.07)" }}>
            {sent ? (
              <div style={{ textAlign: "center", padding: "2rem 0" }}>
                <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", stiffness: 200 }}
                  style={{ width: 70, height: 70, borderRadius: "50%", background: "var(--emerald-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem" }}>
                  <CheckCircle size={34} color="var(--emerald)" />
                </motion.div>
                <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.4rem", color: "var(--navy)", marginBottom: "0.75rem" }}>Message envoyé !</h3>
                <p style={{ color: "var(--gray-text)", lineHeight: 1.7 }}>Notre équipe vous contactera dans les 24h. Merci de votre intérêt pour Twelvelin Formation.</p>
              </div>
            ) : (
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
                    <option value="advf-9">ADVF — Cursus 9 mois</option>
                    <option value="advf-court">ADVF — Cursus 3 à 6 mois</option>
                    <option value="alpha-a1">Alphabétisation A1</option>
                    <option value="alpha-a2">Alphabétisation A2</option>
                    <option value="alpha-b1">Alphabétisation B1</option>
                    <option value="alpha-b2">Alphabétisation B2</option>
                    <option value="alpha-c1">Français avancé C1</option>
                  </select>
                </div>

                <div style={{ marginBottom: "1.5rem" }}>
                  <label style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--navy)", display: "block", marginBottom: "0.4rem" }}>Message</label>
                  <textarea {...register("message")} placeholder="Dites-nous en plus sur votre projet ou vos questions…" rows={4}
                    style={{ ...inputStyle(), resize: "vertical" }}
                    onFocus={e => e.target.style.borderColor = "var(--emerald)"}
                    onBlur={e => e.target.style.borderColor = "rgba(13,33,55,0.15)"} />
                </div>

                <button type="submit" disabled={isSubmitting}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.6rem", background: isSubmitting ? "var(--gray-text)" : "var(--emerald)", color: "white", border: "none", padding: "0.95rem", borderRadius: 10, fontWeight: 700, fontSize: "0.95rem", fontFamily: "Inter,sans-serif", cursor: isSubmitting ? "not-allowed" : "pointer", transition: "opacity 0.15s, transform 0.15s" }}
                  onMouseEnter={e => { if (!isSubmitting) { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}}
                  onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}>
                  {isSubmitting ? "Envoi en cours…" : <><Send size={16} /> Envoyer ma demande</>}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media(max-width:768px){
          .contact-grid{grid-template-columns:1fr!important;}
          .form-row{grid-template-columns:1fr!important;}
        }
      `}</style>
    </section>
  );
}
