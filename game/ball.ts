class Ballz extends ex.Actor {

    private xDestination: number = config.npcPaddleX;
    private ballY: number;
    private velY: number;
    private displacementX: number;
    private timeToPaddle: number;
    private displacementY: number;
    public yDestination: number;

    constructor() {
        //super invokes the ex.Actor class that Ballz extends
        super(100, 100, config.ballDimension, config.ballDimension, config.color);

        //switching the default collision type from PreventCollision to Elastic
        //NOTE: According to the documentation, Elastic will be deprecated soon, 
        //the physics for this will be incorporated into a different part of Excalibur
        this.collisionType = ex.CollisionType.Elastic;

        //setting the initial velocity in the x and y directions
        this.vel.setTo(100,100);

        this.on('collision', (ev: ex.CollisionEvent) => {
            if(ev.other == topBorder || ev.other == bottomBorder) {
                if(this.vel.y < 250 && this.vel.y > -250 && this.vel.x < 250 && this.vel.x > -250) {
                    this.vel.y *= 1.2;
                    this.vel.x *= 1.2;
                }
            } 
        });
    }

    public update(game, delta) {
        super.update(game, delta);
        this.displacementX = this.pos.x - this.xDestination;
        this.timeToPaddle = this.displacementX / this.vel.x;
        this.displacementY = this.timeToPaddle * this.vel.y;
        if (this.vel.y < 0) {
            this.yDestination = this.pos.y - this.displacementY;
        } else {
            this.yDestination = this.pos.y + this.displacementY;
        }
    }
    // draw overrides the built in method of draw, allowing for custom options
    // the reason the ball is circle and not a square
    public draw(ctx: CanvasRenderingContext2D, delta) {
        // Custom draw code
        ctx.fillStyle = this.color.toString();
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, 7.5, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }

    
}