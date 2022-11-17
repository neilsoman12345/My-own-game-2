
var backgroundImg;
var appleImg;
var bananaImg;
var chocolateImg;
var hamburgerImg;
var iceCreamImg;
var manRunning1Img;
var manRunning2Img;
var saladImg;
var manRunning3Img;

var apple, banana, chocolate, man;








function preload(){
backgroundImg = loadImage("images/background 2.jpg");
appleImg = loadImage("images/apple.png");
bananaImg = loadImage("images/banana.png");
chocolateImg = loadImage("images/chocolate.png");
hamburgerImg = loadImage("images/hamburger.png");
iceCreamImg = loadImage("images/ice cream.png");
ManRunning1Img = loadAnimation("images/Man running 1.png","images/Man running 2.png","images/Man running 3.png");
saladImg = loadImage("images/salad.png");

}

function setup(){
  createCanvas(1900,900)
 
  man = createSprite(750,800);
  man.addAnimation("running", ManRunning1Img);

  apple = createSprite(750,550);
  apple.addImage("apple", appleImg);
  apple.scale = 0.10;
 
  banana = createSprite(850,650);
  banana.addImage("banana", bananaImg);
  banana.scale = 0.10;

  chocolate = createSprite(750,615);
  chocolate.addImage("chocolate", chocolateImg);
  chocolate.scale = 0.10;
 
  hamburger = createSprite(750,615);
  hamburger.addImage("hamburger", hamburgerImg);
  hamburger.scale = 0.10;
 
}

function draw(){
  background(backgroundImg);
 
  
drawSprites()

}
