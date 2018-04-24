//

function Animation(/*x_, y_, typeOfAnim, birthFrameCount*/){
	// this.birthFrameCount = frameCount;
	// this.xpos = x_;
	// this.ypos = y_;
	// this.type = typeOfAnim;

	this.drawAnimAt = function( x_, y_, typeOfAnim, birthFrameCount){

		console.log( x_, y_, typeOfAnim, birthFrameCount);

		switch (typeOfAnim) {
			case "explosion":
				noStroke();
				fill("orange");

				let radius = 0; // positive num
				console.log("dbg hello anim", radius);
				// let 100 frames be the explosion duration
				// TODO
				// CANT BE DONE THAT WAY. THE LIBRARY RESOLVES ALL LOOPS IN
				// A SINGLE FRAME!!!!!!! so frameCount stays the same trough while()
				// ADD A THIS.COUNTER AND INCREMENT IN sketch.js
				// ... OR JUST POP A FUKEN GIF
				// END_TODO
				while(radius <= 100){
					console.log("inside wh", frameCount);
					radius++;
					ellipse( x_, y_, radius, radius );
					
				}
				break;

		}
	}

}