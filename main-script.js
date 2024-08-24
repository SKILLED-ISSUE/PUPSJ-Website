var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.classList.add("fade-out");

  loader.addEventListener("transitionend", function () {
    loader.style.display = "none";
  });
});