window.addEventListener("scroll", function () {
  var navbar = document.getElementById("navbar");
  if (window.scrollY < window.innerHeight) {
    navbar.style.display = "none"; // Show the navbar when scrolled down 100 pixels
  } else {
    navbar.style.display = "block"; // Hide the navbar when at the top of the page
  }

  if (window.scrollY == 0) {
    navbar.style.display = "block";
  }
});
