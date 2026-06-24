"use client";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  {
    label: "Formations",
    children: [
      { label: "ADVF", href: "/formations/advf", desc: "Auxiliaire de Vie aux Familles" },
      { label: "Alphabétisation", href: "/formations/alphabetisation", desc: "Niveaux A1 → C1" },
    ],
  },
  { label: "Comment ça marche", href: "/#etapes" },
  { label: "Contact", href: "/nous-conta cter" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownTimeout = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleDropdownEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdown(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setDropdown(false);
    }, 150);
  };

  const forceOpaque = !isHome;
  const opaque = forceOpaque || scrolled;

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 0.35s, box-shadow 0.35s",
      background: opaque ? "rgba(13,33,55,0.97)" : "transparent",
      boxShadow: opaque ? "0 2px 24px rgba(0,0,0,0.18)" : "none",
      backdropFilter: opaque ? "blur(10px)" : "none",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between", height: 70 }}>
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.7rem", textDecoration: "none" }}>
          <Image src="/logo.png" alt="Twelvelin Formation" width={38} height={38} style={{ borderRadius: 8, objectFit: "contain" }} />
          <span style={{ fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "1.15rem", color: "white", letterSpacing: "-0.02em" }}>
            Twelvelin <span style={{ color: "var(--gold)", fontWeight: 400 }}>Formation</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", gap: "1.8rem", alignItems: "center" }} className="nav-desktop">
          {nav.map((item) =>
            item.children ? (
              <div key={item.label} style={{ position: "relative" }}
                onMouseEnter={handleDropdownEnter}
                onMouseLeave={handleDropdownLeave}>
                <button style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.3rem", fontWeight: 500, fontSize: "0.88rem", color: "rgba(255,255,255,0.82)", fontFamily: "Inter,sans-serif", transition: "color 0.2s" }}
                  onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                  onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.82)"}>
                  {item.label} <ChevronDown size={13} />
                </button>
                {dropdown && (
                  <div style={{ position: "absolute", top: "calc(100% + 10px)", left: "50%", transform: "translateX(-50%)", background: "var(--navy)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 14, padding: "0.6rem", minWidth: 220, boxShadow: "0 20px 50px rgba(0,0,0,0.3)", zIndex: 200 }}>
                    {item.children.map(c => (
                      <Link key={c.href} href={c.href}
                        style={{ display: "block", padding: "0.75rem 1rem", borderRadius: 10, textDecoration: "none", transition: "background 0.15s" }}
                        onMouseEnter={e => e.currentTarget.style.background = "rgba(255,255,255,0.07)"}
                        onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                        <div style={{ fontWeight: 600, color: "white", fontSize: "0.88rem", marginBottom: "0.15rem" }}>{c.label}</div>
                        <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.78rem" }}>{c.desc}</div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link key={item.href} href={item.href!}
                style={{ fontWeight: 500, fontSize: "0.88rem", color: "rgba(255,255,255,0.82)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--gold)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.82)"}>
                {item.label}
              </Link>
            )
          )}
          <Link href="/nous-contacter" style={{ background: "var(--emerald)", color: "white", padding: "0.5rem 1.3rem", borderRadius: 8, fontWeight: 600, fontSize: "0.88rem", textDecoration: "none", transition: "opacity 0.15s" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            S&apos;inscrire
          </Link>
        </nav>

        {/* Burger */}
        <button onClick={() => setOpen(!open)} className="nav-burger"
          style={{ background: "none", border: "none", cursor: "pointer", color: "white", display: "none" }} aria-label="Menu">
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ background: "var(--navy)", padding: "1rem 1.5rem 1.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <Link href="/formations/advf" onClick={() => setOpen(false)} style={{ display: "block", padding: "0.75rem 0", color: "rgba(255,255,255,0.8)", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Formation ADVF</Link>
          <Link href="/formations/alphabetisation" onClick={() => setOpen(false)} style={{ display: "block", padding: "0.75rem 0", color: "rgba(255,255,255,0.8)", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Alphabétisation</Link>
          <Link href="/#etapes" onClick={() => setOpen(false)} style={{ display: "block", padding: "0.75rem 0", color: "rgba(255,255,255,0.8)", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Comment ça marche</Link>
          <Link href="/nous-contacter" onClick={() => setOpen(false)} style={{ display: "block", padding: "0.75rem 0", color: "rgba(255,255,255,0.8)", fontWeight: 500, textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>Contact</Link>
          <Link href="/nous-contacter" onClick={() => setOpen(false)} style={{ display: "block", marginTop: "1rem", background: "var(--emerald)", color: "white", textAlign: "center", padding: "0.75rem", borderRadius: 8, fontWeight: 600, textDecoration: "none" }}>S&apos;inscrire</Link>
        </div>
      )}

      <style>{`
        @media(max-width:768px){.nav-desktop{display:none!important;}.nav-burger{display:flex!important;}}
      `}</style>
    </header>
  );
}