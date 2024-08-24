// Function to hide the preloader
function hidePreloader() {
  const loader = document.getElementById("preloader");
  loader.classList.add("fade-out");

  loader.addEventListener("transitionend", () => {
    loader.style.display = "none";
  });
}

// Function to load the header content
function loadHeader() {
  const headerHTML = `
    <div class="cmps-logo">
      <a href="../index.html"><img id="logo" src="../assets/PUPSJ-LOGO.png" alt="PUP San Juan logo" /></a>
    </div>
    <div class="cmps-header">
      <a href="../index.html"><img id="campus-name" src="../assets/PUPSJ-HEADER.png" alt="PUP San Juan logo" /></a>
      <ul class="nav-items">
        <li class="dropdown">
          <a href="#">About</a>
          <ul class="dropdown-content">
            <li><a href="#">Vision and Mission</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#">Administration</a></li>
            <li><a href="#">Facilities</a></li>
            <li><a href="#">Faculty and Staff</a></li>
            <li><a href="#">Local Task Force</a></li>
          </ul>
        </li>
        <li><a href="#">Certificate of Authenticity</a></li>
        <li class="dropdown">
          <a href="#">Programs</a>
          <ul class="dropdown-content">
            <li><a href="#">BSA</a></li>
            <li><a href="#">BSENT</a></li>
            <li><a href="#">BSED - English</a></li>
            <li><a href="#">BSHM</a></li>
            <li><a href="../programs/bsit.html">BSIT</a></li>
            <li><a href="#">BSBA - FM</a></li>
          </ul>
        </li>
        <li><a href="#">Exhibits</a></li>
      </ul>
    </div>
    <button type="submit" class="search-button">
      <img class="search" src="../assets/search.png" alt="search" />
    </button>`;
  
  document.querySelector("header").innerHTML = headerHTML;
}

// Function to load the footer content
function loadFooter() {
  const footerHTML = `
    <h class="left">
      PUP San Juan Branch <br> All Rights Reserved <br> 2024
    </h>
    <h class="right">
      The Country's 1st PolytechnicU
    </h>`;
  
  document.querySelector("footer").innerHTML = footerHTML;
}

// Function to load the footer content
function loadIcon() {
  const logoHTML = `<link rel="icon" href="../assets/PUPSJ-LOGO.png" type="image/icon type" />`;
  
  document.querySelector("#head").innerHTML = logoHTML;
}

// Event listener to hide the preloader on window load
window.addEventListener("load", () => {
  hidePreloader();
  loadHeader();
  loadFooter();
  loadIcon();
});
