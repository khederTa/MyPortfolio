import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, User, Layers, FolderOpen, Briefcase, Mail, Star } from "lucide-react";

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

export default function SidebarDock({ activeSection }) {
  const [hoveredItem, setHoveredItem] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      className="fixed left-4 top-[25%] -translate-y-1/2 z-50 hidden lg:flex flex-col items-center gap-1 py-4 px-2 rounded-full glass-card neon-glow"
    >
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;
        return (
          <div
            key={item.id}
            className="relative"
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <button
              onClick={() => scrollTo(item.id)}
              className={`relative p-3 rounded-full transition-all duration-300 group ${
                isActive
                  ? "text-neon-cyan bg-neon-cyan/10"
                  : "text-muted-foreground hover:text-neon-cyan hover:bg-neon-cyan/5"
              }`}
            >
              <Icon size={18} />
              {isActive && (
                <motion.div
                  layoutId="sidebar-active"
                  className="absolute inset-0 rounded-full border border-neon-cyan/30"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </button>

            <AnimatePresence>
              {hoveredItem === item.id && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg glass-card text-xs font-medium text-neon-cyan whitespace-nowrap neon-glow"
                >
                  {item.label}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.nav>
  );
}