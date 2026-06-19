import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const trustItems = [
  "Architectural Integrity",
  "Fault-Tolerant Systems",
  "Data Integrity First",
  "Transparent Collaboration",
  "Business Logic Alignment",
  "Production-Ready Delivery",
];

export default function TrustSection() {
  return (
    <section id="trust" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle subtitle="Core Principles" title="Why Teams Trust My Engineering" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {trustItems.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.08}>
              <motion.div
                whileHover={{ scale: 1.03, x: 4 }}
                className="glass-card glass-card-hover rounded-xl px-6 py-5 flex items-center gap-4 group cursor-default"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-neon-cyan/15 flex items-center justify-center group-hover:bg-neon-cyan/25 transition-colors duration-300">
                  <Check size={16} className="text-neon-cyan" />
                </div>
                <span className="text-sm font-medium text-foreground group-hover:text-neon-cyan transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}