class Npc extends ex.Actor {

 

    constructor() {
        //super invokes the ex.Actor class that Player extends
        super(config.npcPaddleX, config.paddleY, config.paddleWidth, config.paddleHeight, config.color);

        //switching the collision type from the default PreventCollision option
        // to the Fixed option, an actor with the Fixed CollisionType will cause other actors to 
        // react when it colides with them, but it will not be altered 
        // is considered "immovable/unstoppable" 
        this.collisionType = ex.CollisionType.Fixed;
    }    

    //Overrides the excalibur Actor, update method
    public update(game, delta) {
        //updating the base update logic
        super.update(game, delta);
        //custom update logic
        if (ball.vel.x < 0 ) {
            if (this.pos.y < ball.yDestination && ball.yDestination < 480 && this.pos.y < 450) {
                this.pos.y += 10;
            } 
            if (this.pos.y > ball.yDestination && ball.yDestination > -30 && this.pos.y > 0) {
                this.pos.y -= 10;
            }
        }
    }
}