import React, { useRef, useEffect } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: null, y: null, radius: 120 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    const particleCount = 150;
    const particles = [];

    const color =
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-secondary')
        .trim() || '#D4AF39';

    const lineColor = 'rgba(255, 255, 255, 0.05)';
    const highlightColor = color;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Particle {
      constructor(x, y, isMouse = false) {
        this.x = x ?? Math.random() * canvas.width;
        this.y = y ?? Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = isMouse ? 0 : Math.random() * 1 + 0.05;
        this.isMouse = isMouse;
      }

      update() {
        if (this.isMouse) return;
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
      }

      draw(highlight = false) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = highlight ? highlightColor : color;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const mouseParticle = new Particle(0, 0, true);
    particles.push(mouseParticle);

    const distance = (a, b) => {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.sqrt(dx * dx + dy * dy);
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());

      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dist = distance(a, b);

          if (dist < 120) {
            const mouseDistA =
              mouse.current.x !== null ? distance(a, mouse.current) : Infinity;
            const mouseDistB =
              mouse.current.x !== null ? distance(b, mouse.current) : Infinity;
            const isHighlighted =
              mouseDistA < mouse.current.radius ||
              mouseDistB < mouse.current.radius;

            ctx.beginPath();
            ctx.strokeStyle = isHighlighted ? highlightColor : lineColor;
            ctx.lineWidth = isHighlighted ? 0.2 : 0.15;
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        const nearMouse =
          mouse.current.x !== null &&
          distance(p, mouse.current) < mouse.current.radius;
        p.draw(p.isMouse || nearMouse);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // 🔒 Track mouse only when inside Landing
    let trackingMouse = false;

const handleMouseMove = (e) => {
  if (!trackingMouse) return;

  const rect = canvasRef.current.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  mouse.current.x = x;
  mouse.current.y = y;
  mouseParticle.x = x;
  mouseParticle.y = y;
};


    const handleMouseLeave = () => {
      mouse.current.x = null;
      mouse.current.y = null;
    };

    const enableTracking = () => (trackingMouse = true);
    const disableTracking = () => {
      trackingMouse = false;
      handleMouseLeave();
    };

    const handleResize = () => setCanvasSize();

    window.addEventListener('landing-hover', enableTracking);
    window.addEventListener('landing-leave', disableTracking);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('landing-hover', enableTracking);
      window.removeEventListener('landing-leave', disableTracking);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{ width: '100%', height: '100%' }}
    />
  );
};

export default ParticlesBackground;
