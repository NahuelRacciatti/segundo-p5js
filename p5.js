var coloreo = 15
function setup() {
  createCanvas(600, 800);
}

function draw() {
  background(47, 83, 34);
  if (mouseIsPressed) {
    if(mouseButton == LEFT){
    stroke(random(255), random(255), random(255));
    strokeWeight(coloreo);
    line(mouseX, mouseY, pmouseX, pmouseY);
  } else if(mouseButton == RIGHT){
    stroke(random(255));
    strokeWeight(5);
  } else{
    noStroke();
  }
  }

  
  // figuras negras 1
  fill(1);
  quad(59, 280, 220, 122, 500, 800, 193, 800);
  rect(0, 750, 600, 800);
  rect(86, 654, 180, 200);
  
  // quad grises
  fill(159, 160, 157);
  quad(35, 356, 599, 20, 470, 384, 24, 609);
  quad(75, 672, 144, 508, 144, 619, 154, 633);
  
  // triangulo medio blanco
/*fill("#F1E8E8")
triangle(166, 309, 155, 527, 317, 390)*/
  
  // quad azul
  fill("#0F1275");
  quad(93, 683, 71, 750, 500, 746, 517, 436);
  
  // triangulo negro
  fill(0);
  triangle(59, 283, 198, 760, 176, 168);
  
  // figuras amarillas
  fill(255, 228, 16);
  triangle(32, 740, 164, 581, 90, 392);
  quad(196, 641, 204, 743, 500, 749, 385, 554);
  triangle(148, 263, 222, 145, 76, 164);
  triangle(295, 32, 313, 385, 379, 150);
  
  // figuras anaranjadas
  fill("#E77908");
  quad(90, 392, 117, 459, 190, 300, 133, 292);
  triangle(133, 292, 208, 134, 314, 387);
  triangle(44, 749, 192, 748, 167, 646);
  triangle(400, 55, 312, 390, 355, 365);
  
  // triangulos grises
  fill(4);
  triangle(43, 749, 191, 749, 200, 800);
  triangle(205, 748, 498, 749, 200, 800);

  //Triangulo blanco
  fill("#F1F1F1");
  triangle(166, 309, 155, 527, 317, 390);
}