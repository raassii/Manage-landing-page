const openMenu = document.getElementById("mobile-nav");
const hamburgerIcon = document.getElementById("open-menu");
const closeIcon = document.getElementById("close-menu");
const navMenu = document.getElementById("nav-menu");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");
const form = document.getElementById("form");
const input = document.getElementById("email");
const submit = document.getElementById("submit");
const error = document.getElementById("error");

openMenu.addEventListener("click", () => {
  navMenu.classList.toggle("show");
  openMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});

hamburgerIcon.addEventListener("click", () => {
  window.removeEventListener("scroll", windowScroll);
  header.style.backgroundColor = "white";
  header.style.filter = "drop-shadow(0 5px 10px rgba(128, 128, 128, 0.349))";
  header.style.transition = "0.2s linear";
});

closeIcon.addEventListener("click", () => {
  window.addEventListener("scroll", windowScroll);
  if (window.scrollY < 1) {
    header.style.backgroundColor = "transparent";
  }
});

window.addEventListener("scroll", windowScroll);

function windowScroll() {
  if (window.scrollY >= 2) {
    header.style.backgroundColor = "white";
    header.style.filter = "drop-shadow(0 5px 10px rgba(128, 128, 128, 0.349))";
    header.style.transition = "0.2s linear";
  } else {
    header.style.backgroundColor = "transparent";
  }
}

window.addEventListener("load", () => {
  if (window.scrollY < 2) {
    header.style.backgroundColor = "transparent";
  } else if (window.scrollY >= 2) {
    header.style.backgroundColor = "white";
    header.style.filter = "drop-shadow(0 5px 10px rgba(128, 128, 128, 0.349))";
  }
});

form.addEventListener("submit", emailValidation);
submit.addEventListener("click", emailValidation);

function emailTest(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}

function emailValidation(event) {
  const inputValue = input.value.trim();
  if (!emailTest(inputValue)) {
    event.preventDefault();
    error.style.display = "block";
    input.style.border = " 2px solid #f96262";
  } else {
    error.style.display = "none";
  }
}

const swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      centeredSlides: true,
      initialSlide: 1,
      slidesPerView: 2.2,
      spaceBetween: 0,
    },
  },
});
