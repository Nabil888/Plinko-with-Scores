class Plinko{
    constructor(x,y){
        var options = {
            isStatic: true,
            //friction: 0.5,
            restitution: 0.5
        }
        this.body = Bodies.circle(x,y,10,options);
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill(255,255,225);
        stroke("gold");
        strokeWeight(1);
        ellipse(pos.x,pos.y,10,10);
    }
}