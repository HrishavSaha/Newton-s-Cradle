class Bob{
    constructor(x,y,radius){
        var variable_options={
            'restitution':1.33,
            'density': 1
        }
        this.body=Bodies.circle(x,y,radius,variable_options);
        this.radius = radius;
        World.add(world,this.body);
        console.log(this.body);
    }
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        var radius = this.body.radius;
        
        push();
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,radius,radius);
        pop();
    }
}