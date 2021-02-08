var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;
var edge1,edge2,edge3,edge4;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    surface1 = createSprite(700,550,190,50);
    surface1.shapeColor = "green"; 
    
    surface2 = createSprite(500,550,190,50);
    surface2.shapeColor = "red";

    surface3 = createSprite(300,550,190,50);
    surface3.shapeColor = "orange";

    surface4 = createSprite(100,550,190,50);
    surface4.shapeColor = "blue";

    box = createSprite(random(20,750),300,100,100);
    box.shapeColor = "white";
    box.velocityX = 7;
    box.velocityY = 7;
    //create box sprite and give velocity
      edge1 = createSprite(800,0,1,1200);
      edge2 = createSprite(0,600,1600,1);
      edge3 = createSprite(0,0,1600,1);
      edge4 = createSprite(0,0,1,1200);

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    //createEdgeSprites();
   box.bounceOff(edge1);
   box.bounceOff(edge2);
   box.bounceOff(edge3);
   box.bounceOff(edge4);

    //add condition to check if box touching surface and make it box
    drawSprites();
    if(surface1.isTouching(box)&&box.bounceOff(surface1)){
        box.shapeColor = "green";
        music.play();
    }
    if(surface2.isTouching(box)&&box.bounceOff(surface2)){
        box.shapeColor = "red";
        box.velocityX = 0;
        box.velocityY = 0;
        music.stop();
    }
    if(surface3.isTouching(box)&&box.bounceOff(surface3)){
        box.shapeColor = "orange";
        music.play();
    }
    if(surface4.isTouching(box)&&box.bounceOff(surface4)){
        box.shapeColor = "blue";
        music.play();
    }
}
