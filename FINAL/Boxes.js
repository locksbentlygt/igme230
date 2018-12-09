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
}
// make a static matter.js rectangle (it wont move from the initial place its spawned)
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