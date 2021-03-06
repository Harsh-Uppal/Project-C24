class dustbin{
    constructor(x,y,scale){
        this.scale = scale;
        this.box1 = Bodies.rectangle(x-20,y-scale*2,scale*3,scale*10,{isStatic:true});
        this.box2 = Bodies.rectangle(x+20,y-scale*2,scale*3,scale*10,{isStatic:true});
        this.box3 = Bodies.rectangle(x,y+scale*1,scale*15,scale*3,{isStatic:true});

        World.add(world,this.box1);
        World.add(world,this.box3);
        World.add(world,this.box2);

        this.image = loadImage("red.bmp");
    }

    display(){
        push();
        translate(this.box1.position.x, this.box1.position.y);
        rotate(this.box1.angle);
        imageMode(CENTER);
        image(this.image,this.box1.position.x,this.box1.position.y,this.scale*3,this.scale*10);
        pop();

        push();
        translate(this.box2.position.x, this.box2.position.y);
        rotate(this.box2.angle);
        imageMode(CENTER);
        image(this.image,this.box2.position.x,this.box2.position.y,this.scale*3,this.scale*10);
        pop();

        push();
        translate(this.box3.position.x, this.box3.position.y);
        rotate(this.box3.angle);
        imageMode(CENTER);
        image(this.image,this.box3.position.x,this.box3.position.y,this.scale*15,this.scale*3);
        pop();
    }
}