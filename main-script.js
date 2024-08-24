function hidePreloader () {
  const loader = document.getElementById("preloader");
  loader.classList.add("fade-out");

  loader.addEventListener("transitionend", () => {
    loader.style.display = "none";
  });
}

window.addEventListener("load", () => {
  hidePreloader();
});