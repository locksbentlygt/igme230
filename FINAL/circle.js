function Circ(x, y, r){
    // this.x = x;
    // this.y = y;
    // this.r = r;
    this.body = Bodies.circle(x, y, r/2);
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