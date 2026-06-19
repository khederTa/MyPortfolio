import { motion } from "framer-motion";
import { Github, Linkedin, MessageCircle, Mail } from "lucide-react";
import SectionTitle from "./SectionTitle";
import ScrollReveal from "./ScrollReveal";

const socials = [
  { icon: Github, label: "GitHub", href: "https://github.com/khederTa" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/kheder-taleb" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/+963996275091" },
  { icon: Mail, label: "Email", href: "mailto:khdertaleb1@gmail.com" },
];

export default function ContactSection() {
  // const [form, setForm] = useState({
  //   name: "",
  //   email: "",
  //   projectType: "",
  //   budget: "",
  //   message: "",
  // });
  // const [sending, setSending] = useState(false);
  // const [sent, setSent] = useState(false);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setSending(true);
  //   setTimeout(() => {
  //     setSending(false);
  //     setSent(true);
  //     setForm({ name: "", email: "", projectType: "", budget: "", message: "" });
  //     setTimeout(() => setSent(false), 3000);
  //   }, 1500);
  // };

  // const inputClasses =
  //   "w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon-cyan/30 focus:ring-1 focus:ring-neon-cyan/20 transition-all duration-300";

  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-6 lg:px-20">
        <SectionTitle subtitle="Get in Touch" title="Let's Build Something Serious." />

        <ScrollReveal>
          <p className="text-center text-muted-foreground max-w-lg mx-auto mb-12">
            If you need an engineer who combines quality, speed, and strategy —
            let's talk.
          </p>
        </ScrollReveal>

        <div className="max-w-2xl mx-auto">
          {/* <ScrollReveal delay={0.1}>
            <form onSubmit={handleSubmit} className="glass-card neon-glow rounded-3xl p-8 sm:p-10 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={inputClasses}
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={inputClasses}
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className={inputClasses}
                  required
                >
                  <option value="" disabled>Project Type</option>
                  <option value="website">Website</option>
                  <option value="webapp">Web Application</option>
                  <option value="landing">Landing Page</option>
                  <option value="dashboard">Dashboard</option>
                  <option value="ecommerce">E-Commerce</option>
                  <option value="other">Other</option>
                </select>
                <select
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className={inputClasses}
                  required
                >
                  <option value="" disabled>Budget Range</option>
                  <option value="1k-3k">$1,000 - $3,000</option>
                  <option value="3k-5k">$3,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k+">$10,000+</option>
                </select>
              </div>
              <textarea
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className={`${inputClasses} resize-none`}
                required
              />

              <motion.button
                type="submit"
                disabled={sending}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 rounded-xl bg-gradient-to-r from-neon-cyan to-neon-blue text-background font-semibold text-sm flex items-center justify-center gap-2 hover:shadow-[0_0_40px_rgba(0,245,212,0.25)] transition-all duration-300 disabled:opacity-60"
              >
                {sending ? (
                  <div className="w-5 h-5 border-2 border-background/30 border-t-background rounded-full animate-spin" />
                ) : sent ? (
                  "Message Sent ✓"
                ) : (
                  <>
                    <Send size={16} />
                    Send Inquiry
                  </>
                )}
              </motion.button>
            </form>
          </ScrollReveal> */}

          {/* Social links */}
          <ScrollReveal delay={0.2}>
            <div className="flex justify-center gap-4 mt-10">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    className="p-3 rounded-xl glass-card text-muted-foreground hover:text-neon-cyan hover:border-neon-cyan/20 transition-all duration-300"
                    title={social.label}
                  >
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}