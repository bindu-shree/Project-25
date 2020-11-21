class Paper
{
    constructor(x,y,r,options)
    {
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
      this.x=x;
      this.y=y;
      this.body=Bodies.circle(x,y,r/2,options)  
      World.add(world,this.body);
      this.image=loadImage("paper.png")
    }
    display()
    {
        var pos=this.body.position;
        push()
        translate(pos.x,pos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill(255,255,255);
        ellipse(0,0,this.r,this.r);
        imageMode(CENTER)
      image(this.image, 0, 0, this.width, this.height,this.r);
        pop()

    }
}

  