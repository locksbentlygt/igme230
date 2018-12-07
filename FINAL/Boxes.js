function Boxy(x, y, w, h){
    this.body = Bodies.rectangle(x, y, w, h);
    World.add(engine.world, [this.body]);

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
}

function staticB(x, y, w, h){
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
    
}