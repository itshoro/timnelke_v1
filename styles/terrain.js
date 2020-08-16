const scale = 20;
let rows, cols;

let terrain = [];
let velocityY = 0;

const w = 3000;
const h = 1000;

function setup() {
    createCanvas(window.innerWidth, window.innerHeight, WEBGL);
    
    rows = h / scale;
    cols = w / scale;
    for (let y = 0; y < rows; y++) {
        terrain[y] = [];
    }
}

let r = 255;
let g = 255;
let b = 255;

let rF = 0.99;
let gF = 0.95;
let bF = 0.9

function draw() {
    background(255);
    velocityY -= 0.1;
    
    let yOffset = velocityY;
    for (let y = 0; y < rows; y++) {
        let xOffset = 0;
        for (let x = 0; x < cols; x++) {
            terrain[y][x] = map(noise(xOffset, yOffset), 0, 1, -150, 100);
            xOffset += 0.2;
        }
        yOffset += 0.2;
    }


    translate(0,50);
    rotateX(PI / 3);
    
    fill(0,8);
    noStroke();

    translate(-w/2, -h/2);
    for (let y = 0; y < rows - 1; y++) {
        
        let alpha = map(y, 0, rows-1, 5, 15);
        fill(0, alpha);
        
        beginShape(TRIANGLE_STRIP);
        for (let x = 0; x < cols; x++) {
            let fac = map(noise(y,x), 0, 1, 10, 100);
            vertex(x * scale, y * scale, terrain[y][x]);
            vertex(x * scale, (y + 1) * scale, terrain[y + 1][x]);
        }
        endShape();
    }
    
//     rotateX(-PI / 3);
//     translate(-width, 0, -500);
    
//     for (let y = 0; y < rows - 1; y++) {
//         stroke(0);
//         strokeWeight(1);
//         noFill();
        
//         beginShape(TRIANGLE_STRIP);
//         for (let x = 0; x < cols; x++) {
//             vertex(x * scale, y * scale, terrain[y][x]);
//             vertex(x * scale, (y + 1) * scale, terrain[y + 1][x]);
//         }
//         endShape();
//     }
}
