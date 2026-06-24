"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Breadcrumb { label: string; href?: string; }

interface PageHeroProps {
  tag: string;
  title: string;
  titleAccent?: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  breadcrumbs: Breadcrumb[];
  badgeIcon?: React.ReactNode;
  badgeLabel?: string;
}

export default function PageHero({ tag, title, titleAccent, subtitle, image, imageAlt, breadcrumbs, badgeIcon, badgeLabel }: PageHeroProps) {
  return (
    <section style={{
      background: "linear-gradient(135deg, var(--navy) 0%, var(--navy-mid) 60%, #0D3D2C 100%)",
      padding: "8rem 1.5rem 5rem",
      position: "relative",
      overflow: "hidden",
      minHeight: 420,
    }}>
      {/* Background image overlay */}
      <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
        <Image src={image} alt={imageAlt} fill style={{ objectFit: "cover", opacity: 0.12 }} priority />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,33,55,0.95) 0%, rgba(13,33,55,0.75) 100%)" }} />
      </div>

      {/* Déco */}
      <div style={{ position: "absolute", top: -100, right: -100, width: 400, height: 400, borderRadius: "50%", background: "rgba(201,168,76,0.06)", pointerEvents: "none", zIndex: 1 }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 2 }}>
        {/* Breadcrumb */}
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          style={{ display: "flex", alignItems: "center", gap: "0.4rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          {breadcrumbs.map((b, i) => (
            <span key={i} style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
              {i > 0 && <ChevronRight size={13} color="rgba(255,255,255,0.35)" />}
              {b.href ? (
                <Link href={b.href} style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.82rem", textDecoration: "none", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.5)"}>
                  {b.label}
                </Link>
              ) : (
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.82rem" }}>{b.label}</span>
              )}
            </span>
          ))}
        </motion.div>

        {/* Tag */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.05 }}
          style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)", color: "var(--gold)", padding: "0.4rem 0.9rem", borderRadius: 100, fontSize: "0.78rem", fontWeight: 700, marginBottom: "1.2rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>
          {badgeIcon} {badgeLabel || tag}
        </motion.div>

        {/* Title */}
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
          style={{ fontFamily: "Syne,sans-serif", fontSize: "clamp(2rem,5vw,3.4rem)", fontWeight: 800, color: "white", letterSpacing: "-0.03em", lineHeight: 1.1, marginBottom: "1.2rem" }}>
          {title}{" "}
          {titleAccent && <span style={{ color: "var(--gold)" }}>{titleAccent}</span>}
        </motion.h1>

        {/* Subtitle */}
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55, delay: 0.18 }}
          style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.05rem", lineHeight: 1.75, maxWidth: 580 }}>
          {subtitle}
        </motion.p>
      </div>
    </section>
  );
}