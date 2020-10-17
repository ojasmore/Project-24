class Ball {

    constructor(x,y,radius) {
      
      var options = {
          'isStatic' : false,
          'restitution' : 0.3,
          'friction' : 0.8,
          'density' : 3.0
      }
      this.x = x;
      this.y = y;
      this.radius = radius;

      this.body = Bodies.circle(this.x,this.y,this.radius/2,options);
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("green");
      ellipse(pos.x, pos.y, this.radius,this.radius);

    }
  }