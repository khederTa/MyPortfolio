import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const titles = ["Software Engineer", "Backend Developer"];

const HERO_IMAGE = "";

export default function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  useEffect(() => {
    const currentTitle = titles[titleIndex];
    let timeout;
    if (!isDeleting && displayText === currentTitle) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? currentTitle.substring(0, displayText.length - 1)
              : currentTitle.substring(0, displayText.length + 1),
          );
        },
        isDeleting ? 40 : 80,
      );
    }
    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen overflow-hidden"
    >
      {/* ── CINEMATIC HERO IMAGE LAYER ── */}
      <motion.div
        style={{ opacity: imageOpacity, y: imageY }}
        className="absolute inset-0 z-[1] pointer-events-none"
      >
        {/* Image — fills entire section, blended via mask */}
        <motion.div
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${HERO_IMAGE})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            // CSS mask: fade edges on all 4 sides — left heavily, top/bottom/right lightly
            WebkitMaskImage: `
              linear-gradient(
                to right,
                transparent 0%,
                rgba(0,0,0,0.05) 18%,
                rgba(0,0,0,0.35) 30%,
                rgba(0,0,0,0.75) 42%,
                black 55%,
                black 80%,
                rgba(0,0,0,0.4) 92%,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0,0,0,0.5) 8%,
                black 18%,
                black 75%,
                rgba(0,0,0,0.4) 88%,
                transparent 100%
              )
            `,
            WebkitMaskComposite: "destination-in",
            maskImage: `
              linear-gradient(
                to right,
                transparent 0%,
                rgba(0,0,0,0.05) 18%,
                rgba(0,0,0,0.35) 30%,
                rgba(0,0,0,0.75) 42%,
                black 55%,
                black 80%,
                rgba(0,0,0,0.4) 92%,
                transparent 100%
              ),
              linear-gradient(
                to bottom,
                transparent 0%,
                rgba(0,0,0,0.5) 8%,
                black 18%,
                black 75%,
                rgba(0,0,0,0.4) 88%,
                transparent 100%
              )
            `,
            maskComposite: "intersect",
          }}
        />

        {/* Extra left-side dark fill so text area stays clean */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #050505 0%, #071014 22%, rgba(7,16,20,0.6) 38%, transparent 58%)",
          }}
        />

        {/* Bottom fade into next section */}
        <div
          className="absolute bottom-0 left-0 right-0"
          style={{
            height: "35%",
            background:
              "linear-gradient(to top, #050505 0%, rgba(5,5,5,0.8) 30%, transparent 100%)",
          }}
        />

        {/* MAHORAGA WHEEL GLOW */}
        <motion.div
          animate={{ opacity: [0.45, 0.9, 0.45], scale: [1, 1.12, 1] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "2%",
            left: "50%",
            transform: "translateX(-10%)",
            width: "340px",
            height: "340px",
            background:
              "radial-gradient(circle, rgba(0,245,212,0.20) 0%, rgba(0,194,255,0.09) 38%, transparent 65%)",
            filter: "blur(24px)",
          }}
        />

        {/* Body cyan rim aura */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 30% 55% at 62% 62%, rgba(0,245,212,0.055) 0%, transparent 60%)",
          }}
        />

        {/* Floating micro-orbs */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2], y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute"
          style={{
            top: "18%",
            left: "58%",
            width: "100px",
            height: "100px",
            background:
              "radial-gradient(circle, rgba(0,245,212,0.18) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />
        <motion.div
          animate={{ opacity: [0.1, 0.35, 0.1], y: [0, 6, 0] }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1.5,
          }}
          className="absolute"
          style={{
            bottom: "28%",
            right: "8%",
            width: "80px",
            height: "80px",
            background:
              "radial-gradient(circle, rgba(0,194,255,0.15) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
      </motion.div>

      {/* ── HERO TEXT CONTENT (LEFT) ── */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="container mx-auto px-6 lg:px-20 py-24">
          <div className="max-w-xl">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-neon-cyan text-xs font-medium tracking-[0.18em] uppercase mb-8 neon-glow">
                <Sparkles size={13} />
                Available for Projects
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1
                className="font-space font-bold leading-[0.92] tracking-tight mb-5"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)" }}
              >
                <span className="text-foreground block">Kheder</span>
                <span
                  className="block"
                  style={{
                    background:
                      "linear-gradient(90deg, #00F5D4, #00C2FF, #00F5D4)",
                    backgroundSize: "200% auto",
                    animation: "gradient-shift 5s ease infinite",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Taleb
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="h-8 mb-6 flex items-center">
                <span className="text-lg sm:text-xl font-space text-neon-cyan neon-text-glow tracking-wide">
                  {displayText}
                  <span className="opacity-70 animate-pulse">|</span>
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-[#94A3B8] text-base sm:text-lg max-w-md leading-relaxed mb-10">
                I architect high-performance distributed systems, scalable
                backend infrastructures, and robust APIs engineered for maximum
                reliability and real-world impact.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 35px rgba(0,245,212,0.3)",
                  }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    document
                      .getElementById("projects")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group px-7 py-3.5 rounded-full font-semibold text-sm flex items-center gap-2 text-background transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg, #00F5D4, #00C2FF)",
                  }}
                >
                  Explore My Work
                  <ArrowRight
                    size={15}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="px-7 py-3.5 rounded-full glass-card text-foreground font-semibold text-sm border border-neon-cyan/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all duration-300"
                >
                  Get in Touch
                </motion.button>

                {/* <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full glass-card text-[#94A3B8] font-medium text-sm flex items-center gap-2 hover:text-neon-cyan transition-colors duration-300"
                >
                  <Download size={15} />
                  Download CV
                </motion.button> */}
              </div>
            </ScrollReveal>

            {/* Floating skill tags */}
            <ScrollReveal delay={0.6}>
              <div className="flex flex-wrap gap-2 mt-10">
                {[
                  "Node.js",
                  "NestJS",
                  "TypeScript",
                  "Microservices",
                  "PostgreSQL",
                  "MongoDB",
                  "REST APIs",
                  "AI Integration",
                  "Docker",
                  "Next.js",
                ].map((tag, i) => (
                  <motion.span
                    key={tag}
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 3 + i * 0.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="px-3 py-1.5 rounded-full glass-card text-xs font-medium border border-neon-cyan/10"
                    style={{ color: "rgba(0,245,212,0.75)" }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* Bottom fade-out into next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-44 z-[2] pointer-events-none"
        style={{
          background: "linear-gradient(to top, #050505 0%, transparent 100%)",
        }}
      />
    </section>
  );
}
