class Paper {
    constructor(x,y,radius) {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x = x;
        this.y = y;
        this.radius=radius;
        this.image = loadImage("paper_image.png");
        this.body=Bodies.circle(this.x,this.y,(this.radius-10)/2,options);

        World.add(world,this.body);
        
    }
    display() {
        var paperpos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(paperpos.x,paperpos.y);
       /* rectMode(CENTER);
        strokeWeight(3);
        fill("pink");*/
        imageMode(CENTER);
        image(this.image,0,0,this.radius,this.radius);
        //ellipse(0,0,this.radius,this.radius);
        pop();
    }
}
