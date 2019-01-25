// horizontal scroll onmousemove

var x;

function handleMouse(e) {
  if (x && document.getElementById('TASC').checked) {
    document.querySelector('.grid-wrapper').scrollBy(1.5*(e.clientX - x), 0);
  }

  x = e.clientX;
}

document.onmousemove = handleMouse;