// Blueprint for npc

function Enemy(initX, initY, heading_, vel_, hp_, ammo_, color_){
	this.xpos = initX;
	this.ypos = initY;
	this.velx = vel_;
	this.vely = vel_;
	// this.accx = 0.05;
	// this.accy = 0.05;

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

	this.die = function( _self_, enemyArr ){
		if(this.hp <= 0){
			this.xpos = -100;
			this.ypos = -100;
			enemyArr.splice( enemyArr.indexOf(_self_), 1 );
		}
	}

	this.attack = function(){

	}

	this.calcPos = function(){
		// this.velx += this.accx * 10*random(-1,1);
		// this.vely += this.accy * 10*random(-1,1);
		
		// this.xpos += this.velx * random(-1,1);
		// this.ypos += this.vely * random(-1,1);

		// this.accx = 0;
		// this.accy = 0;

	}

	this.collisions = function( obj ){
		if (obj instanceof Projectile){
			// console.log("collis. check");

		  if((obj.xpos >= this.xpos-20 && obj.xpos <= this.xpos+20) && (obj.ypos >= this.ypos-20 && obj.ypos <= this.ypos+20 )){
		  	// console.log("HIT !");

		  	obj.xpos = -100; obj.ypos = -100;
		  	this.hp -= obj.dmg;
		  }

		}
		else return;
	}

	this.behaviour = function(){
	}
}
