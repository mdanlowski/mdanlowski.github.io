// Prototype project I :: Shooter game
// import { Player } from "Player";


var keyCode_ = "";
var plr = new Player(300, 300, 100, 10, 'green');
var gun1 = {
	projType : "bullet",
	projSpeed : 8,
	fireMode : "auto"
}
var gun2 = {
	projType : "laser",
	projSpeed : 15,
	fireMode : "single"
}
var gun = gun1;

var projectiles = [];
var hostiles = [new Enemy(300, 100, [300, 300], 2, 50, 10, 'red') ];

// ============================================   SETUP
function setup() {
	createCanvas(600, 600);
	textSize(20);
	var initialFrameCount = frameCount;
}
// ============================================   END-SETUP
// ============================================   DRAW
function draw() {
	background(0, 250, 100);

	plr.calcPos();
	plr.redraw();
	plr.drawStats();

	for(let obj of projectiles){
		obj.calcPos();
		obj.redraw();
		obj.edges(obj, projectiles, height, width);
	}
	for(let obj of hostiles){
		obj.calcPos();
		obj.redraw();
		for(let subobj of projectiles){
			obj.collisions(subobj);
		}
	}

	if(mouseIsPressed && mouseButton === LEFT){
		if(frameCount - initialFrameCount > 5){
			projectiles.push(new Projectile(plr, [mouseX, mouseY], gun));
			initialFrameCount = frameCount;
		}
	}
	if(mouseIsPressed && mouseButton === CENTER){
		hostiles.push(new Enemy(mouseX, mouseY, [mouseX, mouseY], 5, 50, 10, 'red') );
	}

	debugInfo(plr);
}
// ============================================   END-DRAW

function keyPressed() {
	if (keyCode === 49){
		gun = gun1;
	}
	if (keyCode === 50){
		gun = gun2;
	}
}

function mousePressed() {
	if (mouseButton === LEFT){
		initialFrameCount = frameCount;
		projectiles.push(new Projectile(plr, [mouseX, mouseY], gun));
	}
}

function debugInfo(plr_){
	textSize(20);
	stroke(0);
	fill(255);
	strokeWeight(1);

	// line connecting plr & mouse
	// line(plr_.xpos, plr_.ypos, mouseX, mouseY);

	text(keyCode_, 10, 100);
	text(projectiles.length, 550, 20);

	text(Object.values(gun)[0], 10, 70);

	if(projectiles.length){
		text("last particle heading: " + Object.values(projectiles[projectiles.length-1].heading), 10, 45);
	}

	switch(keyCode_){
		case 37:
			text("LEFT_ARROW", 200, 100);
			break;
		case 38:
			text("UP_ARROW", 200, 100);
			break;
		case 39:
			text("RIGHT_ARROW", 200, 100);
			break;
		case 40:
			text("DOWN_ARROW", 200, 100);
			break;
	}

	text("plr pos: " + plr_.xpos  + ", " + plr_.ypos, 10, 20);

	textSize(15);
	fill('red');
	text("WASD - move; 1,2 - guns", 10, 590);
}