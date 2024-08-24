const header = document.querySelector(".header-default"),
  logo = document.getElementById("logo"),
  campusHeader = document.querySelector(".cmps-header"),
  campusName = document.getElementById("campus-name"),
  navItems = document.querySelector(".nav-items"),
  searchIcon = document.querySelector(".search"),
  searchButton = document.querySelector(".search-button"),
  spacer = document.querySelector(".spacer");

document.addEventListener("DOMContentLoaded", function () {
  let lastScrollTop = 0;
  const scrollThreshold = 20;

  window.addEventListener("scroll", function () {
    let currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    if (
      currentScrollTop > lastScrollTop &&
      currentScrollTop > scrollThreshold
    ) {
      header.classList.add("header-on-scroll");
      logo.id = "logo-on-scroll";
      campusHeader.classList.add("cmps-header-on-scroll");
      campusName.id = "campus-name-on-scroll";
      navItems.classList.add("nav-items-on-scroll");
      searchIcon.classList.add("search-on-scroll");
      searchButton.classList.add("search-button-on-scroll");
      spacer.style.height = '0em';
    } else if (currentScrollTop <= scrollThreshold) {
      header.classList.remove("header-on-scroll");
      logo.id = "logo";
      campusHeader.classList.remove("cmps-header-on-scroll");
      campusName.id = "campus-name";
      navItems.classList.remove("nav-items-on-scroll");
      searchIcon.classList.remove("search-on-scroll");
      searchButton.classList.remove("search-button-on-scroll");
      spacer.style.height = '28em';
    }

    lastScrollTop = currentScrollTop;
  });
});

var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.classList.add("fade-out");

  loader.addEventListener("transitionend", function () {
    loader.style.display = "none";
  });
});
