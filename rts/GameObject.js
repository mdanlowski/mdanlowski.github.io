// Blueprint for OBJ

function GameObject(initX, initY, hp_, ammo_, color_){
	this.xpos = initX;
	this.ypos = initY;
	this.hp = hp_;
	this.ammo = ammo_;
	this.clr = color_;
	this.isSelected = false;

	this.redraw = function(){
		//check selection area
		if (this.xpos > selectInitX && this.xpos < mouseX-selectInitX && this.ypos > 
			selectInitY && this.ypos < mouseY-selectInitY) {
			// if (selectionOn)
				this.isSelected = true;
		}

		if(this.isSelected){
			stroke('lime');
		}
		else {
			stroke('black');
		}
		strokeWeight(2);
		fill(this.clr)
		ellipse(this.xpos, this.ypos, 50, 50);
	}
	
	this.calcPos = function(){

	}

}
