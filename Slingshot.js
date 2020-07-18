class SlingShot{
    constructor(bodyA, pointB,){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
            
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        this.sling1=    loadImage("sprites/sling1.png");
        this.sling2= loadImage("sprites/sling2.png");
        this.sling3= loadImage("sprites/sling3.png");
        World.add(world, this.sling);

    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
           stroke(48, 22, 8) ;     
            strokeWeight(7);
           
           // /line(pointA.x, pointA.y, pointB.x, pointB.y);
line(pointA.x-20,pointA.y,pointB.x-28,pointB.y);
line(pointA.x+22,pointA.y,pointB.x+28,pointB.y);
image(this.sling3,pointA.x-20,pointA.y,10,20);
                                                            
        }
        image(this.sling1,180,80,50,140);
        image(this.sling2,146,80,50,80);
    }
    
}