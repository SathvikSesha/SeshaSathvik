const tabLinks = document.querySelectorAll(".tab-links");
const tabContents = document.querySelectorAll(".tab-contents");

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
