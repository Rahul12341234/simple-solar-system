var sun, earth, collider, collider1, collider2, mars, neptune;

function setup() {
  createCanvas(800,800);
  sun = createSprite(400, 200, 50, 50);
  sun.shapeColor = "yellow";

  collider = createSprite(400, 200, 1, 1);
  collider.setCollider("circle", 0, 0, 100);
  collider.visible = false;

  collider1 = createSprite(400, 200, 1, 1);
  collider1.setCollider("circle", 0, 0, 150);
  collider1.visible = false;
  
  collider2 = createSprite(400, 200, 1, 1);
  collider2.setCollider("circle", 0, 0, 300);
  collider2.visible = false;

  earth = createSprite(300, 200, 10, 10);
  earth.shapeColor = "green";

  mars = createSprite(250, 200, 9, 9);
  mars.shapeColor = "red";

  neptune = createSprite(100, 200, 15, 15);
  neptune.shapeColor = "blue";
}

function draw() {
  background(0);
  
  gravity(earth, collider, 2);
  gravity(mars, collider1, 3);
  gravity(neptune, collider2, 5)
  
  sun.width = sun.width + 0.5;
  sun.height = sun.height + 0.5;

  drawSprites();
}

function gravity(object, co, speed){
  object.attractionPoint(1, sun.x, sun.y);
  object.collide(co);
 
  if (object.y === 200 && object.x < sun.x){
    object.velocityX = speed;
    object.velocityY = speed;
  }
  if (object.x === 400 && object.y > sun.y){
    object.velocityX = speed;
    object.velocityY = -speed;
  }
  if (object.y === 200 && object.x > sun.x){
    object.velocityX = -speed;
    object.velocityY = -speed;
  }
  if (object.x === 400 && object.y < sun.y){
    object.velocityX = -speed;
    object.velocityY = speed;
  }  

  if (object.isTouching(sun)){
    object.destroy();
  }
}