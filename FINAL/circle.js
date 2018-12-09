let randB;
let randG;
let randR;
let rand = [randR,randG,randB];
function Circ(x, y, r){
    // this.x = x;
    // this.y = y;
    // this.r = r;
    this.body = Bodies.circle(x, y, r/2, { friction: 0, restitution: 0.65});
     World.add(engine.world, [this.body]);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        // Push();
        
        ellipse(pos.x, pos.y, r);
        //  translate(pos.x,pos.y);
        // pop();
     
    }
}



    

function staticC(x, y, r){
    // this.x = x;
    // this.y = y;
    // this.r = r;
    // this.col = col;
    this.body = Bodies.circle(x, y, r/2, {isStatic:true, friction: 0, restitution: 0.5});
     World.add(engine.world, [this.body]);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        // Push();
        
        ellipse(pos.x, pos.y, r);
        //  translate(pos.x,pos.y);
        // pop();
    }

    // this.colour = function() {
    //     noStroke();
    //     fill(col);
    //   }
}

function staticCR(x, y, r,col){
    // this.x = x;
    // this.y = y;
    // this.r = r;
    this.col;
    this.body = Bodies.circle(x, y, r/2, {isStatic:true, friction: 0, restitution: 0.5});
     World.add(engine.world, [this.body]);

    this.show = function(){
        var pos = this.body.position;
        var angle = this.body.angle;

        // Push();
        
        ellipse(pos.x, pos.y, r);
        //  translate(pos.x,pos.y);
        // pop();
    }
    
    this.colour = function() {
        randR = random(0,100);
        randG = random(0,150);
        randB = random(0,255);
        this.col = (color(randR,randG,randB));
        // console.log(randR,randG,randB);
        noStroke();
        fill(this.col);
        
      }
}

  