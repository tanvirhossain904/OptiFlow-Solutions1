"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, SplitText);

const leaders = [
  {
    name: "Md. Mainul Hasan Dulon",
    role: "Chairman · EasySoft",
    image: "/logos/chaiman_easy_soft.png",
    label: "Chairman's Message",
    quoteJSX: (
      <>
        "Leadership is not about being in charge — it's about taking care of
        those in your charge and building a future where{" "}
        <span className="text-[#81fa00]">every voice matters</span>."
      </>
    ),
    sub: (
      <>
        With decades of strategic vision, our Chairman has steered EasySoft
        toward a future of{" "}
        <span className="text-[#81fa00] font-semibold">purposeful innovation</span>.
        Every decision is guided by integrity and long-term value.
      </>
    ),
    stats: [
      { value: "8+", label: "Years",    sub: "of Industry Leadership" },
      { value: "50+", label: "Partners", sub: "Strategic Alliances Built" },
      { value: "3x",  label: "Growth",   sub: "Company Scale Achieved" },
    ],
  },
  {
    name: "Mehedi H. Jony",
    role: "Founder & CEO · EasySoft",
    image: "/logos/ceo_easy_soft.png",
    label: "Founder's Message",
    quoteJSX: (
      <>
        "At EasySoft, we don't measure success by the lines of code we write —
        we measure it by the{" "}
        <span className="text-[#81fa00]">growth we unlock</span> for every
        business we touch."
      </>
    ),
    sub: (
      <>
        Every project is a new beginning — a chance to build something
        meaningful, scalable, and{" "}
        <span className="text-[#81fa00] font-semibold">built to last</span>. We
        treat every client's vision as our own mission.
      </>
    ),
    stats: [
      { value: "5+",   label: "Years",        sub: "of Experience" },
      { value: "120+", label: "Projects",     sub: "Successfully Delivered" },
      { value: "98%",  label: "Satisfaction", sub: "Client Happiness Rate" },
    ],
  },
];

const CYCLE_MS = 4000;

