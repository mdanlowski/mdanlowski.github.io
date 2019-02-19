// horizontal scroll onmousemove
var x;
var clicks = 0;
var autoScrollRate = 1.5;
var wheelScrollRate = 0.4;
var tileCount = 6;

function handleMouse(e) {
  if (x && document.getElementById('TASC').checked) {
    document.querySelector('.grid-wrapper').scrollBy(autoScrollRate*(e.clientX - x), 0);
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
	clicks++;
	// console.log(clicks)
	if (clicks >= tileCount) document.querySelector('.reveal-all').innerText = 'HIDE ALL';
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
	clicks--;
	// console.log(clicks)
	if (!clicks) document.querySelector('.reveal-all').innerText = 'REVEAL ALL';
}


// attach scrolling function to mouse cursor
document.onmousemove = handleMouse;

// switch horizontal scroll with space as well
document.addEventListener('keydown', function(e){
	console.log(e.code);
	if (e.code == 'Space') document.getElementById('TASC').click();
	else if (e.code == 'ArrowUp'){
		
		if (window.location.href.endsWith('.io') || window.location.href.includes('#projects-section')) {
			//pass
		}//1 ^
		if(window.location.href.includes('#cv-section')){
			document.querySelector('a[href="#projects-section"]').click();
		}//2 ^
		else if (window.location.href.includes('#about-section')) {
			document.querySelector('a[href="#cv-section"]').click();
		}//3 ^
		
	}
	else if (e.code == 'ArrowDown') {
		
		if (window.location.href.endsWith('.io') || window.location.href.endsWith('.html') || window.location.href.includes('#projects-section')) {
			document.querySelector('a[href="#cv-section"]').click();
		}//1 v
		else if(window.location.href.includes('#cv-section')){
			document.querySelector('a[href="#about-section"]').click();
		}//2 v
		else if (window.location.href.includes('#about-section')) {
			document.querySelector('a[href="#@TODO-SECTION"]').click();
		}//3 v
		
	}
});


// attach wheel Y to X axis of the box
// document.querySelector('.grid-wrapper').onmousewheel = function(event){
document.addEventListener('mousewheel', function(event){
	document.querySelector('.grid-wrapper').scrollBy(wheelScrollRate*(event.deltaY), 0);

});


function revealAll(obj, e){
	clicks = 0;
	// console.log(clicks)

	console.log(clicks)
	if (obj.innerText.includes('REVEAL')) {
		for (var elem of document.querySelectorAll('.box-overlay')){
			elem.click();
		}
		obj.innerText = 'HIDE ALL';
	}
	else  {
		for (var elem of document.querySelectorAll('.slidein-details')){
			elem.click();
		}
		obj.innerText = 'REVEAL ALL';
	}
}

// remove Linux unfriendly arrows from the links and underline as a substitute
document.addEventListener('DOMContentLoaded', function(){
	if (!navigator.userAgent.includes("Windows")) {
		var removeIcons = document.querySelectorAll('.proj-descr > p > a');
		for(var objy of removeIcons){
			var t = objy.innerText;
			objy.innerText = t.substr(0, t.length-2);
			objy.style.textDecoration = "underline";
		}
	}
});