<<<<<<< HEAD
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
    e.preventDefault();               // prevent page jump
    publicationLi.classList.toggle("active"); // toggle dropdown visibility
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!publicationLi.contains(e.target)) {
      publicationLi.classList.remove("active");
    }
  });
});

const observer = new IntersectionObserver(animateBars, options);
observer.observe(document.querySelector("#skills"));



// ⭐ READ MORE TOGGLE SCRIPT — Add this below
const aboutText = document.getElementById("aboutText");
const readMoreBtn = document.getElementById("readMoreBtn");

readMoreBtn.addEventListener("click", () => {
  aboutText.classList.toggle("expanded");

  if (aboutText.classList.contains("expanded")) {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

=======
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
    e.preventDefault();               // prevent page jump
    publicationLi.classList.toggle("active"); // toggle dropdown visibility
  });

  // Optional: close dropdown when clicking outside
  document.addEventListener("click", (e) => {
    if (!publicationLi.contains(e.target)) {
      publicationLi.classList.remove("active");
    }
  });
});

const observer = new IntersectionObserver(animateBars, options);
observer.observe(document.querySelector("#skills"));



// ⭐ READ MORE TOGGLE SCRIPT — Add this below
const aboutText = document.getElementById("aboutText");
const readMoreBtn = document.getElementById("readMoreBtn");

readMoreBtn.addEventListener("click", () => {
  aboutText.classList.toggle("expanded");

  if (aboutText.classList.contains("expanded")) {
    readMoreBtn.innerText = "Read Less";
  } else {
    readMoreBtn.innerText = "Read More";
  }
});


>>>>>>> 381d245a13373be74671e6446fddf7444865ee02
