"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Trophy, Clock, Shield } from "lucide-react";

const stats = [
  { icon: <Users size={28} />, value: "+200", label: "Apprenants formés", color: "var(--emerald)" },
  { icon: <Trophy size={28} />, value: "94%", label: "Taux de réussite", color: "var(--gold)" },
  { icon: <Clock size={28} />, value: "5 ans", label: "D'expertise", color: "var(--emerald)" },
  { icon: <Shield size={28} />, value: "100%", label: "Certifié par l'État", color: "var(--gold)" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section style={{ padding: "4rem 1.5rem", background: "white", borderTop: "1px solid rgba(13,33,55,0.07)", borderBottom: "1px solid rgba(13,33,55,0.07)" }} ref={ref}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "2rem" }}>
        {stats.map((s, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{ textAlign: "center", padding: "1rem" }}>
            <div style={{ color: s.color, display: "flex", justifyContent: "center", marginBottom: "0.75rem" }}>{s.icon}</div>
            <div style={{ fontFamily: "Syne,sans-serif", fontSize: "2rem", fontWeight: 800, color: "var(--navy)", letterSpacing: "-0.03em" }}>{s.value}</div>
            <div style={{ fontSize: "0.85rem", color: "var(--gray-text)", marginTop: "0.25rem" }}>{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
