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

window.addEventListener("DOMContentLoaded", animateName);
