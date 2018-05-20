// Prototype project II :: RTS game

/**********************************************************
*	:: sketch.js - main game animation loop ::
***********************************************************
*/
var keyCode_ = "";

// ============================================   SETUP
function setup() {
	createCanvas(600, 600);
	textSize(15);
	var initialFrameCount = frameCount;
}
// ============================================   END-SETUP

// ============================================   GAME OBJECTS
var test = new GameObject(300, 300, 10, 0, 'red');
var gobjects = [];
// ============================================   END-OBJECTS

// ============================================   DRAW
function draw() {
	// Render background
	background(200, 0, 100);

	if(mouseIsPressed && mouseButton === LEFT){
		rectSelect(selectInitX, selectInitY);
	}

	test.redraw();
	for(let obj of gobjects){
		obj.redraw();
	}
}
// ============================================   END-DRAW

function mousePressed() {
	selectInitX = mouseX;
	selectInitY = mouseY;

	let r, g, b;
	r = Math.round(random(255));
	g = Math.round(random(255));
	b = Math.round(random(255));
	if(mouseButton === CENTER) {
		let temp = new GameObject(mouseX, mouseY, 10, 0, 'rgb('+r+','+g+','+b+')');
		// console.log(temp.clr);
		gobjects.push(temp);
	}
}

function mouseReleased() {
  selectionOn = false;
}

function rectSelect(initX, initY){
	stroke(selectionColor);
	strokeWeight(1);
	noFill();
	if(mouseIsPressed){
		selectionOn = true;
		rect(initX, initY, mouseX-initX, mouseY-initY);
	}
	// else{
	// 	selectionOn = false;
	// }
	text((mouseX-initX) + ", " + (mouseY-initY), mouseX+10, mouseY+20);
}

function keyPressed() {
	//keyCode
	
}


function debugInfo(plr_){
	textSize(20);
	stroke(0);
	fill(255);
	strokeWeight(1);

}