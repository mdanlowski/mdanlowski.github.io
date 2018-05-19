// Prototype project II :: RTS game

/**********************************************************
*	:: sketch.js - main game animation loop ::
***********************************************************
*/
var keyCode_ = "";

// ============================================   SETUP
function setup() {
	createCanvas(600, 600);
	textSize(20);
	var initialFrameCount = frameCount;
}
// ============================================   END-SETUP

// ============================================   GAME OBJECTS
var test = new GameObject(300, 300, 100, 100, 'red');
// ============================================   END-OBJECTS

// ============================================   DRAW
function draw() {
	// Render background
	background(200, 0, 100);

	if(mouseIsPressed && mouseButton === LEFT){
		rectSelect(selectInitX, selectInitY);
	}
	
	test.redraw();

}
// ============================================   END-DRAW

function mousePressed() {
	selectInitX = mouseX;
	selectInitY = mouseY;
}

function rectSelect(initX, initY){
	stroke(selectionColor);
	strokeWeight(1);
	noFill();
	if(mouseIsPressed){
		selectionOn = true;
		rect(initX, initY, mouseX-initX, mouseY-initY);
	}
	else{
		selectionOn = false;
	}
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