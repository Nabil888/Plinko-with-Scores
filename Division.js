class Divisions{
    constructor(x,y,w,h){
        var options = {
            isStatic:true
            //friction: 0.5
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("skyblue");
        noStroke();
        rect(pos.x,pos.y,this.w,this.h);
    }
}