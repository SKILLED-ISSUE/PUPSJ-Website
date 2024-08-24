var loader = document.getElementById("preloader");

window.addEventListener("load", function () {
  loader.classList.add("fade-out");

  loader.addEventListener("transitionend", function () {
    loader.style.display = "none";
  });
});

document.querySelector("header").innerHTML = `
    <div class="cmps-logo">
      <a href="../index.html"><img id="logo"  src="../assets/PUPSJ-Logo.png" alt="PUP San Juan logo" /></a>
    </div>

    <div class="cmps-header">
      <a href="../index.html"><img id="campus-name" href="../index.html" src="../assets/PUPSJ-Header.png" alt="PUP San Juan logo" /></a>
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
        <li><a href="">Exhibits</a></li>
      </ul>
    </div>

    <button type="submit" class="search-button">
      <img class="search" src="../assets/search.png" alt="search" />
    </button>`;

document.querySelector("footer").innerHTML = `
    <h class="left">
      PUP San Juan Branch <br> All Rights Reserved <br> 2024
    </h>
    <h class="right">
      The Country's 1st PolytechnicU
    </h>`;