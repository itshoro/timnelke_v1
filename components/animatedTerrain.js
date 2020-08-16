
const AnimatedTerrain = ({ className }) => {

  const Sketch = typeof window !== "undefined" ? require("react-p5") : "null";

  const fac = 2;
  const scale = 50;
  let rows, cols;

  let terrain = [];
  let alpha = [];
  let velocityY = 0;
  

  const h = typeof window !== "undefined" ? window.innerHeight / 2 : 1;
  const w = typeof window !== "undefined" ? window.innerWidth / 2 : 1;

  const setup = (p, parentRef) => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL).parent(parentRef);

    rows = h / scale;
    cols = w / scale;
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
    velocityY -= 0.01;
    
    let yOffset = velocityY;
    for (let y = 0; y < rows; y++) {
      let xOffset = 0;
      for (let x = 0; x < cols; x++) {
        terrain[y][x] = p.map(p.noise(xOffset, yOffset), 0, 1, -150, 100);
        xOffset += 0.3;
      }
      yOffset += 0.2;
    }
    
    p.translate(0, 50);
    p.rotateX(p.PI / 3);

    p.translate(-w, -h);
    for (let y = 0; y < rows - 1; y++) {

      p.fill(0, alpha[y]);
      p.stroke(0, alpha[y]);
      
      p.beginShape(p.TRIANGLE_STRIP);
      for (let x = 0; x < cols; x++) {
        // p.fill(0, alpha[y][x]);
        // p.stroke(0, alpha[y][x]);
        p.vertex(x * scale * fac, y * scale * fac, terrain[y][x]);
        p.vertex(x * scale * fac, (y + 1) * scale * fac, terrain[y + 1][x]);
      }
      p.endShape();
    }
  }

  return <Sketch className={className} setup={setup} draw={draw}></Sketch>
};

export default AnimatedTerrain