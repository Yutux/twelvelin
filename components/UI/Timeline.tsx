"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export interface TimelineItem {
  period: string;
  label: string;
  title: string;
  desc: string;
  details: string[];
  image: string;
  imageAlt: string;
  color: string;
  side?: "left" | "right";
}

export default function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div style={{ position: "relative", maxWidth: 900, margin: "0 auto" }}>
      {/* Ligne centrale */}
      <div style={{
        position: "absolute", left: "50%", top: 0, bottom: 0,
        width: 3, transform: "translateX(-50%)",
        background: "linear-gradient(to bottom, var(--emerald), var(--gold), var(--emerald))",
        borderRadius: 3,
      }} className="timeline-line" />

      <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        {items.map((item, i) => (
          <TimelineRow key={i} item={item} index={i} />
        ))}
      </div>

      <style>{`
        @media(max-width:768px){
          .timeline-line{left:20px!important;transform:none!important;}
        }
      `}</style>
    </div>
  );
}

function TimelineRow({ item, index }: { item: TimelineItem; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const isRight = index % 2 === 1;

  return (
    <div ref={ref} style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: "0", alignItems: "center" }} className="timeline-row">
      {/* Left content */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ padding: "0 2rem 0 0", display: isRight ? "contents" : undefined }}
      >
        {!isRight && <TimelineCard item={item} />}
        {isRight && <div />}
      </motion.div>

      {/* Center dot */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", zIndex: 2 }}>
        <motion.div
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, type: "spring", stiffness: 200 }}
          style={{
            width: 52, height: 52, borderRadius: "50%",
            background: item.color,
            border: "4px solid white",
            boxShadow: `0 0 0 3px ${item.color}, 0 4px 20px rgba(0,0,0,0.15)`,
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: "Syne,sans-serif", fontWeight: 800, fontSize: "0.75rem", color: "white",
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </motion.div>
        <span style={{ background: item.color, color: "white", fontSize: "0.68rem", fontWeight: 700, padding: "0.2rem 0.6rem", borderRadius: 100, whiteSpace: "nowrap", letterSpacing: "0.04em" }}>
          {item.period}
        </span>
      </div>

      {/* Right content */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{ padding: "0 0 0 2rem" }}
      >
        {isRight ? <TimelineCard item={item} /> : <div />}
      </motion.div>

      <style>{`
        @media(max-width:768px){
          .timeline-row{grid-template-columns:44px 1fr!important;}
          .timeline-row > *:first-child{display:none!important;}
          .timeline-row > *:nth-child(2){grid-column:1;}
          .timeline-row > *:nth-child(3){grid-column:2;padding-left:1rem!important;}
        }
      `}</style>
    </div>
  );
}

function TimelineCard({ item }: { item: TimelineItem }) {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 20px 50px rgba(13,33,55,0.12)" }}
      transition={{ duration: 0.2 }}
      style={{
        background: "white",
        borderRadius: 18,
        overflow: "hidden",
        border: "1px solid rgba(13,33,55,0.07)",
        boxShadow: "0 4px 20px rgba(13,33,55,0.07)",
      }}
    >
      {/* Image */}
      <div style={{ position: "relative", height: 180 }}>
        <Image src={item.image} alt={item.imageAlt} fill style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: `linear-gradient(to top, ${item.color}cc 0%, transparent 60%)` }} />
        <div style={{ position: "absolute", bottom: "0.9rem", left: "1rem", right: "1rem" }}>
          <span style={{ background: "white", color: item.color, fontSize: "0.72rem", fontWeight: 800, padding: "0.25rem 0.7rem", borderRadius: 100, letterSpacing: "0.05em", textTransform: "uppercase" }}>
            {item.label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "1.4rem" }}>
        <h3 style={{ fontFamily: "Syne,sans-serif", fontSize: "1.1rem", fontWeight: 800, color: "var(--navy)", marginBottom: "0.5rem", letterSpacing: "-0.01em" }}>
          {item.title}
        </h3>
        <p style={{ color: "var(--gray-text)", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "1rem" }}>
          {item.desc}
        </p>
        <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.35rem" }}>
          {item.details.map((d, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.82rem", color: "var(--navy)" }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: item.color, flexShrink: 0, marginTop: 5 }} />
              {d}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}