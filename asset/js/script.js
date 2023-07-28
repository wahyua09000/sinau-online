const navbarNav = document.querySelector(".navbar-nav");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hm = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

const slider = document.querySelectorAll(".row-slider");
const nxtBtn = document.querySelectorAll(".a-left");
const prvBtn = document.querySelectorAll(".a-right");

slider.forEach((item, i) => {
  let containerDimensions = item.getBoundingClientRect();
  let containerWidth = containerDimensions.width;

  nxtBtn[i].addEventListener("click", () => {
    item.scrollLeft -= containerWidth;
  });

  prvBtn[i].addEventListener("click", () => {
    item.scrollLeft += containerWidth;
  });
});
