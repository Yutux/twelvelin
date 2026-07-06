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

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // 1. Affichage automatique au premier visit
  useEffect(() => {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (stored) return;
    const timer = setTimeout(() => setVisible(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // 2. Écoute le bouton "Gérer mes cookies" du footer
  useEffect(() => {
    const handler = () => setVisible(true);
    window.addEventListener("openCookieBanner", handler);
    return () => window.removeEventListener("openCookieBanner", handler);
  }, []);

  // 3. Détecter mobile
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
              bottom: isMobile ? "0.75rem" : "1.5rem",
              left: isMobile ? "0.5rem" : "50%",
              right: isMobile ? "0.5rem" : "auto",
              transform: isMobile ? "none" : "translateX(-50%)",
              width: isMobile ? "auto" : "min(680px, calc(100vw - 2rem))",
              background: "white",
              borderRadius: isMobile ? 12 : 20,
              boxShadow: "0 24px 60px rgba(13,33,55,0.2), 0 4px 16px rgba(13,33,55,0.1)",
              zIndex: 999,
              overflow: "hidden",
              border: "1px solid rgba(13,33,55,0.08)",
            }}
          >
            {/* Barre colorée */}
            <div style={{ height: 4, background: "linear-gradient(to right, var(--emerald), var(--gold))" }} />

            <div style={{ padding: isMobile ? "0.7rem 0.5rem" : "1.5rem 1.8rem" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: isMobile ? "0.5rem" : "1rem", marginBottom: isMobile ? "0.85rem" : "1rem", minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: isMobile ? "0.6rem" : "0.7rem", flex: 1, minWidth: 0 }}>
                  <div style={{ width: isMobile ? 32 : 40, height: isMobile ? 32 : 40, borderRadius: 10, background: "var(--emerald-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Cookie size={isMobile ? 16 : 20} color="var(--emerald)" />
                  </div>
                  <div style={{ minWidth: 0, flex: 1 }}>
                    <h3 style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: isMobile ? "0.82rem" : "1rem", color: "var(--navy)", margin: 0, lineHeight: 1.3, wordBreak: "break-word" }}>
                      Vos préférences
                    </h3>
                    <p style={{ color: "var(--gray-text)", fontSize: isMobile ? "0.72rem" : "0.82rem", lineHeight: 1.4, margin: 0, overflowWrap: "break-word" }}>
                      Cookies pour améliorer votre expérience.{" "}
                      <Link href="/mentions-legales" style={{ color: "var(--emerald)", textDecoration: "none", fontWeight: 600 }}>
                        Plus
                      </Link>
                    </p>
                  </div>
                </div>
                <button
                  onClick={rejectAll}
                  aria-label="Fermer"
                  style={{ background: "none", border: "none", cursor: "pointer", color: "var(--gray-text)", padding: 0, flexShrink: 0, borderRadius: 6, width: 20, height: 20, display: "flex", alignItems: "center", justifyContent: "center", marginTop: "0.2rem" }}
                  onMouseEnter={e => e.currentTarget.style.background = "rgba(13,33,55,0.06)"}
                  onMouseLeave={e => e.currentTarget.style.background = "none"}
                >
                  <X size={14} />
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
                    <div style={{ background: "var(--bg-light)", borderRadius: 10, padding: isMobile ? "1rem 0.8rem" : "1.2rem", marginBottom: isMobile ? "0.85rem" : "1rem", display: "flex", flexDirection: "column", gap: isMobile ? "0.75rem" : "1rem" }}>
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
              <div style={{ display: "flex", alignItems: "stretch", gap: isMobile && expanded ? "0" : isMobile ? "0.4rem" : "0.75rem", flexDirection: isMobile && expanded ? "column" : "row", width: "100%" }}>
                <button
                  onClick={() => setExpanded(!expanded)}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.2rem", background: "none", border: "1px solid rgba(13,33,55,0.15)", color: "var(--navy)", padding: isMobile ? "0.4rem 0.6rem" : "0.55rem 1rem", borderRadius: 6, fontWeight: 500, fontSize: isMobile ? "0.73rem" : "0.83rem", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "background 0.15s", whiteSpace: "nowrap", flex: 0 }}
                  onMouseEnter={e => e.currentTarget.style.background = "var(--bg-light)"}
                  onMouseLeave={e => e.currentTarget.style.background = "none"}
                >
                  Perso {expanded ? <ChevronUp size={15} /> : <ChevronDown size={15} />}
                </button>

                {expanded && (
                  <button
                    onClick={saveCustom}
                    style={{ background: "var(--navy)", color: "white", border: "none", padding: isMobile ? "0.4rem 0.65rem" : "0.55rem 1.1rem", borderRadius: 6, fontWeight: 600, fontSize: isMobile ? "0.73rem" : "0.83rem", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "opacity 0.15s", width: "100%", whiteSpace: "nowrap" }}
                    onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                    onMouseLeave={e => e.currentTarget.style.opacity = "1"}
                  >
                    Sauvegarder
                  </button>
                )}

                <div style={{ display: "flex", gap: "0.4rem", marginLeft: isMobile ? "0" : "auto", flex: isMobile && !expanded ? 1 : "initial" }}>
                  <button
                    onClick={rejectAll}
                    style={{ background: "none", border: "1px solid rgba(13,33,55,0.15)", color: "var(--gray-text)", padding: isMobile ? "0.4rem 0.6rem" : "0.55rem 1rem", borderRadius: 6, fontWeight: 500, fontSize: isMobile ? "0.73rem" : "0.83rem", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "background 0.15s", flex: isMobile ? 1 : "initial", whiteSpace: "nowrap" }}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--bg-light)"}
                    onMouseLeave={e => e.currentTarget.style.background = "none"}
                  >
                    Refuser
                  </button>
                  <button
                    onClick={acceptAll}
                    style={{ background: "var(--emerald)", color: "white", border: "none", padding: isMobile ? "0.4rem 0.7rem" : "0.55rem 1.3rem", borderRadius: 6, fontWeight: 700, fontSize: isMobile ? "0.73rem" : "0.83rem", cursor: "pointer", fontFamily: "Inter,sans-serif", transition: "opacity 0.15s, transform 0.15s", flex: isMobile ? 1 : "initial", whiteSpace: "nowrap" }}
                    onMouseEnter={e => { e.currentTarget.style.opacity = "0.88"; e.currentTarget.style.transform = "translateY(-1px)"; }}
                    onMouseLeave={e => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.transform = ""; }}
                  >
                    Accepter
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "flex-start", gap: isMobile ? "0.5rem" : "0.75rem" }}>
      <div style={{ width: isMobile ? 24 : 32, height: isMobile ? 24 : 32, borderRadius: 6, background: `${color}18`, color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: isMobile ? "0.65rem" : "0.9rem", marginTop: "0.1rem" }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 600, fontSize: isMobile ? "0.74rem" : "0.85rem", color: "var(--navy)", marginBottom: "0.1rem", lineHeight: 1.2 }}>{title}</div>
        <div style={{ fontSize: isMobile ? "0.67rem" : "0.78rem", color: "var(--gray-text)", lineHeight: 1.35 }}>{desc}</div>
      </div>
      <button
        onClick={() => !disabled && onChange?.(!checked)}
        disabled={disabled}
        aria-checked={checked}
        role="switch"
        style={{
          flexShrink: 0, width: isMobile ? 38 : 42, height: isMobile ? 22 : 24, borderRadius: 100,
          background: checked ? color : "rgba(13,33,55,0.15)",
          border: "none", cursor: disabled ? "not-allowed" : "pointer",
          position: "relative", transition: "background 0.25s",
          opacity: disabled ? 0.6 : 1,
        }}
      >
        <span style={{
          position: "absolute", top: isMobile ? 2.5 : 3,
          left: checked ? (isMobile ? 19 : 21) : (isMobile ? 2.5 : 3),
          width: isMobile ? 17 : 18, height: isMobile ? 17 : 18, borderRadius: "50%",
          background: "white", boxShadow: "0 1px 4px rgba(0,0,0,0.2)",
          transition: "left 0.25s",
        }} />
      </button>
    </div>
  );
}