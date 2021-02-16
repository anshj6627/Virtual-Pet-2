var dog, happyDog;
var database
var foodS,foodStock;
var inputButton,inputButton1;
var fedTime,lastFed;
var foodObjl;
var feedDog,addFoods;
function preload()
{
dog1=loadImage("images/dogimg.png");
happyDog1=loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(800, 700);
  database=firebase.database();
  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  feed=createButton("Feed the dog");
  feed.position(700,95);
  feed.mousePressed(feedDog);
addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);
}


function draw() {  
  background(46, 139, 87);

fedTime=database.red('FeedTime');
fedTime.on("value",function(data){
  lastFed=data.val();
});

  text("Food remaining: ",foodStock,400,350);
  textSize(20);
  fill("red");
  stroke(5);
  drawSprites();

}
function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    Food:x
  })
 
}

function add(){
if(addFood.mousePressed){
  foodStock.update(1);
}
}