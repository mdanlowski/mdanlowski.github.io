// Prototype project I :: Shooter game
// import { Player } from "Player";

/**********************************************************
*	:: sketch.js - main game animation loop ::
***********************************************************	
*	designed in OO fashion
*	- one instance of Player					: plr
*	- an array holding all active hostiles		: hostiles[] (instances of Enemy)
*		- inactive hostiles (killed) are moved outside the world (-100,-100) and removed from the
*		  array to be destroyed by the JS GC
*	- an array holding all shot out projectiles	: projectiles[]
*		- projectiles that hit any object (enemy, wall, etc.) are moved outside the world
*			- p. that fly outside the world are moved to (-100,-100) and are removed from
*			  the array to be destroyed by JS GC
*	- an object holding weapon types 			: weapons{}
*	-
***********************************************************
*	:: OBJ-OBJ communication ::
***********************************************************
*	
*	
*	
*	
***********************************************************
*loose ideas:
*websockets for multiplayer
*
*/

var weapons = {
	// gun1 - to be "automatic projectile emitter"
	projectileEmitter : {	
		projType  : "bullet",
		projSpeed : 8,
		fireMode  : "auto",
		fireRate : 5,
		damage 	  : 10
	},
	// gun2 - to be sth like "railgun/laser rifle"
	laserRifle : {
		projType  : "laser",
		projSpeed : 30,
		fireMode  : "single",
		fireRate : 50,
		damage	  : 50
	},
	// gun3 - sth like a grenade launcher
	grenadeLauncher : {
		projType  : "grenade",
		projSpeed : 3,
		fireMode  : "single",
		fireRate : 100,
		damage	  : 200
	}

}

// NEW / EXPERIMENTAL / --- add to docum.! ---
// dependency: Projectile
var animations = new Animation(); 
// END_NEW

var keyCode_ = "";

var plr = new Player(300, 300, 100, 10, 'green', weapons['projectileEmitter']);

var projectiles = [];
// var hostiles = [new Enemy(300, 100, [300, 300], 2, 100, 10, 'red') ];
var hostiles = [];
for (var i = 1; i < 31; i++) {
	if (i <= 10) hostiles.push(new Enemy(25*i + 100, 20, [300, 300], 2, 100, 10, 'red'));
	if (i > 10 && i <= 20) hostiles.push(new Enemy(25*i - 150, 120, [300, 300], 2, 100, 10, 'red'));
	if (i > 20 && i <= 30) hostiles.push(new Enemy(25*i - 350, 220, [300, 300], 2, 100, 10, 'red'));
}

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
		obj.die(obj, hostiles);
		obj.calcPos();
		obj.redraw();
		// 
		for(let subobj of projectiles){
			obj.collisions(subobj);
		}
	}

	if(mouseIsPressed && mouseButton === LEFT){
		if(frameCount - initialFrameCount > plr.gun.fireRate ){
			projectiles.push(new Projectile(plr, [mouseX, mouseY], plr.gun));
			initialFrameCount = frameCount;
		}
	}
	
	debugInfo(plr);
}
// ============================================   END-DRAW

function keyPressed() {
	if (keyCode === 49){
		plr.gun = weapons['projectileEmitter'];
	}
	if (keyCode === 50){
		plr.gun = weapons['laserRifle'];
	}
	if (keyCode === 51){
		plr.gun = weapons['grenadeLauncher'];
	}
}

function mousePressed() {
	if (mouseButton === LEFT){
		initialFrameCount = frameCount;
		projectiles.push(new Projectile(plr, [mouseX, mouseY], plr.gun));
	}
	if( mouseButton === CENTER ){
		hostiles.push(new Enemy(mouseX, mouseY, [mouseX, mouseY], 5, 100, 10, 'red') );
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
	text("P: " + projectiles.length, 550, 20);
	text("E: " + hostiles.length, 550, 50);

	text(Object.values(plr.gun)[0], 10, 70);

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