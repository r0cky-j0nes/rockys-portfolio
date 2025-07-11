import React, { useRef, useEffect } from 'react';
import '../assets/styles.css';

const RainbowAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    let hue = 0;

    const render = () => {
      hue = (hue + 1) % 360;
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, `hsl(${hue}, 100%, 50%)`);
      gradient.addColorStop(1, `hsl(${(hue + 60) % 360}, 100%, 50%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
      requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return <canvas ref={canvasRef} className="rainbow-canvas" />;
};

export default RainbowAnimation;
