// Blueprint for npc

function Enemy(initX, initY, heading_, vel_, hp_, ammo_, color_){
	this.xpos = initX;
	this.ypos = initY;
	this.vel = vel_;

	this.hp = hp_;
	this.ammo = ammo_;
	this.clr = color_;

	this.heading = {
		x : 0.01*(heading_[0] - this.xpos),
		y : 0.01*(heading_[1] - this.ypos)
	}

	this.redraw = function(){
		fill( this.clr );
		stroke(0);
		strokeWeight(1);
		ellipse(this.xpos, this.ypos, 22, 22);
		fill('red');
		noStroke();
		rect(this.xpos - 25, this.ypos + 20, 0.5 * this.hp, 4);
		stroke(1);
	}

	this.calcPos = function(){
		// this.xpos += this.vel * random(-1,1);
		// this.ypos += this.vel * random(-1,1);

	}

	this.collisions = function( obj ){
		if (obj instanceof Projectile){
			console.log("collis. check");

		  if((obj.xpos+20>=this.xpos && obj.xpos-20<=this.xpos) && (obj.ypos+20<=this.ypos && obj.ypos-20>=this.ypos )){
		  	console.log("HIT !");

		  	obj.xpos = -100; obj.ypos = -100;
		  	this.hp -= 5;
		  }

		}
		else return;
	}

	this.behaviour = function(){
	}
}
