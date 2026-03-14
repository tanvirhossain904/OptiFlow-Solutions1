"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const LEFT_LOGOS = [
  "/client_logo/1.png",
  "/client_logo/2.png",
  "/client_logo/3.png",
  "/client_logo/4.png",
  "/client_logo/5.png",
  "/client_logo/6.png",
  "/client_logo/logo/1.png",
  "/client_logo/logo/2.png",
  "/client_logo/logo/3.png",
  "/client_logo/logo/4.png",
  "/client_logo/logo/5.png",
  "/client_logo/logo/6.png",
];

const RIGHT_LOGOS = [
  "/client_logo/logo_left/logo1.png",
  "/client_logo/logo_left/logo2.png",
  "/client_logo/logo_left/logo3.png",
  "/client_logo/logo_left/logo4.png",
  "/client_logo/logo_left/logo5.png",
  "/client_logo/logo_left/logo7.png",
  "/client_logo/logo_left/logo8.png",
  "/client_logo/logo_left/logo6.png",
  "/client_logo/5.png",
  "/client_logo/6.png",
];

function LogoRow({
  logos,
  direction = "left",
  duration = 40,
}: {
  logos: string[];
  direction?: "left" | "right";
  duration?: number;
}) {
  const animate =
    direction === "left"
      ? { x: ["0%", "-50%"] }
      : { x: ["-50%", "0%"] };

  return (
    <div className="relative overflow-hidden">
      {/* Left fade */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--surface), transparent)" }}
      />
      {/* Right fade */}
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--surface), transparent)" }}
      />

      <motion.div
        className="flex w-max"
        animate={animate}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {[...logos, ...logos].map((src, i) => (
          <div
            key={i}
            className="group min-w-[80px] md:min-w-[120px] mx-3 flex items-center justify-center p-2 md:p-3 rounded-xl transition-all duration-300 hover:scale-105"
            style={{
              background: "rgba(94,76,220,0.04)",
              border: "1px solid var(--border-color)",
            }}
          >
            <Image
              src={src}
              alt={`Client Logo ${(i % logos.length) + 1}`}
              width={120}
              height={56}
              // ✅ Tells Next.js the actual display size → serves correct srcset
              // Mobile: ~80px wide, Desktop: ~120px wide
              sizes="(max-width: 768px) 80px, 120px"
              className="h-5 md:h-8 w-auto object-contain opacity-90 group-hover:opacity-100 transition duration-300"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function HomeBrand() {
  return (
    <section
      className="relative py-12 md:py-20 overflow-hidden"
      style={{ background: "var(--surface)" }}
    >
      {/* Ambient blobs */}
      <motion.div
        animate={{ y: [0, -40, 0], x: [0, 30, 0] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 pointer-events-none"
        style={{ background: "#5e4cdc" }}
      />
      <motion.div
        animate={{ y: [0, 50, 0], x: [0, -30, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 -right-40 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "#07002c" }}
      />

      {/* Heading */}
      <div className="text-center mb-10 px-4">
        <p
          className="text-xs font-bold uppercase tracking-[0.3em] mb-2"
          style={{ color: "var(--primary)" }}
        >
          Trusted Partners
        </p>
        <h2
          className="text-2xl md:text-3xl font-extrabold"
          style={{ color: "var(--foreground)", fontFamily: "var(--font-sans)" }}
        >
          Trusted by{" "}
          <span className="gradient-text">100+ Global Brands</span>
        </h2>
      </div>

      {/* Rows */}
      <div className="relative z-10 flex flex-col gap-4">
        <LogoRow logos={LEFT_LOGOS} direction="left" duration={35} />
        <LogoRow logos={RIGHT_LOGOS} direction="right" duration={40} />
      </div>
    </section>
  );
}