class Ballz extends ex.Actor {
    constructor() {
        //super invokes the ex.Actor class that Ballz extends
        super(100, 300, 20, 20, config.color);

        //switching the default collision type from PreventCollision to Elastic
        //NOTE: According to the documentation, Elastic will be deprecated soon, 
        //the physics for this will be incorporated into a different part of Excalibur
        this.collisionType = ex.CollisionType.Elastic;

        //setting the initial velocity in the x and y directions
        this.vel.setTo(100,100);

        this.on('exitviewport', () => {
            //when the ball leaves the bottom of the screen
                alert('You lose!');
        });
    }

    //overriding the built in update method
    public update(game, delta) {
        //updating ex.Actor
        super.update(game, delta);

        //checking to see the position of the ball, it will bounce off all edges except the bottom edge
        // when the ball leaves the page you loose

        // If the ball collides with the top or bottom of the screen 
        // and the velocity is on the spectrum then reverse it and 
        // increase by 25%, other wise simply reverse it

        if (this.pos.y < 5 || this.pos.y > 555) {
            if(this.vel.y < 250 && this.vel.y > -250) {
                this.vel.y *= -1.25;
            } else {
                this.vel.y *= -1;
            }        
        }
    }

    // draw overrides the built in method of draw, allowing for custom options
    // the reason the ball is circle and not a square
    public draw(ctx: CanvasRenderingContext2D, delta) {
        // Custom draw code
        ctx.fillStyle = this.color.toString();
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 10, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
}