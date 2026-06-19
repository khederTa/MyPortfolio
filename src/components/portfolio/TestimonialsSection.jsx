import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    text: "Kheder delivered beyond expectations. Fast and professional.",
    author: "Client Review",
    role: "Startup Founder",
  },
  {
    text: "Excellent communication and strong technical skills.",
    author: "Client Review",
    role: "Product Manager",
  },
  {
    text: "Reliable developer with premium quality output.",
    author: "Client Review",
    role: "Business Owner",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle subtitle="Reviews" title="What Clients Say" />

        <ScrollReveal>
          <div className="max-w-2xl mx-auto">
            <div className="glass-card neon-glow rounded-3xl p-8 sm:p-12 relative overflow-hidden">
              {/* Quote icon */}
              <Quote size={48} className="text-neon-cyan/10 absolute top-6 left-6" />

              <AnimatePresence mode="wait">
                <motion.div
                  key={current}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                  className="text-center relative z-10"
                >
                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={18} className="fill-neon-cyan text-neon-cyan" />
                    ))}
                  </div>

                  <p className="text-lg sm:text-xl text-foreground font-light leading-relaxed mb-8 italic">
                    "{testimonials[current].text}"
                  </p>

                  <div>
                    <p className="text-sm font-space font-semibold text-foreground">
                      {testimonials[current].author}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {testimonials[current].role}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex justify-center gap-3 mt-8">
                <button
                  onClick={prev}
                  className="p-2 rounded-full glass-card hover:text-neon-cyan hover:border-neon-cyan/30 transition-all text-muted-foreground border border-transparent"
                >
                  <ChevronLeft size={18} />
                </button>
                <div className="flex items-center gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        i === current
                          ? "bg-neon-cyan w-6"
                          : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={next}
                  className="p-2 rounded-full glass-card hover:text-neon-cyan hover:border-neon-cyan/30 transition-all text-muted-foreground border border-transparent"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}