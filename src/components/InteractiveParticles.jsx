import React, { useEffect, useRef } from "react";

export const InteractiveParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;

    // Set ukuran canvas sesuai layar
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Posisi Mouse & Radius Interaksi Jaringan
    const mouse = {
      x: null,
      y: null,
      radius: 170, // Jarak jangkauan mouse menarik garis
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Jumlah partikel disesuaikan dengan luas layar
    const particleCount = Math.floor((canvas.width * canvas.height) / 10000);
    const particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
      }

      update() {
        // Gerakan mengapung alami
        this.x += this.vx;
        this.y += this.vy;

        // Pantulan di tepi layar
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Efek tertarik ringan saat mouse mendekat
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const moveX = (dx / distance) * force * 1.5;
            const moveY = (dy / distance) * force * 1.5;
            this.x += moveX;
            this.y += moveY;
          }
        }
      }

      draw(isDark) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? "rgba(255, 255, 255, 0.7)"
          : "rgba(99, 102, 241, 0.7)";
        ctx.fill();
      }
    }

    // Inisialisasi partikel
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Main Animation Loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = document.documentElement.classList.contains("dark");

      // Update & Draw Particles
      particles.forEach((particle) => {
        particle.update();
        particle.draw(isDark);
      });

      // Hubungkan garis antar partikel yang berdekatan
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          const maxDist = 110;
          if (distance < maxDist) {
            const opacity = 1 - distance / maxDist;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.strokeStyle = isDark
              ? `rgba(167, 139, 250, ${opacity * 0.25})`
              : `rgba(99, 102, 241, ${opacity * 0.25})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Hubungkan garis langsung dari partikel ke Kursor Mouse jika dalam jangkauan
        if (mouse.x !== null && mouse.y !== null) {
          const dx = particles[a].x - mouse.x;
          const dy = particles[a].y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const opacity = 1 - distance / mouse.radius;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = isDark
              ? `rgba(192, 132, 252, ${opacity * 0.5})`
              : `rgba(79, 70, 229, ${opacity * 0.5})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
    />
  );
};