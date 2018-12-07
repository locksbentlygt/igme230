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
}


  