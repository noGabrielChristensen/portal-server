// bg.js – Grove Visuals / Ambient Background

// Create a canvas that fills the entire window
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.style.position = 'fixed';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.style.width = '100%';
canvas.style.height = '100%';
canvas.style.zIndex = -1; // behind everything
canvas.style.pointerEvents = 'none'; // allow clicks through
const ctx = canvas.getContext('2d');

let width, height;
function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resize);
resize();

// Simple Grove-inspired particles
const particles = [];
const particleCount = 100;

for(let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 3 + 1,
    dx: (Math.random() - 0.5) * 0.5,
    dy: (Math.random() - 0.5) * 0.5,
    color: `rgba(255, 120, ${Math.floor(Math.random() * 255)}, 0.7)`
  });
}

// Animate particles
function animate() {
  ctx.clearRect(0, 0, width, height);
  for(const p of particles) {
    p.x += p.dx;
    p.y += p.dy;

    // Wrap around edges
    if(p.x < 0) p.x = width;
    if(p.x > width) p.x = 0;
    if(p.y < 0) p.y = height;
    if(p.y > height) p.y = 0;

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = p.color;
    ctx.fill();
  }
  requestAnimationFrame(animate);
}
animate();
