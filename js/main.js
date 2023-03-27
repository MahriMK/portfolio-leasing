const tabItem = document.querySelectorAll(".choose-tabs__btn-item");
const tabContent = document.querySelectorAll(".choose-tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(evt) {
  const tabTarget = evt.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("choose-tabs__btn-item--active");
  });

  tabContent.forEach(function (item) {
    item.classList.remove("choose-tabs__content-item--active");
  });

  tabTarget.classList.add("choose-tabs__btn-item--active");
  document
    .querySelector(`#${button}`)
    .classList.add("choose-tabs__content-item--active");
}

const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".menu__list");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("menu__list--active");
});

const swiper = new Swiper(".swiper", {
  effect: "fade",
  pagination: {
    el: ".swiper-pagination",
  },
  autoplay: {
    delay: 5000,
  },
});
