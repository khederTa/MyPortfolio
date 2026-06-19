import ScrollReveal from "./ScrollReveal";

export default function SectionTitle({ title, subtitle }) {
  return (
    <ScrollReveal className="mb-16 text-center">
      {subtitle && (
        <p className="text-neon-cyan font-space text-sm tracking-[0.2em] uppercase mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-space font-bold text-foreground leading-tight">
        {title}
      </h2>
      <div className="mt-6 mx-auto w-20 h-[2px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
    </ScrollReveal>
  );
}