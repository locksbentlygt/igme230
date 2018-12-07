var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

    var engine; 
    var ground;
    var leftS;
    var rightS;
    var world;
    let circles = [];

function setup(){
    createCanvas(400,700);
    engine = Engine.create();
    world= engine.world;
    ground = Bodies.rectangle(200, 725, 400, 50, { isStatic: true });
    leftS = Bodies.rectangle(-20, 350, 40, 700, { isStatic: true });
    rightS = Bodies.rectangle(420, 350, 40, 700, { isStatic: true });;
    Engine.run(engine);
    World.add(engine.world, [ground,leftS,rightS]);
}

function mouseClicked(){
    circles.push(new Circ(mouseX,mouseY,30));
    console.log(circles.length);
}

function draw(){
    background(51);
     rect(rightS.position.x,rightS.position.y, 40, 700);
    for(i = 0; i < circles.length; i++){
        circles[i].show();
    }
    
}