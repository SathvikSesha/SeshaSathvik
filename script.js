const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");
const nam = document.querySelector("#name");

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
