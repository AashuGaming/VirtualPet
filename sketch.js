var dog;
var sadDog;
var happyDog;
var milk, milkImage;


function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  milk=loadImage("Images/Milk.png");
  milkImage=loadImage("Images/milkImage.png")
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150); 
  dog.addImage(happyDog);
  dog.scale=0.15;

  milk=createSprite(200, 200, 150, 150);
  milk.addImage(milkImage);
  milk.scale=0.15;

  
}

function draw() {
  background(46,139,87);
  drawSprites();
}
