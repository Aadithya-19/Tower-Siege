class hitter {
    constructor(x,y,width,height) {
        var options = {
            isStatic: true
        }

        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
  
        // this.body = Bodies.rectangle(x,y,radius,options);
        // this.width = width;
        // this.height = height;
        this.image = loadImage("polygon_img.jpg");
        // World.add(world, this.body);
      }
      display(){
        push();      
        translate(this.x, this.y);
        imageMode(CENTER);
        image(this.image,0, 0, 50, 50);
        pop();
    }
    };
    
