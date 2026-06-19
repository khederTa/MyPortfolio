import { useEffect, useRef } from "react";

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Create particles
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 1.5 + 0.5,
        speedX: (Math.random() - 0.5) * 0.3,
        speedY: (Math.random() - 0.5) * 0.3,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 245, 212, ${p.opacity})`;
        ctx.fill();
      });
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0">
      {/* Dark gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #050505 0%, #071014 40%, #050508 70%, #000000 100%)",
        }}
      />

      {/* Neon orbs */}
      <div
        className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(0,245,212,0.08) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />
      <div
        className="absolute top-[30%] left-[20%] w-[500px] h-[500px] rounded-full animate-float"
        style={{
          background: "radial-gradient(circle, rgba(0,194,255,0.06) 0%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full animate-float-slow"
        style={{
          background: "radial-gradient(circle, rgba(0,200,220,0.06) 0%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* Grid pattern */}
      <div className="grid-pattern" />

      {/* Particles canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 z-[1]" />

      {/* Grain */}
      <div className="grain-overlay" />
    </div>
  );
}