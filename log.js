class log{
    constructor(x,y,h,angle){
        this.body = Bodies.rectangle(x,y,20,h,{restitution:0.5,friction:1,density:1})
        this.w = 20
        this.h = h
        Matter.Body.setAngle(this.body,angle)
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
        fill ("brown")
        rect(0,0,this.w,this.h)
        pop();

    }
    
    }