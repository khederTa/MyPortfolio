import { motion } from "framer-motion";
import { Clock, Rocket, Globe, Code2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const stats = [
  {
    icon: Clock,
    value: "5+",
    label: "Years Experience",
    textColor: "text-neon-cyan",
  },
  {
    icon: Rocket,
    value: "50+",
    label: "Projects Delivered",
    textColor: "text-neon-blue",
  },
  {
    icon: Code2,
    value: "∞",
    label: "Full Stack Expertise",
    textColor: "text-neon-cyan",
  },
  {
    icon: Globe,
    value: "🌍",
    label: "Global Clients",
    textColor: "text-foreground",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle
          subtitle="About Me"
          title="Built to Solve, Designed to Scale."
        />

        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I engineer backend ecosystems where advanced system design meets
              product strategy.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground leading-relaxed mb-6">
              From robust microservices to complex third-party integrations and
              payment gateways, I focus on ultra-low latency, fault tolerance,
              clean architecture, and bulletproof reliability.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-foreground font-medium text-lg font-space">
              I don't just write API endpoints — I build infrastructures
              businesses scale on.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 text-center group cursor-default-hardcore border border-white/10 bg-slate-950/40 backdrop-blur-md"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neon-cyan/10 flex items-center justify-center group-hover:neon-glow transition-all duration-300">
                    <Icon size={22} className="text-neon-cyan" />
                  </div>
                  
                  {/* Fixed value text element with solid high-contrast text classes */}
                  <div className={`text-3xl font-space font-bold ${stat.textColor} mb-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]`}>
                    {stat.value}
                  </div>
                  
                  <p className="text-xs text-muted-foreground tracking-wide uppercase">
                    {stat.label}
                  </p>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}