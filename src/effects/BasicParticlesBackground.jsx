import React, { useRef, useEffect } from 'react';

const BasicParticlesBackground = ({ colorVariant = 'primary' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    // Determine particle color based on theme variable
    const colorMap = {
      primary: '--color-primary',
      secondary: '--color-secondary',
      accent: '--color-accent',
    };

    const colorVar = colorMap[colorVariant] || '--color-accent';
    const cssColor = getComputedStyle(document.documentElement)
      .getPropertyValue(colorVar)
      .trim();

    console.log('[Particles] Resolved color for', colorVar + ':', cssColor);

    const dotColor = cssColor || '#D4AF39';

    const particleCount = 150;
    const particles = [];

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    setCanvasSize();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = (Math.random() - 0.5) * 0.3;
        this.radius = Math.random() * 1 + 0.3;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', setCanvasSize);
    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, [colorVariant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0"
      style={{
        width: '100%',
        height: '100%',
        display: 'block',
      }}
    />
  );
};

export default BasicParticlesBackground;
