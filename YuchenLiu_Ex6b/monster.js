function Monster(x, y){

 this.position = createVector(x, y);
 this.velocity = createVector(0, 0);
 this.acceleration;
    this.update = function(a, b){
      this.a = a;
      this.b = b;
      this.acceleration = createVector((this.a / 100 - this.position.x / 100), (this.b / 100 - this.position.y / 100));
      this.velocity.add(this.acceleration);
      this.velocity.limit(10);
      this.position.add(this.velocity);
      
    }
 

    
    
     this.display = function(){
       //body
     strokeWeight(1);
     stroke(0);
     fill(178, 174, 147);
     triangle(this.position.x - 60, this.position.y - 195, this.position.x - 25, this.position.y - 175, this.position.x - 55, this.position.y - 147);// right ear
     triangle(this.position.x + 60, this.position.y - 195, this.position.x + 25, this.position.y - 175, this.position.x + 55, this.position.y - 147);// left ear
     ellipse(this.position.x, this.position.y - 120, 120, 120);// head
     arc(this.position.x, this.position.y, 160, 200, -1.05, 4.22, OPEN);// body 
     noStroke();
     fill(250, 248, 237);
     ellipse(this.position.x, this.position.y, 80, 100);//belly
     
  //face
  noStroke();
  triangle(this.position.x - 30, this.position.y - 135, this.position.x + 30, this.position.y - 135, this.position.x, this.position.y - 125);
  ellipse(this.position.x - 15, this.position.y - 110, 40, 40);
  ellipse(this.position.x + 15, this.position.y - 110, 40, 40);//face
  
  strokeWeight(1);
  stroke(0);
  line(this.position.x - 17, this.position.y - 115, this.position.x - 70, this.position.y - 135);
  line(this.position.x - 17, this.position.y - 113, this.position.x - 75, this.position.y - 120);
  line(this.position.x - 17, this.position.y - 110, this.position.x - 70, this.position.y - 105); 
  line(this.position.x + 17, this.position.y - 115, this.position.x + 70, this.position.y - 135);
  line(this.position.x + 17, this.position.y - 113, this.position.x + 75, this.position.y - 120);
  line(this.position.x + 17, this.position.y - 110, this.position.x + 70, this.position.y - 105);// beard
  
  noStroke();
  fill(80);
  triangle(this.position.x, this.position.y - 100, this.position.x - 20, this.position.y - 90, this.position.x + 20, this.position.y - 90);//mouth..maybe
  
  strokeWeight(8);
  stroke(50);
  point(this.position.x - 26,this.position.y - 130);
  point(this.position.x + 26,this.position.y - 130);// eye
  
  //hand
 
  
    
     strokeWeight(1);
  stroke(0);
  fill(178, 174, 147);
  quad(this.position.x + 58, this.position.y - 69, this.position.x + 116, this.position.y - 19, this.position.x + 112, this.position.y - 2, this.position.x + 75, this.position.y - 35);
  ellipse(this.position.x + 120, this.position.y - 9, 20, 20);// left hand
  
  fill(255, 0, 0);
  ellipse(this.position.x - 70, this.position.y - 50, 40, 40);
  noFill();
  arc(this.position.x - 72, this.position.y - 75, 30, 30, 1, 2);
  arc(this.position.x - 58, this.position.y - 68, 30, 30, 2.7, 4);
  // an apple in its right hand!
  // show that it is a field mouse
  
  fill(178, 174, 147);
  ellipse(this.position.x - 89, this.position.y - 50, 20, 20);// right hand
  
  stroke(250, 8, 36);
  strokeWeight(3);
  line(this.position.x - 18, this.position.y - 140, this.position.x - 34, this.position.y - 120);
  line(this.position.x - 24, this.position.y - 140, this.position.x - 18, this.position.y - 132);
  line(this.position.x - 28, this.position.y - 120, this.position.x - 34, this.position.y - 126);// scar
  
  noFill();
  strokeWeight(15);
  stroke(178, 174, 147);
  arc(this.position.x - 90, this.position.y - 10, 90, 70, 1, 3.6);// tail
  noStroke();
  fill(178, 174, 147);
  triangle(this.position.x - 145, this.position.y - 31, this.position.x - 114, this.position.y - 18, this.position.x - 118, this.position.y - 45);
  
  noFill();
  strokeWeight(10);
  stroke(131, 125, 102);
  line(this.position.x + 120, this.position.y - 9, this.position.x + 140, this.position.y - 22);
  
  strokeWeight(1);
  stroke(0);
  fill(222, 222, 222);
  triangle(this.position.x + 139, this.position.y - 27, this.position.x + 153, this.position.y - 12, this.position.x + 175, this.position.y - 52);// a knife
  
  //weakness
  strokeWeight(5);
      stroke(245, 35, 220);
      line(this.position.x - 12, this.position.y - 12, this.position.x + 12, this.position.y + 12);
      line(this.position.x + 12, this.position.y - 12, this.position.x - 12, this.position.y + 12);// a monster should have its weekness
  }
}