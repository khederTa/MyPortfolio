export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/[0.04]">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <p className="text-xs text-muted-foreground/50">
          © {new Date().getFullYear()} Kheder Taleb. Crafted with precision.
        </p>
      </div>
    </footer>
  );
}