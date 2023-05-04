// ========== top-nav ==========
const btnTopNav = document.querySelector(".btn-nav");
const contentS = document.querySelector(".header");

btnTopNav.addEventListener("click", function () {
  contentS.classList.toggle("nav-open");
});
