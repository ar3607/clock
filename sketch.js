function setup() {
	createCanvas(500,500); // make an HTML canvas element width x height pixels
}

function draw() {
	background(200);
	textSize(32);
	fill('blue');
  
//	text(hour(), 10, 30);
    noFill(); 
  //stroke('white');
  strokeWeight(5)
  rect(90,100, 320, 295);
  
  strokeWeight(5); 
  line(90, 100, 410, 100);
  line(90, 395, 410, 395); 

  strokeWeight(3); 
  line(90, 247.5, 410, 247.5); 
  
  strokeWeight(3); 
  line(90, 173.75, 410, 173.75); 
  
  strokeWeight(3);
  line(90, 321.25, 410, 321.25); 
  
  strokeWeight(5); 
  fill('#4cb6c2'); 
  var h = hour(); 
  circle(250, 100+(h*12.5), 40, 10, 100);
  //circle(30, 30, 2*(hour(),10,30));
	
  //fill(100);

  fill('#68dea9');
 // text(minute(), 10, 60);
	
  fill('#68dea9'); 
  //noFill(); 
  //stroke('red');
  var m = minute(); 
  circle(250, 100+(5*m),30,10,60);
  
  fill(255, 204, 100);
 // text(second(), 10, 90);
  var s = second(); 
    fill(255, 204, 0);
    circle(250,100+(5*s), 20, 10, 40)
  

   //translate(-100, 4)
    //circle(200,100,2*(second(),10,90));
  
fill('#4cb6c2'); 
 // circle(350, 100+(h*12.5), 40, 10, 100);
  //circle(30, 30, 2*(hour(),10,30));
	
  //fill(100);

  fill('#68dea9');
 // text(minute(), 10, 60);
	
  fill('#68dea9'); 
  //noFill(); 
  //stroke('red');
 // var m = minute(); 
  //circle(350, 100+(5*m),30,10,80);
  
  fill(255, 204, 100);
 // text(second(), 10, 90);
  var s = second(); 
    fill(255, 204, 0);
   // circle(350,100+(5*s), 20, 10, 40)
  
  //line(300, 100, 300, 400);
  
  /////
  
  fill('#4cb6c2'); 
   circle(410 - (2.5*h), 100+(h*12.5), 40, 10, 100);
  //circle(30, 30, 2*(hour(),10,30));
	
  //fill(100);

  fill('#68dea9');
 // text(minute(), 10, 60);
	
  fill('#68dea9'); 
  //noFill(); 
  //stroke('red');
  var m = minute(); 
  circle(410-(m), 100+(5*m),30,10,60);
  
  fill(255, 204, 100);
 // text(second(), 10, 90);
  var s = second(); 
    fill(255, 204, 0);
    circle(410-(s),100+(5*s), 20, 10, 40)
  
  fill('#4cb6c2'); 
   circle(90 + (2.5*h), 100+(h*12.5), 40, 10, 100);

    fill('#68dea9'); 
    circle(90+(m), 100+(5*m),30,10,60);

  fill(255, 204, 0);
    circle(90+(s),100+(5*s), 20, 10, 40)
  
  //line(300, 100, 600, 400);
/*    fill('#4cb6c2'); 
    circle(90 + (2.5)*h, 695-(h*12.5), 40, 10, 100);

  fill(255, 204, 100); 
  circle(90+s, 695-(5*s), 20, 10, 40);
  */
 
  //line(200,100, 300, 400); 
  
}