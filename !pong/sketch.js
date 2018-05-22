
// ===========================================================
/// AYY DAT PONGE
var plr = {
  x : 30,
  y : 600,
  h : 100,
  w : 10,

};
var cc = {
  x : 50,
  y : 50,
  h : 80,
  w : 10,

};
var ball = {
  x : 0,
  y : 0,
  d : 20,
  sx : -10,
  sy : 10,

}
function setup() {
    createCanvas(1200, 760);
    textSize(30);
    var cx = width/2;
    var cy = height/2;
    ball.x = cx;
    ball.y = cy;

}

function draw() {
//============ draw background and scoring fields:
  background(0, 255, 160);
      let cr = color(255,0,0);
      fill(cr); noStroke();
      rect(0, 0, 5, height);
      rect(width-5, 0, 5, height);
    
//================================ back to normal:
     let cw = (255,255,255);
     fill(cw); stroke(1);

//=============================== GAME MECHANICS:
  plr.y = mouseY;
  rect(plr.x, plr.y, plr.w, plr.h);    // plyr
  rect(width-cc.x, cc.y, cc.w, cc.h);   // ai

  // BALL BOUNCING:
  if ( ball.y + ball.d/2 >= height ) ball.sy = -ball.sy;
  if ( ball.y - ball.d/2 <= 0 ) ball.sy = -ball.sy;       
    if ( ball.x + ball.d/2 >= width ) ball.sx = -ball.sx; // +score plyr
    if ( ball.x - ball.d/2 <= 0 ) ball.sx = -ball.sx;     // +score ai

  // AI PAD:
  //if ( ball.x + ball.d/2 >= width ) ball.sx = -ball.sx;
         
  // if ( ball.x + ball.d/2 >= width ) 
  // if ( ball.x - ball.d/2 <= 0 ) ball.sx = -ball.sx;

  // BALL MOVE:
  fill(255,0,0);
  ellipse(ball.x, ball.y, ball.d, ball.d);
  ball.x += ball.sx;
  ball.y += ball.sy;

   //debugger
  // PLYR PAD:
  //if ( (ball.x - ball.d/2 == plr.x + plr.w) && (ball.y - ball.d/2 == plr.y ) && (ball.y + ball.d/2 == plr.y + plr.h) ) ball.sx = -ball.sx;
   if ( ball.y - ball.d/2 >= plr.y  &&  ball.y + ball.d/2 <= plr.y + plr.h  &&  ball.x - ball.d/2 == plr.x + plr.w  )
   {
     ball.sx = -ball.sx;
   } 

  // DEBUG:
  fill(1);
  text("b.x: " + ball.x, 600, 200);
  text("b.y: " + ball.y, 600, 230);
  text("plr.x: " + plr.x, 600, 260);
  text("plr.x+plr.w: " + (plr.x+plr.w), 600, 290);
  text("plr.y: " + plr.y, 600, 320);
  text("plr.y+plr.h: " + (plr.y+plr.h), 600, 350);
}
// ===========================================================