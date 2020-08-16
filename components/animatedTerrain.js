
const AnimatedTerrain = ({ className }) => {

  const Sketch = typeof window !== "undefined" ? require("react-p5") : "null";

  const fac = 2;
  const scale = 50;
  let rows, cols;

  let terrain = [];
  let alpha = [];
  let fadeIn = 0;
  let velocityY = 0;
  
  let context;

  const h = typeof window !== "undefined" ? window.innerHeight / 2 : 1;
  const w = typeof window !== "undefined" ? window.innerWidth / 2 : 1;

  const setup = (p, parentRef) => {
    context = p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent(parentRef);
    // context.canvas.classList.add("opacity-0");

    rows = Math.ceil(h / scale);
    cols = Math.ceil(w / scale);
    for (let y = 0; y < rows; y++) {
      terrain[y] = [];
      alpha[y] = p.map(y, 0, rows - 1, 5, 15);
      // alpha[y] = [];

      // for (let x = 0; x < cols; x++) {
      //   alpha[y][x] = p.map(y, 0, rows - 1, 5, 15) * p.map((x / cols / 2) % 2, 0, 1, 0, 1);
      // }
    }
  }


  const draw = (p) => {

    p.background(255);
    velocityY -= 0.005;

    p.translate(0, 50);
    p.rotateX(p.PI / 3);

    p.translate(-w, -h);
    
    let yOffset = velocityY;
    for (let y = 0; y < rows - 1; y++) {
      let xOffset = 0;

      p.fill(0, alpha[y] * fadeIn);
      p.stroke(0, alpha[y] * fadeIn);

      p.beginShape(p.TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        if(y % 2 == 0) {
          terrain[y][x] = p.map(p.noise(xOffset, yOffset), 0, 1, -150, 100);
          terrain[y + 1][x] = p.map(p.noise(xOffset, yOffset + 0.2), 0, 1, -150, 100);

        }
        xOffset += 0.3;

        p.vertex(x * scale * fac, y * scale * fac, terrain[y][x] * fac);
        p.vertex(x * scale * fac, (y + 1) * scale * fac, terrain[y + 1][x] * fac);
      }
      p.endShape()
      yOffset += 0.2;
    }

    if (fadeIn < 1)
      fadeIn += 0.025;

  }

  return <Sketch className={className} setup={setup} draw={draw}></Sketch>
};

export default AnimatedTerrain