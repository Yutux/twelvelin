"use client";
import { MapPin, Mail, Phone, Shield } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CookiePreferencesButton from "@/components/UI/CookiePreferencesButton";

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy)", color: "white", padding: "3.5rem 1.5rem 1.5rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))", gap: "2.5rem", marginBottom: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1rem" }}>
              <Image src="/logo.png" alt="Twelvelin" width={34} height={34} style={{ borderRadius: 6, objectFit: "contain" }} />
              <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.05rem" }}>
                Twelvelin <span style={{ color: "var(--gold)", fontWeight: 400 }}>Formation</span>
              </span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.86rem", lineHeight: 1.7, marginBottom: "1.2rem" }}>
              Organisme de formation certifié par l&apos;État, spécialisé en ADVF et alphabétisation.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", padding: "0.4rem 0.8rem", borderRadius: 8, width: "fit-content" }}>
              <Shield size={12} color="var(--gold)" />
              <span style={{ fontSize: "0.74rem", color: "var(--gold)", fontWeight: 600 }}>Certifié par l&apos;État</span>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h4 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, marginBottom: "1rem", fontSize: "0.9rem", color: "var(--gold)" }}>Formations</h4>
            {[
              { label: "ADVF — 9 mois", href: "/formations/advf" },
              { label: "ADVF — 3 à 6 mois", href: "/formations/advf" },
              { label: "Alphabétisation A1→C1", href: "/formations/alphabetisation" },
            ].map(f => (
              <Link key={f.label} href={f.href}
                style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.45rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                {f.label}
              </Link>
            ))}
          </div>

          {/* Liens utiles */}
          <div>
            <h4 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, marginBottom: "1rem", fontSize: "0.9rem", color: "var(--gold)" }}>Informations</h4>
            {[
              { label: "Comment ça marche", href: "/#etapes" },
              { label: "Nous contacter", href: "/nous-contacter" },
              { label: "Mentions légales", href: "/mentions-legales" },
            ].map(l => (
              <Link key={l.label} href={l.href}
                style={{ display: "block", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.45rem", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "Syne,sans-serif", fontWeight: 700, marginBottom: "1rem", fontSize: "0.9rem", color: "var(--gold)" }}>Contact</h4>
            {[
              { icon: <MapPin size={13} />, text: "12 rue de la Formation, 75000 Paris" },
              { icon: <Mail size={13} />, text: "contact@twelvelin.fr" },
              { icon: <Phone size={13} />, text: "01 23 45 67 89" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", color: "rgba(255,255,255,0.5)", fontSize: "0.85rem", marginBottom: "0.6rem" }}>
                <span style={{ marginTop: 2, flexShrink: 0, color: "var(--gold)" }}>{c.icon}</span>
                {c.text}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.5rem", display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "0.5rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.3)" }}>
          <span>© 2025 Twelvelin Formation. Tous droits réservés.</span>
          <div style={{ display: "flex", gap: "1.2rem", alignItems: "center", flexWrap: "wrap" }}>
            <span>N° déclaration : 11 75 XXXXXXXX</span>
            <Link href="/mentions-legales" style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.color = "rgba(255,255,255,0.7)"}
              onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.3)"}>
              Mentions légales
            </Link>
            <CookiePreferencesButton />
          </div>
        </div>
      </div>
    </footer>
  );
}
