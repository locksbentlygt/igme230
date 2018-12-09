//make a matter.js rectangle and and have it be rendered by p5.js 
function Boxy(x, y, w, h){
    this.body = Bodies.rectangle(x, y, w, h);
    World.add(engine.world, [this.body]);

    //draws a rectangle of the same size and position as the one made by Bodies.rectangle 
    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, w, h);
        pop()
    }

    this.colour = function() {
        randR = random(0,100);
        randG = random(0,150);
        randB = random(0,255);
        this.col = (color(randR,randG,randB));
        // console.log(randR,randG,randB);
        // noStroke();
        fill(this.col);
    }
}
// make a static matter.js rectangle (it wont move from the initial place its spawned)
function staticB(x, y, w, h, col){
    this.col = col;
    this.body = Bodies.rectangle(x, y, w, h,{isStatic:true});
    World.add(engine.world, [this.body]);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;
        noStroke();
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, w, h);
        pop()
    }
    
    this.colour = function() {
        randR = random(0,100);
        randG = random(0,150);
        randB = random(0,255);
        this.col = (color(randR,randG,randB));
        // console.log(randR,randG,randB);
        // noStroke();
        fill(this.col);
    }
}

function rotStaticB(x, y, w, h, col){
    this.col = col;
    this.body = Bodies.rectangle(x, y, w, h,{isStatic:true});
    World.add(engine.world, [this.body]);

    this.show = function(){
        var pos = this.body.position;
        for(let t = 0; t < 20; t++){
        var angle = t;
        }
        noStroke();
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        rect(0,0, w, h);
        pop()
    }
    
    //var py = 300 + 100 * Math.sin(engine.timing.timestamp * 0.002);
    //Matter.Body.setVelocity(this.body,10);
    Matter.Body.setAngularVelocity(this.body, 1);
    //Matter.Body.setPosition(this.body, { x: 600, y: py });
    //Matter.Body.rotate(this.body, 1);

    this.colour = function() {
        randR = random(0,100);
        randG = random(0,150);
        randB = random(0,255);
        this.col = (color(randR,randG,randB));
        // console.log(randR,randG,randB);
        // noStroke();
        fill(this.col);
    }
}