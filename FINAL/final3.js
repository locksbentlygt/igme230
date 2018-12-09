var Engine = Matter.Engine,
    //Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

    var engine; 
    var ground;
    var leftS;
    var rightS;
    var topS;
    var world;
    let circles = [];
    let rows = [];
    let goals= [];
    let box1;
    let box2;
    let box3;
    let choices = [];

    //let newC;
  
function setup(){
    
    createCanvas(400,700);
    
    engine = Engine.create();
    world= engine.world;
    strokeWeight(2);
    stroke(51);
    makeRows();
    ground = Bodies.rectangle(200, 725, 400, 50, { isStatic: true });
    leftS = Bodies.rectangle(-20, 350, 40, 700, { isStatic: true });
    rightS = Bodies.rectangle(420, 350, 40, 700, { isStatic: true });
    topS = new staticB(200,-20,420,40);
    //goalL = Bodies.rectangle(200, 600, 100, 50/2, {isStatic:true});
    //newC = new staticC(100,100,20);
    goals.push(box1 = new staticB(200,700,75,50),box2 = new staticB(165,700,10,100),box3 = new staticB(235,700,10,100));
    
    Engine.run(engine);
    //goal();
    World.add(engine.world, [ground,leftS,rightS]);
   
    
}

    
function mouseClicked(){
    
    //  choices =[(new Circ(mouseX,mouseY,15)),(new Boxy(mouseX,mouseY,15,15))];
    let R = random(0,1); 
    // circles.push([R]);
    if(R > 0.5 ){
    circles.push(new Circ(mouseX,mouseY,15));
    }else if (R < 0.5){
    circles.push(new Boxy(mouseX,mouseY,15,15));
    }
    console.log(circles.length);
    let gY = random(-1,1);
    let gX = random(-0.5,0.5);
    engine.world.gravity.y = gY;
    engine.world.gravity.x = gX;
   
    for(let i = 0; i < rows.length; i++){
     rows[i].colour();
    }
}


function draw(){
  
    background(255);
    topS.show();
    
    for(let k = 0; k < goals.length; k++){
        goals[k].show();
    }
     rect(rightS.position.x,rightS.position.y, 40, 700);
    for(i = 0; i < circles.length; i++){
        circles[i].show();
    }
    //rect(goalL.position.x,goalL.position.y, 100, 50/2);
    //newC.show();
    for(i = 0; i < rows.length; i++){
        rows[i].show();
    }

    for(let t = 0; t < circles.length; t++){
        Matter.Events.on(circles[t], 'collisionStart', function(e){
            console.log("collision");
        } );
    }

    // let r = rows.body.position.x;
    // let tick = 1;

    //  for(let r =0; r < 5; r++){
    //     rows.forEach(function(row){
    //        if(row.body.position.x > 10){ 
    //         row.body.position.x += r/20;
    //        }
    //         // if(row.body.position = 390){
    //         //     // row.body.position -= r;
    //         // }
    //     });
    // }
   
    
}



// function checkCol(){
//     circles.forEach(function(cir){
//         if (cir.body.position.x > 200 && cir.body.position.x < 235 && cir.body.position.y ==  680){
//             console.log("wim");
//         }
//     });

    
    
// }

function makeRows(){
    for(let i =0; i < 5; i++){
        for(let p = 0; p < 4; p++){
        rows.push(new rotStaticB(i*70+55,p* 150+100,40,40));
    
        }
    }

    for(let i =0; i < 4; i++){
        for(let p = 0; p < 3; p++){
        rows.push(new staticCR(i*70+85,p* 150+175,40));
       
        }
    }
    console.log(rows);
}