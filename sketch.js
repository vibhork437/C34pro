var dog, happyDog  
var database, foodS;
var foodStock,readStock;
var img,img2
var Dog

function preload(){
  
  //load images here
  img = loadImage("Dog.png");
  img2 = loadImage("happydog.png");
}

function setup() {
 database = firebase.database();
  createCanvas(800, 700);
  Dog = createSprite(420, 320, 40, 40);
  Dog.addImage(img);
  img.resize(200, 200);
  foodStock = database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
  background(46, 139, 87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(img2);
  }

  
    
  
  drawSprites();
  //add styles here
text(foodS,390,500);
text("Press up arrow key to feed Drago milk",200,200);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x<=0){
    x = 0;

  }else{
    x = x-1;
  }

  database.ref('/').update({
    food:x
  })

}

