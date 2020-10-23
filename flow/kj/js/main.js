var menuShown = false;

document.addEventListener('DOMContentLoaded', initialize);

function initialize() {
  const menuButton = document.getElementById('menu-button');
  const overlay = document.getElementById('overlay');
  menuButton.addEventListener('click', menuToggle);
  overlay.addEventListener('click', menuHide);

}

function menuToggle() {
  const menu = document.getElementById('menu-expanded');
  const overlay = document.getElementById('overlay');
  const svgBurger = document.querySelector('g.open');
  const svgCross = document.querySelector('g.close');

  if(!menuShown){
    menu.style.right = "0";
    overlay.style.display = "initial";

    svgBurger.style.opacity = "0";
    svgCross.style.opacity = "1";

  } else {
    menu.style.right = "-100%";
    overlay.style.display = "none";

    svgBurger.style.opacity = "1";
    svgCross.style.opacity = "0";
  }
  menuShown = !menuShown;

}


function menuHide() {
  menuShown = true;
  return menuToggle();
}