// horizontal scroll onmousemove
var x;

function handleMouse(e) {
  if (x && document.getElementById('TASC').checked) {
    document.querySelector('.grid-wrapper').scrollBy(1.5*(e.clientX - x), 0);
  }

  x = e.clientX;
}

// slide-in tiles
function slideInTile(obj, event) {
	var style_ = obj.parentNode.querySelector('.slidein-details').style;
	style_.height = '100%';
	style_.fontSize = '11pt';
	// console.log(obj.style.height)// = '0%';
	setTimeout(function() {
		obj.style.display = 'none';
	}, 480);
	
	
}

function slideOutTile(obj, event) {
	obj.style.height = '0%';
	obj.style.fontSize = '0';
	obj.parentNode.querySelector('.box-overlay').style.display = 'flex';
}


document.onmousemove = handleMouse;

