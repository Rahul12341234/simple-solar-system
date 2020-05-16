class planet{
    constructor(x, y, radius, angle) {

        this.body = Bodies.circle(x, y, radius);
        this.radius = radius
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.position
        var angle = this.body.angle;
        push();
        rotate(angle);
        circle(pos.x, pos.y, this.radius);
        pop();
      }
}