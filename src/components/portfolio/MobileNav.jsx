import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Layers, FolderOpen, Briefcase, Mail, Star } from "lucide-react";

const navItems = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "expertise", icon: Layers, label: "Expertise" },
  { id: "projects", icon: FolderOpen, label: "Projects" },
  { id: "services", icon: Briefcase, label: "Services" },
  { id: "trust", icon: Star, label: "Why Me" },
  // { id: "testimonials", icon: MessageSquare, label: "Testimonials" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    setOpen(false);
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <div className="lg:hidden fixed top-4 right-4 z-50">
      <button
        onClick={() => setOpen(!open)}
        className="p-3 rounded-full glass-card neon-glow text-neon-cyan"
      >
        {open ? <X size={20} /> : <Menu size={20} />}
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -10 }}
            className="absolute top-16 right-0 glass-card neon-glow rounded-2xl p-4 min-w-[200px]"
          >
            {navItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(item.id)}
                  className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/5 transition-colors"
                >
                  <Icon size={16} />
                  {item.label}
                </motion.button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}