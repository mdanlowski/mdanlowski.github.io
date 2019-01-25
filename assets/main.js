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
	setTimeout(function() {
		obj.style.display = 'none';
	}, 480);

	// console.log(obj)// = '0%';
		for (var objx of document.querySelector('.anim-sequence').children){
		   	objx.style.opacity = 1;
		}
}

function slideOutTile(obj, event) {
	obj.style.height = '0%';
	obj.style.fontSize = '0';
	obj.parentNode.querySelector('.box-overlay').style.display = 'flex';

	if (obj.parentElement.children[0].children[0].className.includes('anim')) {
		for (var objx of document.querySelector('.anim-sequence').children){
		   	objx.style.opacity = 0;
		}
	}
}


// attach scrolling function to mouse cursor
document.onmousemove = handleMouse;

// switch horizontal scroll with space as well
document.addEventListener('keydown', function(e){
	// console.log(e.code);
	if (e.code == 'Space') document.getElementById('TASC').click();
});


// attach wheel Y to X axis of the box
// document.querySelector('.grid-wrapper').onmousewheel = function(event){
document.addEventListener('mousewheel', function(event){
	document.querySelector('.grid-wrapper').scrollBy(0.4*(event.deltaY), 0);

});


function revealAll(obj, e){
	if (obj.innerText.includes('REVEAL')) {
		for (var elem of document.querySelectorAll('.box-overlay')){
			elem.click();
		}
		obj.innerText = 'HIDE ALL TILES';
	}
	else  {
		for (var elem of document.querySelectorAll('.slidein-details')){
			elem.click();
		}
		obj.innerText = 'REVEAL ALL TILES';
	}
}