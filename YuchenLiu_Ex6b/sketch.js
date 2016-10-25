  var mons = new Array (3);
   var positionx = [];
   var positiony = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
   for(var i = 0; i < mons.length; i ++){
     mons[i] = new Monster(random(width),random(height));
    positionx[i] = random(width / 4 * i, width / 4 * (i + 1));
    positiony[i] = random((4 - i)/4 * height,  i / 4 * height);
   }
    }

function mousePressed(){
  mons.push(new Monster(0, 0));
}


function draw() {
  background(255);
  for(var i = 0; i < mons.length; i ++){
    if( i < 3){
  mons[i].update(positionx[i], positiony[i]);
    }
    else{
      mons[i].update(mouseX, mouseY);
    }
  mons[i].display();
  }
}

