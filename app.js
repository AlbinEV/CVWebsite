const navbar=document.querySelector('.navbar')
window.addEventListener('scroll', () => {
    if(this.scrollY >0) {
        navbar.classList.remove('py-2')
        navbar.classList.add('shadow', 'py-1')
    } else{
        navbar.classList.add('py-2')
        navbar.classList.remove('shadow', 'py-1')
    }
})

  AOS.init({ 
    duration: 700,
    once:true
    });





function createBackgroundEffect(selector) {
     const canvas = document.querySelector(selector);
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
class Node {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 2;
    this.color = 'rgba(0, 255, 255, 0.5)';
    this.vx = (Math.random() - 0.5) * 0.5; // Diviso per 4
    this.vy = (Math.random() - 0.5) * 0.5; // Diviso per 4
  }


  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.x += this.vx;
    this.y += this.vy;

    if (this.x < 0 || this.x > canvas.width) {
      this.vx = -this.vx;
    }

    if (this.y < 0 || this.y > canvas.height) {
      this.vy = -this.vy;
    }
  }
}

class Connection {
  constructor(node1, node2) {
    this.node1 = node1;
    this.node2 = node2;
    this.color = 'rgba(0, 255, 255, 0.2)';
  }

  draw() {
    ctx.beginPath();
    ctx.moveTo(this.node1.x, this.node1.y);
    ctx.lineTo(this.node2.x, this.node2.y);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
}

const nodes = [];
const connections = [];

for (let i = 0; i < 50; i++) {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  nodes.push(new Node(x, y));
}

for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    if (Math.random() < 0.1) {
      connections.push(new Connection(nodes[i], nodes[j]));
    }
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const node of nodes) {
    node.draw();
    node.update();
  }

  for (const connection of connections) {
    connection.draw();
  }

  requestAnimationFrame(animate);
}

animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

}

createBackgroundEffect('#techBackground');




const backToTopButton = document.getElementById("back-to-top");

window.onscroll = function () {
  if (window.pageYOffset > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.onclick = function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
