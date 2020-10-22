document.addEventListener('DOMContentLoaded', initialize);

function initialize() {

  const menuButton = document.getElementById('menu-button');
  menuButton.addEventListener('click', menuToggle);

}

function menuToggle() {
  console.log("MENU KLIKNIĘTE");

  const menu = document.getElementById('menu-expanded');
  const overlay = document.getElementById('overlay');
  
  menu.style.left = "calc(100% - 560px)";
  overlay.style.display = "initial";

  overlay.addEventListener('click', menuHide);
}

function menuHide() {
  const menu = document.getElementById('menu-expanded');
  const overlay = document.getElementById('overlay');

  menu.style.left = "calc(100%)";
  overlay.style.display = "none";
}