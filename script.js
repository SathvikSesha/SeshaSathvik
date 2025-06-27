const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const nam = document.querySelector("#name");
const play = document.querySelector(".play");
play.addEventListener("click", () => {
  window.location.href =
    "https://sathviksesha.github.io/Projects/rock-Paper-Scissors/";
});

tabLinks.forEach((link, index) => {
  link.addEventListener("click", () => {
    tabLinks.forEach((link) => link.classList.remove("active-link"));
    tabContents.forEach((content) => {
      content.classList.remove("active-tab");
    });

    link.classList.add("active-link");
    tabContents[index].classList.add("active-tab");
  });
});

const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});

function animateName() {
  nam.animate(
    [
      { transform: "translate(0px,0px)" },
      { transform: "translate(-2px,-2px)" },
      { transform: "translate(0px,0px)" },
    ],
    {
      duration: 2000,
      iterations: Infinity,
    }
  );
}

const navLinks = document.querySelectorAll(".right ul li a");
const sections = document.querySelectorAll("main > div[id]");

function changeActiveLink() {
  const scrollY = window.scrollY;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute("id");

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      navLinks.forEach((link) => {
        link.classList.remove("active-link");
        if (link.getAttribute("href") === `#${sectionId}`) {
          link.classList.add("active-link");
        }
      });
    }
  });
}

const lazySections = document.querySelectorAll(".lazy-section");
const sectionObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const section = entry.target;
      section.classList.add("loaded"); // Add a class to indicate the section is loaded
      observer.unobserve(section); // Stop observing the section
    }
  });
});
// Observe each lazy section
lazySections.forEach((section) => {
  sectionObserver.observe(section);
});

window.addEventListener("DOMContentLoaded", () => {
  animateName();
  changeActiveLink();
});

window.addEventListener("scroll", changeActiveLink);

const cursorDot = document.querySelector(".cursor-dot");
const trailDots = document.querySelectorAll(".trail-dot");
const cursorOutline = document.querySelector(".cursor-outline");

let mouseX = 0,
  mouseY = 0;
const dotPositions = Array(trailDots.length)
  .fill()
  .map(() => ({ x: 0, y: 0 }));
let outlineX = 0,
  outlineY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  // Main dot follows instantly
  cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

  // Trail dots follow each other
  dotPositions.forEach((pos, i) => {
    const target = i === 0 ? { x: mouseX, y: mouseY } : dotPositions[i - 1];
    pos.x += (target.x - pos.x) * 0.2;
    pos.y += (target.y - pos.y) * 0.2;
    trailDots[i].style.transform = `translate(${pos.x}px, ${pos.y}px)`;
    trailDots[i].style.opacity = `${1 - i * 0.08}`;
    trailDots[i].style.width = `${10 - i}px`;
    trailDots[i].style.height = `${10 - i}px`;
  });

  // Outline follows very slowly
  outlineX += (mouseX - outlineX) * 0.08;
  outlineY += (mouseY - outlineY) * 0.08;
  cursorOutline.style.transform = `translate(${outlineX - 20}px, ${
    outlineY - 20
  }px)`; // -20 to center

  requestAnimationFrame(animate);
}
animate();