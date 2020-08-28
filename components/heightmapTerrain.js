import Canvas from './canvas.js';

const clipNear = -750;
const clipFar = 1000;
let globalZ = -24;

const amount = 1024;
const particleGroup = new Array(amount);

const HeightmapTerrain = ({ className }) => {
  const init = (context) => {
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

    const i = new Image(512, 512);
    i.crossOrigin = '';
    i.src = '/heightmap.jpg';
    context.drawImage(i, 0, 0);

    const data = context.getImageData(0, 0, 512, 512).data;
    context.clearRect(0, 0, 512, 512);

    context.fillStyle = '#33333322';
    // context.strokeStyle = '#f20c3a55';
    context.strokeStyle = 'none';
    context.strokeStyle = '#cecece22';

    context.clearRect(0, 0, 512, 512);

    for (let x = 0; x < 512; x++) {
      const particles = [];
      for (let y = 0; y < 512; y++) {
        particles.push({
          x: (y - 256) * 8,
          y: -2 * data[(x * 512 + y) * 4] + 512,
        });

        particleGroup[x] = {
          particles: particles,
          z: (amount / 2 - x - 1) * 32,
        };
        particleGroup[amount - 1 - x] = {
          particles,
          z: (amount - x - 1) * 32,
        };
      }
    }
  };

  const draw = (context) => {
    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
    context.beginPath();

    for (let i = 0; i < amount; i++) {
      const { particles, z } = particleGroup[i];
      const relativeZ = z + globalZ;

      if (relativeZ < clipNear || relativeZ > clipFar) continue;
      for (let j = 0; j < particles.length; j++) {
        const x =
          (particles[j].x * 1000) / (relativeZ + 1000) +
          context.canvas.width / 2;
        const y =
          (particles[j].y * 1000) / (relativeZ + 1000) +
          context.canvas.height / 4;

        if (j > 0) {
          context.lineTo(x, y);
        } else {
          context.moveTo(x, y);
        }
      }
    }
    context.stroke();
    context.fill();

    globalZ -= 4;
    if (globalZ < (-512 - 128) * 32) {
      console.log('reset');
      globalZ += 512 * 32;
    }
  };

  return <Canvas draw={draw} init={init} className={className} />;
};

export default HeightmapTerrain;
