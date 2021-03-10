class Player {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':0.04,
          'density':1
      }
      this.image=loadImage("images/playerStanding.png")
      this.body = Bodies.rectangle(x, y, 40,80, options);
      this.width = 40;
      this.height = 100;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER)
      image(this.image,0,0,this.width,this.height)
      pop();
    }
  };
  