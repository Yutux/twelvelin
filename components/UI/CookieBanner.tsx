"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, X, ChevronDown, ChevronUp, Shield } from "lucide-react";
import Link from "next/link";

type ConsentState = {
  necessary: true;
  analytics: boolean;
};

const COOKIE_KEY = "twelvelin_cookie_consent";

export function useCookieConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (stored) setConsent(JSON.parse(stored));
    } catch { /* ignore */ }
  }, []);

  const save = (state: ConsentState) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(state));
    setConsent(state);
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: state }));
  };

  return { consent, save };
}

export default function CookieBanner({ forceOpen }: { forceOpen?: boolean }) {
  // On lit localStorage directement à l'init pour éviter le race condition
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);

  useEffect(() => {
    // Vérifier si un choix existe déjà
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored && !forceOpen) return; // Déjà un choix — on n'affiche pas sauf si on force l'ouverture

    if (forceOpen) {
      setVisible(true);
      return;
    }

    // Pas encore de choix → afficher après délai
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, [forceOpen]); // Réagir si on force l'ouverture depuis le parent

  const save = (state: ConsentState) => {
    localStorage.setItem(COOKIE_KEY, JSON.stringify(state));
    window.dispatchEvent(new CustomEvent("cookieConsentChanged", { detail: state }));
    setVisible(false);
  };

  const acceptAll = () => save({ necessary: true, analytics: true });
  const rejectAll = () => save({ necessary: true, analytics: false });
  const saveCustom = () => save({ necessary: true, analytics });

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{ position: "fixed", inset: 0, background: "rgba(13,33,55,0.35)", zIndex: 998, backdropFilter: "blur(2px)" }}
            onClick={rejectAll}
          />

          {/* Bannière */}
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            style={{
              position: "fixed",
              bottom: "1.5rem",
              left: "50%",
              transform: "translateX(-50%)",
              width: "min(680px, calc(100vw - 2rem))",
              background: "white",
              borderRadius: 20,
              boxShadow: "0 24px 60px rgba(13,33,55,0.2), 0 4px 16px rgba(13,33,55,0.1)",
              zIndex: 999,
              overflow: "hidden",
              border: "1px solid rgba(13,33,55,0.08)",
            }}
          >
            {/* Barre colorée */}
            <div style={{ height: 4, background: "linear-gradient(to right, var(--emerald), var(--gold))" }} />

            <div style={{ padding: "1.5rem 1.8rem" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "1rem", marginBottom: "1rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.7rem" }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: "var(--emerald-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Cookie size={20} color="var(--emerald)" />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1rem", color: "var(--navy)", marginBottom: "0.15rem" }}>
                      Vos préférences de cookies
                    </h3>
                    <p style={{ color: "var(--gray-text)", fontSize: "0.82rem" }}>
                      Nous utilisons des cookies pour améliorer votre expérience.{" "}
                      <Link href="/mentions-legales" style={{ color: "var(--emerald)", textDecoration: "none", fontWeight: 600 }}>
                        En savoir plus
                      </Link>
                    </p>
                  </div>
                </div>
                <button onClick={rejectAll}
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--gray-text)", padding: "0.25rem", flexShrink: 0, borderRadius: 6, transition: "background 0.15s" }}
                  aria-label="Fermer"
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(13,33,55,0.06)"}
                  onMouseLeave={e => e.currentTarget.style.background = "none"}>
                  <X size={18} />
                </button>
              </div>

              {/* Détail personnalisé */}
              <AnimatePresence>
                {expanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div style={{ background: "var(--bg-light)", borderRadius: 12, padding: "1rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                      <CookieRow
                        icon={<Shield size={15} />}
                        title="Cookies nécessaires"
                        desc="Indispensables au fonctionnement du site. Toujours actifs."
                        checked={true}
                        disabled={true}
                        color="var(--emerald)"
                      />
                      <CookieRow
                        icon="📊"
                        title="Analytics (Vercel)"
                        desc="Nous aident à comprendre comment vous utilisez le site. Sans données personnelles identifiables."
                        checked={analytics}
                        disabled={false}
                        color="var(--gold)"
                        onChange={setAnalytics}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Actions */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                <button onClick={() => setExpanded(!expanded)}
                  style={{ display: "flex", alignItems: "center", gap: "0.35rem", background: "none", border: "1px solid rgba(13,33,55,0.15)", color: "var(--navy)", padding: "0.55rem 1rem", borderRadius: 8, fontWeight: 500, fontSize: "0.83rem", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--bg-light)"}
                  onMouseLeave={e => e.currentTarget.style.background = "none"}>
                  Personnaliser {expanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
                </button>

                {expanded && (
                  <button onClick={saveCustom}
                    style={{ background: "var(--navy)", color: "white", border: "none", padding: "0.55rem 1.1rem", borderRadius: 8, fontWeight: 600, fontSize: "0.83rem", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "opacity 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
                    Sauvegarder
                  </button>
                )}

                <div style={{ display: "flex", gap: "0.6rem", marginLeft: "auto" }}>
                  <button onClick={rejectAll}
                    style={{ background: "none", border: "1px solid rgba(13,33,55,0.15)", color: "var(--gray-text)", padding: "0.55rem 1rem", borderRadius: 8, fontWeight: 500, fontSize: "0.83rem", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "background 0.15s" }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--bg-light)"}
                    onMouseLeave={e => e.currentTarget.style.background = "none"}>
                    Refuser
                  </button>
                  <button onClick={acceptAll}
                    style={{ background: "var(--emerald)", color: "white", border: "none", padding: "0.55rem 1.3rem", borderRadius: 8, fontWeight: 700, fontSize: "0.83rem", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "opacity 0.15s, transform 0.15s" }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}>
                    Tout accepter
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function CookieRow({
  icon, title, desc, checked, disabled, color, onChange,
}: {
  icon: React.ReactNode; title: string; desc: string;
  checked: boolean; disabled: boolean; color: string;
  onChange?: (v: boolean) => void;
}) {
  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: "0.75rem" }}>
      <div style={{ width: 32, height: 32, borderRadius: 8, background: `${color}18`, color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "0.9rem" }}>
        {icon}
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontWeight: 600, fontSize: "0.85rem", color: "var(--navy)", marginBottom: "0.15rem" }}>{title}</div>
        <div style={{ fontSize: "0.78rem", color: "var(--gray-text)", lineHeight: 1.5 }}>{desc}</div>
      </div>
      <button
        onClick={() => !disabled && onChange?.(!checked)}
        disabled={disabled}
        aria-checked={checked}
        role="switch"
        style={{
          flexShrink: 0, width: 42, height: 24, borderRadius: 100,
          background: checked ? color : "rgba(13,33,55,0.15)",
          border: "none", cursor: disabled ? "not-allowed" : "pointer",
          position: "relative", transition: "background 0.25s",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <span style={{
          position: "absolute", top: 3,
          left: checked ? 21 : 3,
          width: 18, height: 18, borderRadius: "50%",
          background: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
          transition: "left 0.25s",
        }} />
      </button>
    </div>
  );
}
