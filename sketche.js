var scl = 20;
var s;
var food;
var score = 0;
var default_speed = 10;
let bg = (245, 240, 173);
let color = '#F6E403';


function size(size){
  scl = size;
}

function one(){
  color = '#F6E403';
}
function two(){
  color = '#FB3015';
}


function setup() {
  // put setup code here
  let cnv = createCanvas(600,600);
  cnv.position(350, 50)
  s = new snake();
  frameRate(default_speed);
  pickLocation();

}

function pickLocation(){
  var cols = floor(width/scl);
  var rows = floor(height/scl)
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);

}

function draw() {
  // put drawing code here
  background(bg);
  s.update();
  s.show();

  if (s.eat(food)){
    pickLocation();
    

  }

  fill(color);
  rect(food.x, food.y, scl, scl);
}

  
function keyPressed(){
  if (keyCode === UP_ARROW){
    s.dir(0, -1);
  } else if(keyCode === DOWN_ARROW){
    s.dir(0, 1);
  } else if(keyCode === RIGHT_ARROW){
    s.dir(1, 0);
  } else if(keyCode === LEFT_ARROW){
    s.dir(-1, 0);
  }
}


