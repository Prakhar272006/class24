class box{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{restitution:0.5,friction:0.3,density:1})
        this.w = w
        this.h = h
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        stroke("green")
        fill ("white")
        rect(0,0,this.w,this.h)
        pop();

    }
    
    }
    