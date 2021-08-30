var s1;
function setup() {
  createCanvas(400,400);
  s1 = new Student("John", 13, 8);
}

function draw() 
{
  background(30);
  s1.show();
}