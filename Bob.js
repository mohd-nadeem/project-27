class Bob {
    constructor(x, y) {
        var options = {
            isStatic: false,
            restituton: 0.3,
            friction: 0.5,
            density: 1
        }
        this.body = Bodies.circle(x, y, 25, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(0, 0, 25, 25);
        pop();
    }

}