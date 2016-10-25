function Body(x, y){
 this.x = x;
 this.y = y;

    
    
     this.display = function(){
     strokeWeight(1);
     stroke(0);
     fill(178, 174, 147);
     triangle(this.x - 60, this.y - 195, this.x - 25, this.y - 175, this.x - 55, this.y - 147);// right ear
     triangle(this.x + 60, this.y - 195, this.x + 25, this.y - 175, this.x + 55, this.y - 147);// left ear
     ellipse(this.x, this.y - 120, 120, 120);// head
     arc(this.x, this.y, 160, 200, -0.95, 4.1, OPEN);// body 
     noStroke();
     fill(250, 248, 237);
     ellipse(this.x, this.y, 80, 100);//belly
  }
}