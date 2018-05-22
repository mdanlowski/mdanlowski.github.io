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
		/**********************************************************
		*	TODO
		*	+ make select work when mouse moves from + to -
		*	- export selection checking code to external file
		*	- 
		************************************************************/
		
		if ( selectionOn && (this.xpos > selectInitX && this.xpos < mouseX) && (this.ypos > selectInitY && this.ypos < mouseY) ) {
				this.isSelected = true;
		}
		if ( selectionOn && !((this.xpos > selectInitX && this.xpos < mouseX) && (this.ypos > selectInitY && this.ypos < mouseY)) ){
				this.isSelected = false;
		}

		if ( selectionOn && (this.xpos < selectInitX && this.xpos > mouseX) && (this.ypos < selectInitY && this.ypos > mouseY) ) {
				this.isSelected = true;
		}

		if(this.isSelected){
			stroke('lime');
		}
		else {
			stroke('black');
		}
		strokeWeight(2);
		fill(this.clr);
		ellipse(this.xpos, this.ypos, 30, 30);
	}
	
	this.calcPos = function(){

	}

}


Number.prototype.between = function(a, b) {
  var min = Math.min.apply(Math, [a, b]),
    max = Math.max.apply(Math, [a, b]);
  return this > min && this < max;
};
