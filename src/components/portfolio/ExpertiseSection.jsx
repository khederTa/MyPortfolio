import { motion } from "framer-motion";
import { Monitor, Server, Layers, Zap } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const expertise = [
  {
    icon: Server,
    title: "Backend Architecture",
    desc: "Designing resilient microservices and type-safe API ecosystems using Node.js and NestJS, built on clean structural design patterns and strict event-driven flows.",
  },
  {
    icon: Layers,
    title: "System Integration & Data Flow",
    desc: "Architecting flawless third-party API configurations, webhook verification pipelines, and secure transaction gateways where data integrity is paramount.",
  },
  {
    icon: Monitor,
    title: "Full Stack Ecosystems",
    desc: "Bridging high-throughput backend services with crisp web applications utilizing Next.js and React, keeping a tight focus on state synchronization.",
  },
  {
    icon: Zap,
    title: "Performance & Optimization",
    desc: "Maximizing data processing efficiency, streamlining database engines, managing concurrency, and leveraging optimized algorithms to maintain ultra-low latency.",
  },
];

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle subtitle="Skills" title="What I Bring to the Table" />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {expertise.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="glass-card glass-card-hover rounded-2xl p-8 group cursor-default h-full"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-neon-cyan/15 to-neon-blue/10 flex items-center justify-center group-hover:neon-glow transition-all duration-500">
                      <Icon size={24} className="text-neon-cyan" />
                    </div>
                    <div>
                      <h3 className="text-lg font-space font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}