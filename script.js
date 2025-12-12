// Smooth skill animation on scroll
const bars = document.querySelectorAll(".bar span");
const options = { threshold: 0.5 };

const animateBars = (entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      bars.forEach(bar => bar.style.width = bar.getAttribute("data-width"));
    }
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const publicationTab = document.querySelector(".publication-tab > a");
  const publicationLi = document.querySelector(".publication-tab");

  publicationTab.addEventListener("click", (e) => {
    e.preventDefault();
    publicationLi.classList.toggle("active");
  });

  document.addEventListener("click", (e) => {
    if (!publicationLi.contains(e.target)) {
      publicationLi.classList.remove("active");
    }
  });
});

const observer = new IntersectionObserver(animateBars, options);
observer.observe(document.querySelector("#skills"));


// ⭐ READ MORE (If you add button)
const aboutText = document.getElementById("aboutText");


// ⭐ MOBILE NAV MENU
const hamburger = document.querySelector(".hamburger");
const navContainer = document.querySelector(".nav-container");

hamburger.addEventListener("click", () => {
  navContainer.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navContainer.classList.remove("active"));
});
