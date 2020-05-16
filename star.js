class star{
    constructor(x, y, radius) {

        this.body = Bodies.circle(x, y, radius, {isStatic: true});
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill(255,237,0)
        circle( 0, 0, this.radius);
        this.radius = this.radius + 1;    
        pop();
      }
}