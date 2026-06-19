import { motion } from "framer-motion";
import { Github } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Sleepr System",
    desc: "A NestJS microservices platform for reservations, auth, payments, and notifications.",
    image: "sleepr.png",
    tags: ['NestJS', 'TypeScript', 'MongoDB', 'Mongoose', 'JWT', 'Stripe', 'Docker', 'Kubernetes', 'Microservices'],
    github: "https://github.com/khederTa/sleepr",
  },
  {
    title: "E-Commerce Book Platform",
    desc: "A full-stack marketplace featuring secure multi-provider OAuth (Google & Facebook), dynamic database-level catalog filtering pipelines, transactional payment processing, and automated email alert loops for users and administrators.",
    image: "book-store.png",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "OAuth 2.0", "Payment Gateways", "Bootstrap"],
    github: "https://github.com/khederTa/book-online-store-MERN-stack",
  },
  {
    title: "Sign Language Recognition (ASL)",
    desc: "A deep learning application utilizing a fine-tuned, lightweight MobileNet architecture to predict and translate American Sign Language (ASL) gestures into real-time text via camera stream.",
    image: "sign-language.png",
    tags: ["Deep Learning", "MobileNet", "Transfer Learning", "Computer Vision", "Python", "Kaggle"],
    github: "https://github.com/khederTa/Sign-language-recognition-using-deep-learning-ASL",
  },
  {
    title: "Ted Web Scraping & Video Classification",
    desc: "A data pipeline consisting of a dedicated web scraping engine and a text classification model deployed on Google Colab to process, analyze, and categorize text dataset insights from video scripts.",
    image: "ted.png",
    tags: ["Python", "Web Scraping", "Text Classification", "NLP", "Google Colab", "Data Analysis"],
    github: "https://github.com/khederTa/Ted-Web-Scraping-And-Classification-Videos",
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle subtitle="Portfolio" title="Selected Builds" />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, i) => (
            <ScrollReveal key={project.title} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8 }}
                className="glass-card glass-card-hover rounded-2xl overflow-hidden group cursor-default h-full flex flex-col"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[rgba(5,5,5,0.9)] via-transparent to-transparent" />

                  {/* Overlay Action Button */}
                  <div className="absolute bottom-3 left-3 right-3 flex opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-slate-950/80 text-white border border-white/10 hover:border-neon-cyan/50 hover:text-neon-cyan text-xs font-semibold hover:shadow-[0_0_20px_rgba(0,245,212,0.25)] transition-all text-center backdrop-blur-sm"
                    >
                      <Github size={14} className="text-white group-hover:text-neon-cyan transition-colors" />
                      View Code
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-space font-semibold text-foreground mb-2 group-hover:text-neon-cyan transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">
                    {project.desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-neon-cyan/8 text-neon-cyan/80 border border-neon-cyan/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}