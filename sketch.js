var x = 0;

var speed = 10;
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(255);
    
    //i wrote this so background changes to pink when clicked
    if(mouseIsPressed){
        background(255,204,229);
    }
    
    //makes outline white, 6px thick, no color inside shapes

    stroke(0);
    strokeWeight(6);
    
    if(mouseY<150){
        fill(255,0,255);
    }
    else{
        noFill();
    }
    
    
    
    //a circle 
    
    ellipse(x,200,100,100);
    
    //this code is going to get the circle to move on its own
  
    
    if(x>width || x<0){
        console.log("CIRCLE IS OFF THE SCREEN!!!!")
      speed = speed * -1;  
    }
    
    x = x + speed;
    console.log(x);
    
}