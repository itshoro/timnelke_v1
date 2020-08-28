import { useEffect, useRef } from 'react';

const Canvas = ({ init, draw, resize, className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;

    init(context);

    const loop = () => {
      // resize(context);
      draw(context);
      animationFrameId = requestAnimationFrame(loop);
    };
    loop();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [init, draw]);

  return <canvas ref={canvasRef} className={className} />;
};

export default Canvas;