export default function HomeOwner() {
  const [activeIdx, setActiveIdx] = useState(0);
  const mountedRef   = useRef(false);

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
  const timerBarRef  = useRef<HTMLDivElement>(null);
  const timerTlRef   = useRef<gsap.core.Timeline | null>(null);
  const cycleRef     = useRef<ReturnType<typeof setInterval> | null>(null);
  const isAnimRef    = useRef(false);
  const splitRef     = useRef<InstanceType<typeof SplitText> | null>(null);

  const leader = leaders[activeIdx];

  /* ── Scroll parallax — once ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const section = sectionRef.current;
      if (!section) return;
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          y: -80, x: 40, ease: "none",
          scrollTrigger: { trigger: section, start: "top bottom", end: "bottom top", scrub: 2 },
        });
      }
      if (logoRef.current) {
        gsap.to(logoRef.current, {
          y: 80, rotate: 6, scale: 0.88, ease: "none",
          scrollTrigger: { trigger: section, start: "top center", end: "bottom top", scrub: 1.8 },
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  /* ── Timer bar ── */
  const startTimerBar = useCallback(() => {
    if (timerTlRef.current) timerTlRef.current.kill();
    if (!timerBarRef.current) return;
    gsap.set(timerBarRef.current, { scaleX: 0, transformOrigin: "left center" });
    timerTlRef.current = gsap.timeline();
    timerTlRef.current.to(timerBarRef.current, {
      scaleX: 1, duration: CYCLE_MS / 1000, ease: "none",
    });
  }, []);

  /* ── Animate OUT ── */
  const animateOut = useCallback((onComplete: () => void) => {
    // Revert SplitText BEFORE animating out so the outgoing text is whole
    if (splitRef.current) {
      splitRef.current.revert();
      splitRef.current = null;
    }

    const rightEls = [
      labelRef.current,
      quoteIconRef.current,
      enQuoteRef.current,
      dividerRef.current,
      statsRef.current,
    ].filter(Boolean);

    const tl = gsap.timeline({ onComplete });
    tl.to(imgWrapRef.current, { opacity: 0, x: -20, scale: 0.94, duration: 0.32, ease: "power2.in" }, 0);
    tl.to(rightEls, { opacity: 0, y: -14, stagger: 0.03, duration: 0.28, ease: "power2.in" }, 0);
  }, []);

  /* ── Animate IN ── */
  const animateIn = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: () => { isAnimRef.current = false; },
    });

    tl.fromTo(imgWrapRef.current,
      { opacity: 0, x: 24, scale: 0.93 },
      { opacity: 1, x: 0, scale: 1, duration: 0.6, ease: "power3.out" }, 0
    );
    tl.fromTo(labelRef.current,
      { x: -28, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.5, ease: "power3.out" }, 0.06
    );
    tl.fromTo(quoteIconRef.current,
      { scale: 0, opacity: 0, rotation: -18 },
      { scale: 1, opacity: 1, rotation: 0, duration: 0.5, ease: "back.out(2.5)" }, 0.12
    );

    // ── KEY FIX ──
    // Hide the quote immediately so there's no flash of raw text.
    // Then wait one rAF tick (React's paint is done) before splitting & animating.
    if (enQuoteRef.current) {
      gsap.set(enQuoteRef.current, { opacity: 0 });

      // delayedCall(0) fires after the current JS frame — after React has
      // committed the new quoteJSX to the DOM — so SplitText always sees
      // the correct, freshly rendered text.
      tl.add(
        gsap.delayedCall(0.18, () => {
          if (!enQuoteRef.current) return;

          // Revert any leftover split from a previous run
          if (splitRef.current) {
            splitRef.current.revert();
            splitRef.current = null;
          }

          // Now the DOM has the new text → split it
          const split = new SplitText(enQuoteRef.current, { type: "words" });
          splitRef.current = split;

          // Animate the fresh words
          gsap.fromTo(
            split.words,
            { opacity: 0, y: 22, rotationX: -30 },
            { opacity: 1, y: 0, rotationX: 0, stagger: 0.03, duration: 0.5, ease: "power3.out" }
          );
        }),
        0.18
      );
    }

    tl.fromTo(dividerRef.current,
      { scaleX: 0 },
      { scaleX: 1, transformOrigin: "left center", duration: 0.65, ease: "power4.out" }, 0.22
    );
    tl.fromTo(statsRef.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" }, 0.3
    );
    statItemsRef.current.forEach((el, i) => {
      if (!el) return;
      tl.fromTo(el,
        { opacity: 0, y: 16, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.6)" },
        0.34 + i * 0.09
      );
    });
  }, []);

  /* ── Transition ── */
  const transitionTo = useCallback((nextIdx: number) => {
    if (isAnimRef.current) return;
    isAnimRef.current = true;
    animateOut(() => setActiveIdx(nextIdx));
  }, [animateOut]);

  /* ── Auto-cycle ── */
  const startCycle = useCallback((currentIdx: number) => {
    if (cycleRef.current) clearInterval(cycleRef.current);
    cycleRef.current = setInterval(() => {
      const nextIdx = (currentIdx + 1) % leaders.length;
      transitionTo(nextIdx);
    }, CYCLE_MS);
  }, [transitionTo]);

  /* ── Mount ── */
  useEffect(() => {
    mountedRef.current = true;
    animateIn();
    startTimerBar();
    startCycle(0);
    return () => { if (cycleRef.current) clearInterval(cycleRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── activeIdx change → animateIn + new cycle ── */
  useEffect(() => {
    if (!mountedRef.current) return;
    animateIn();
    startTimerBar();
    startCycle(activeIdx);
    return () => { if (cycleRef.current) clearInterval(cycleRef.current); };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIdx]);

  /* ── Manual dot ── */
  const goTo = (idx: number) => {
    if (idx === activeIdx || isAnimRef.current) return;
    if (cycleRef.current) clearInterval(cycleRef.current);
    transitionTo(idx);
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-28 md:py-44 bg-[#f2f2f2] dark:bg-[#0c2501]"
    >
      <div
        ref={glowRef}
        className="absolute -top-40 -left-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "rgba(129,250,0,0.07)", filter: "blur(140px)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-[440px] h-[440px] rounded-full pointer-events-none"
        style={{ background: "rgba(129,250,0,0.05)", filter: "blur(120px)" }}
      />
      <div
        className="absolute top-4 right-6 text-[260px] leading-none select-none pointer-events-none"
        style={{ color: "rgba(129,250,0,0.04)", fontFamily: "Georgia, serif" }}
      >
        "
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-28">

          {/* LEFT */}
          <div className="lg:w-5/12 relative flex-shrink-0 w-full">
            <div
              className="absolute inset-0 rounded-[40px] pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(129,250,0,0.015) 0%, rgba(12,37,1,0.03) 100%)",
                filter: "blur(36px)", transform: "scale(1.1)",
              }}
            />
            <div
              ref={imgWrapRef}
              className="relative rounded-[36px] overflow-hidden will-change-transform"
              style={{
                aspectRatio: "3/4",
                border: "2px solid rgba(129,250,0,0.2)",
                boxShadow: "0 48px 120px rgba(129,250,0,0.05), 0 8px 32px rgba(0,0,0,0.15)",
              }}
            >
              <Image
                src={leader.image}
                alt={leader.name}
                fill
                className="object-cover object-top"
                onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
              />
              <div
                className="absolute bottom-0 left-0 right-0 px-6 py-6"
                style={{ background: "linear-gradient(to top, rgba(7,20,1,0.95) 0%, transparent 100%)" }}
              >
                <p className="text-white font-bold text-xl">{leader.name}</p>
                <p className="text-sm mt-0.5 text-gray-400">{leader.role}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#81fa00]/10">
                <div
                  ref={timerBarRef}
                  className="h-full bg-[#81fa00] will-change-transform"
                  style={{ transformOrigin: "left center" }}
                />
              </div>
            </div>

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

            <div className="flex items-center justify-center gap-3 mt-6">
              {leaders.map((l, i) => (
                <button
                  key={l.name}
                  onClick={() => goTo(i)}
                  aria-label={`View ${l.name}`}
                  title={l.name}
                  className="h-2 rounded-full transition-all duration-500 focus:outline-none"
                  style={{
                    width: i === activeIdx ? 32 : 8,
                    background: i === activeIdx ? "rgba(129,250,0,0.85)" : "rgba(129,250,0,0.2)",
                    boxShadow: i === activeIdx ? "0 0 8px rgba(129,250,0,0.5)" : "none",
                  }}
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="lg:w-7/12 space-y-8">
            <div ref={labelRef} className="flex items-center gap-3 will-change-transform">
              <span className="block h-px w-10 flex-shrink-0 bg-[#81fa00]" />
              <span className="text-xs font-bold uppercase tracking-[0.28em] text-[#81fa00]">
                {leader.label}
              </span>
            </div>

            <div ref={quoteIconRef} className="will-change-transform">
              <Quote size={48} strokeWidth={1.3} className="text-[#81fa00] opacity-40" />
            </div>

            {/*
              No will-change-transform on the blockquote wrapper itself —
              GSAP controls opacity directly on the element via delayedCall.
            */}
            <blockquote
   
              className="text-xl md:text-3xl lg:text-[2rem] font-bold leading-snug text-[#131313] dark:text-white"
            >
              {leader.quoteJSX}
            </blockquote>

            <div
              ref={dividerRef}
              className="h-px w-24 will-change-transform bg-[#81fa00]/20"
            />

            <p className="text-base md:text-lg leading-relaxed text-gray-500 dark:text-gray-400">
              {leader.sub}
            </p>

            <div
              ref={statsRef}
              className="flex flex-wrap gap-4 md:gap-10 pt-4 border-t will-change-transform border-[#81fa00]/10"
            >
              {leader.stats.map((stat, i) => (
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
                  <p className="text-xs mt-0.5 text-gray-500">{stat.sub}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}