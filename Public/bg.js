const canvas = document.getElementById('bg-canvas');
const ctx = canvs.getContext('2d');

let width = canvas.width = window.innerWidth;
let height = canvas.height = window.innerHeight;

// Nebula clouds
const clouds = [];
const cloudCount = 6;

for (let i = 0; i < cloudCount; i++) {
  clouds.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 400 + 300,
    alpha: Math.random() * 0.3 + 0.2,
    speedX: (Math.random() - 0.5) * 0.05,
    speedY: (Math.random() - 0.5) * 0.05
  });
}

// Particles
const particles = [];
const particleCount = 150;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 2 + 1,
    speedX: (Math.random() - 0.5) * 0.3,
    speedY: (Math.random() - 0.5) * 0.3,
    color: `rgba(255, ${Math.floor(Math.random() * 100 + 150)}, 0, 0.8)`
  });
}

// Animate
function animate() {
  // Clear canvas slightly for trails
  ctx.fillStyle = 'rgba(0, 0, 0, 0.15)';
  ctx.fillRect(0, 0, width, height);

  // Draw clouds
  clouds.forEach(c => {
    c.x += c.speedX;
    c.y += c.speedY;

    if (c.x < -c.radius) c.x = width + c.radius;
    if (c.x > width + c.radius) c.x = -c.radius;
    if (c.y < -c.radius) c.y = height + c.radius;
    if (c.y > height + c.radius) c.y = -c.radius;

    const gradient = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius);
    gradient.addColorStop(0, `rgba(255,140,0,${c.alpha})`);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');
    
    ctx.beginPath();
    ctx.arc(c.x, c.y, c.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  });

  // Draw particles
  particles.forEach(p => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0) p.x = width;
    if (p.x > width) p.x = 0;
    if (p.y < 0) p.y = height;
    if (p.y > height) p.y = 0;

    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 5);
    gradient.addColorStop(0, p.color);
    gradient.addColorStop(1, 'rgba(0,0,0,0)');

    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
  });

  requestAnimationFrame(animate);
}

animate();

// Resize handler
window.addEventListener('resize', () => {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
});
