import { motion } from "framer-motion";
import { Code, Server, Database, Cpu, Zap, BarChart3 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const services = [
  { 
    icon: Server, 
    title: "Backend Architecture", 
    desc: "Designing scalable microservices, distributed systems, and modular runtime infrastructures built on NestJS and Node.js." 
  },
  { 
    icon: Code, 
    title: "Full-Stack Engineering", 
    desc: "Developing seamless end-to-end web applications combining robust server ecosystems with high-performance Next.js frontends." 
  },
  { 
    icon: Cpu, 
    title: "API & Third-Party Integrations", 
    desc: "Building bulletproof pipelines for multi-service webhooks, global shipping logistics, and secure payment processing gateways." 
  },
  { 
    icon: Database, 
    title: "Database & Storage Design", 
    desc: "Optimizing relational schema designs, structural query efficiency, asynchronous caching layers, and high-throughput data pipelines." 
  },
  { 
    icon: Zap, 
    title: "Performance & Concurrency Optimization", 
    desc: "Auditing application runtime lifecycles, fine-tuning event loops, managing concurrency, and eliminating structural latency bottlenecks." 
  },
  { 
    icon: BarChart3, 
    title: "Enterprise Management Systems", 
    desc: "Architecting multi-user Management Information Systems (MIS), internal tools, and data-dense dashboards tailored for scale." 
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle subtitle="Services" title="How I Create Value" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="glass-card glass-card-hover rounded-2xl p-6 group cursor-default text-center h-full"
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-neon-cyan/10 flex items-center justify-center group-hover:neon-glow transition-all duration-500">
                    <Icon size={22} className="text-neon-cyan" />
                  </div>
                  <h3 className="text-sm font-space font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.desc}
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