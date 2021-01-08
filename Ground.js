class Ground{
    constructor(x,y,w,h){
        var options = {
            isStatic: true
            //friction: 0.4
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
        this.w = w;
        this.h = h;
    }

    display(){
        var body = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(body.x,body.y,this.w,this.h);

    }
}