"use client";
import { useEffect, useState } from "react";
import { Analytics } from "@vercel/analytics/react";

type ConsentState = { necessary: true; analytics: boolean };

export default function ConditionalAnalytics() {
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  useEffect(() => {
    // Lire le consentement initial
    try {
      const stored = localStorage.getItem("twelvelin_cookie_consent");
      if (stored) {
        const consent: ConsentState = JSON.parse(stored);
        setAnalyticsEnabled(consent.analytics);
      }
    } catch {
      // ignore
    }

    // Écouter les changements de consentement en temps réel
    const handler = (e: CustomEvent<ConsentState>) => {
      setAnalyticsEnabled(e.detail.analytics);
    };
    window.addEventListener("cookieConsentChanged", handler as EventListener);
    return () => window.removeEventListener("cookieConsentChanged", handler as EventListener);
  }, []);

  // Ne charger Vercel Analytics que si l'utilisateur a accepté
  if (!analyticsEnabled) return null;

  return <Analytics />;
}
