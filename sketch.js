//Create variables here
var dog, happyDog, database, foodS, foodStock;
var Dog;
var database;
var dbref;
function preload()
{
  //load images here
  dog=loadImage("images/dogimg.png");
 happyDog =loadImage("images/dogimg1.png")
}

function setup() {
	createCanvas(500, 500);
  database=firebase.database();
  Dog=createSprite(250,390,20,20);
  Dog.addImage(dog);
  Dog.scale=0.3;
  foodStock=database.ref("food");
  foodStock.on("value",readstok);
}


function draw() {  
background(46, 139, 87);
  drawSprites();
  //add styles here

 if(keyWentDown(UP_ARROW)){
   Dog.addImage(happyDog);
 }

  
}

function readStok(data){
  foodS=data.val();
}

function writeStock(x){

  if(x<=0){
x=0;
  }else{
    x=x-1;
  }
  
  database.ref("/").updaate({

    Food:x
  })
}

