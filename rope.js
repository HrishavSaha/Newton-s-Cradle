class Rope{
    constructor(a,b,offX,offY){
        this.offsetX = offX;
        this.offsetY = offY;
        this.pointB = b.position;
        var options = {
            bodyA:a,
            bodyB:b,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness:0.01,
            lenght:10
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        line(pointA.x,pointA.y+this.offsetY,pointB.x+this.offsetX,pointB.y);
    }
}