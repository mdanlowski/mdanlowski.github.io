function setup() {
	var can = createCanvas(600, 600, WEBGL);
	// background('#9E1030');
	can.parent('canvas-holder')
	
}

var rotX = 0, rotY = 0;
var idleRot = true
var angle = 0;

function draw() {
	rotateY(PI/4)
	// background(200);
	
	fill('#9E1030');
	
	rotateX(rotX);
	rotateY(rotY);
			
	var dirX = (mouseX / width - 0.5) * 2;
  	var dirY = (mouseY / height - 0.5) * 2;
  	directionalLight(158, 16, 48, dirX, -dirY, 0.8);
  	// directionalLight(250, 250, 250, 100, 100);
  	
	if (idleRot) { rotateY(angle-=0.001) }
	box(300);
}

function mouseDragged() {
    idleRot = false
	// console.log(mouseX-pmouseX);
	rotY += 0.0036*(mouseX - pmouseX);
	rotX += 0.0036*(mouseY - pmouseY);
}

function mouseReleased () {
	idleRot = true;
	angle = rotY;
}


// //==============2D
// 		// line(pmouseX, pmouseY, mouseX, mouseY);


