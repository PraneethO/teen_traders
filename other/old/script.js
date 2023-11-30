const menuItems = document.getElementById("menu-items");
const hamburgerLines = document.getElementById("hamburger-lines");
const lineOne = document.getElementById("line1");
const lineTwo = document.getElementById("line2");
const lineThree = document.getElementById("line3");

const bigContainer = document.getElementById("bigContainer");

var count = 0;

function handleClick() {
  count += 1;

  if (count % 2 == 1) {
    menuItems.style.display = "none";
    lineOne.style.transform = "rotate(0deg)";
    lineTwo.style.transform = "scaleY(1)";
    lineThree.style.transform = "rotate(0deg)";
  } else {
    menuItems.style.display = "block";
    lineOne.style.transform = "rotate(45deg)";
    lineTwo.style.transform = "scaleY(0)";
    lineThree.style.transform = "rotate(-45deg)";
  }
}
