"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export default function HomeOwner() {
  const sectionRef   = useRef<HTMLDivElement>(null);
  const imgWrapRef   = useRef<HTMLDivElement>(null);
  const logoRef      = useRef<HTMLDivElement>(null);
  const labelRef     = useRef<HTMLDivElement>(null);
  const quoteIconRef = useRef<HTMLDivElement>(null);
  const enQuoteRef   = useRef<HTMLQuoteElement>(null);
  const dividerRef   = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const statItemsRef = useRef<HTMLDivElement[]>([]);
  const glowRef      = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;

      /* 1. IMAGE parallax */
      if (imgWrapRef.current) {
        gsap.fromTo(
          imgWrapRef.current,
          { y: 70, scale: 0.95, opacity: 0 },
          {
            y: -70, scale: 1, opacity: 1, ease: "none",
            scrollTrigger: {
              trigger: section, start: "top bottom", end: "bottom top", scrub: 1.4,
            },
          }
        );
      }

      /* 2. LOGO BADGE scroll-driven */
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          y: 110, rotate: 8, scale: 0.85, ease: "none",
          scrollTrigger: {
            trigger: section, start: "top center", end: "bottom top", scrub: 1.8,
          },
        });
        gsap.from(logoRef.current, {
          opacity: 0, scale: 0.5, y: -30, duration: 1, delay: 0.5, ease: "back.out(2)",
          scrollTrigger: {
            trigger: section, start: "top 80%", toggleActions: "play none none reverse",
          },
        });
      }

      /* 3. AMBIENT GLOW parallax */
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: -80, x: 40, ease: "none",
          scrollTrigger: {
            trigger: section, start: "top bottom", end: "bottom top", scrub: 2,
          },
        });
      }

      /* 4. LABEL slide in */
      if (labelRef.current) {
        gsap.from(labelRef.current, {
          x: -40, opacity: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: {
            trigger: labelRef.current, start: "top 85%", toggleActions: "play none none reverse",
          },
        });
      }

      /* 5. QUOTE ICON pop */
      if (quoteIconRef.current) {
        gsap.from(quoteIconRef.current, {
          scale: 0, opacity: 0, rotation: -20, duration: 0.7, ease: "back.out(2.5)",
          scrollTrigger: {
            trigger: quoteIconRef.current, start: "top 88%", toggleActions: "play none none reverse",
          },
        });
      }

      /* 6. QUOTE SplitText word reveal */
      if (enQuoteRef.current) {
        const split = new SplitText(enQuoteRef.current, { type: "words,chars" });
        gsap.from(split.words, {
          opacity: 0, y: 28, rotationX: -40, stagger: 0.04, duration: 0.65, ease: "power3.out",
          scrollTrigger: {
            trigger: enQuoteRef.current, start: "top 82%", toggleActions: "play none none reverse",
          },
        });
      }

      /* 7. DIVIDER reveal */
      if (dividerRef.current) {
        gsap.from(dividerRef.current, {
          scaleX: 0, transformOrigin: "left center", duration: 0.9, ease: "power4.out",
          scrollTrigger: {
            trigger: dividerRef.current, start: "top 88%", toggleActions: "play none none reverse",
          },
        });
      }

      /* 8. STATS stagger */
      if (statsRef.current) {
        gsap.from(statsRef.current, {
          opacity: 0, y: 30, duration: 0.6, ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current, start: "top 88%", toggleActions: "play none none reverse",
          },
        });
        statItemsRef.current.forEach((el, i) => {
          if (!el) return;
          gsap.from(el, {
            opacity: 0, y: 24, scale: 0.9, duration: 0.6, delay: i * 0.12, ease: "back.out(1.6)",
            scrollTrigger: {
              trigger: statsRef.current, start: "top 85%", toggleActions: "play none none reverse",
            },
          });
        });
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-44 bg-[#f2f2f2] dark:bg-[#0c2501]"
    >
      {/* Ambient glows */}
      <div
        ref={glowRef}
        className="absolute -top-40 -left-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "rgba(129,250,0,0.07)", filter: "blur(140px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "rgba(129,250,0,0.05)", filter: "blur(120px)" }}
      />

      {/* Giant decorative quote mark */}
      <div
        className="absolute top-4 right-6 text-[260px] leading-none select-none pointer-events-none"
        style={{ color: "rgba(129,250,0,0.04)", fontFamily: "Georgia, serif" }}
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">

          {/* ── LEFT: Owner Image ── */}
          <div className="lg:w-5/12 relative flex-shrink-0 w-full">

            {/* Glow halo behind image */}
            <div
              className="absolute inset-0 rounded-[40px] pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(129,250,0,0.15) 0%, rgba(12,37,1,0.3) 100%)",
                filter: "blur(36px)",
                transform: "scale(1.1)",
              }}
            />

            {/* Image card */}
            <div
              ref={imgWrapRef}
              className="relative rounded-[36px] overflow-hidden will-change-transform"
              style={{
                aspectRatio: "3/4",
                border: "2px solid rgba(129,250,0,0.2)",
                boxShadow: "0 48px 120px rgba(129,250,0,0.12), 0 8px 32px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src="/owner/owner.jpg"
                alt="EasySoft Founder"
                fill
                className="object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />

              {/* Placeholder */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0F2318]">
                <div
                  className="w-32 h-32 rounded-full flex items-center justify-center text-6xl"
                  style={{ background: "rgba(129,250,0,0.08)", border: "2px solid rgba(129,250,0,0.2)" }}
                >
                  👤
                </div>
                <p className="text-xs font-medium text-gray-500">
                  Add photo → /public/owner/owner.jpg
                </p>
              </div>

              {/* Name plate */}
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-6"
                style={{ background: "linear-gradient(to top, rgba(7,20,1,0.95) 0%, transparent 100%)" }}
              >
                <p className="text-white font-bold text-xl">Mehedi H. Jony</p>
                <p className="text-sm mt-0.5 text-gray-400">
                  Founder & CEO · EasySoft 
                </p>
              </div>
            </div>

            {/* Logo badge */}
            <div
              ref={logoRef}
              className="absolute -right-5 top-8 rounded-2xl p-3 will-change-transform z-10 bg-[#0F2318]"
              style={{
                border: "1.5px solid rgba(129,250,0,0.25)",
                boxShadow: "0 12px 40px rgba(129,250,0,0.15)",
              }}
            >
              <Image priority src="/logos/icon.png" height={44} width={44} alt="EasySoft logo" />
            </div>
          </div>

          {/* ── RIGHT: Quote ── */}
          <div className="lg:w-7/12 space-y-8">

            {/* Label */}
            <div ref={labelRef} className="flex items-center gap-3 will-change-transform">
              <span className="block h-px w-10 flex-shrink-0 bg-[#81fa00]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#81fa00]">
                Founder's Message
              </span>
            </div>

            {/* Quote icon */}
            <div ref={quoteIconRef} className="will-change-transform">
              <Quote size={48} strokeWidth={1.3} className="text-[#81fa00] opacity-40" />
            </div>

            {/* English quote — SplitText word reveal */}
            <blockquote
              ref={enQuoteRef}
              className="text-xl md:text-3xl lg:text-[2rem] font-bold leading-snug will-change-transform text-[#131313] dark:text-white"
            >
              "At EasySoft , we don't measure success by the lines of
              code we write — we measure it by the{" "}
              <span className="text-[#81fa00]">growth we unlock</span>{" "}
              for every business we touch."
            </blockquote>

            {/* Divider */}
            <div
              ref={dividerRef}
              className="h-px w-24 will-change-transform bg-[#81fa00]/20"
            />

            {/* Sub-quote */}
            <p className="text-base md:text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              Every project is a new beginning — a chance to build something
              meaningful, scalable, and{" "}
              <span className="text-[#81fa00] font-semibold">
                built to last
              </span>
              . We treat every client's vision as our own mission.
            </p>

            {/* Stats */}
            <div
              ref={statsRef}
              className="flex flex-wrap gap-4 md:gap-10 pt-4 border-t will-change-transform border-[#81fa00]/10"
            >
              {[
                { value: "5+",   label: "Years",        sub: "of Experience" },
                { value: "120+", label: "Projects",     sub: "Successfully Delivered" },
                { value: "98%",  label: "Satisfaction", sub: "Client Happiness Rate" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  ref={(el) => { if (el) statItemsRef.current[i] = el; }}
                  className="will-change-transform"
                >
                  <p className="text-2xl md:text-4xl font-extrabold tabular-nums text-[#81fa00]">
                    {stat.value}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-wider mt-1.5 text-[#131313] dark:text-white">
                    {stat.label}
                  </p>
                  <p className="text-xs mt-0.5 text-gray-500">
                    {stat.sub}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}