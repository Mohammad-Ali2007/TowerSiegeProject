function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
  //}
}


function mouseReleased(){
  slingshot.fly();
  gameState = "launched";
}
