var scope,scopeImg;
var x = 60;
var score = 0;
var enemyGroup;
var e;
var enemynum = 1;

function preload(){
  scopeImg = loadImage("scope.png");

}

function setup(){
  createCanvas(1400,800);
  scope = createSprite(mouseX,mouseY,1,1);
  scope.addImage(scopeImg);
  scope.scale = 0.3;
  enemyGroup = new Group();
 
}

function draw(){
  background("red");
  scope.x = mouseX;
  scope.y = mouseY;
  if(score % 2000 === 0 && score > 0) {
    x = x-1;
  }
  enemies(x);
  drawSprites();

  if(enemyGroup.isTouching(scope)) {
    score = score+100;
    enemynum = enemynum + 1;
    e.remove();
  }

  textSize(20);
  text("score : " + score ,1300,50);

}

function enemies(y) {
  if(frameCount % y === 0) {
    e = createSprite(0,560,20,200);
    e.addAnimation("1.png","2.png","3.png","4.png","5.png");
    e.scale = 0.5;
    e.velocityX = 6;
    e.lifetime = 235;
    enemyGroup.add(e);

  }
  
}