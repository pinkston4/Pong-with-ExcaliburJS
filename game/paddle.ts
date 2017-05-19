class Player extends ex.Actor {
    constructor() {
        //super invokes the ex.Actor class that Player extends
        super(config.playerPaddleX, config.paddleY, config.paddleWidth, config.paddleHeight, config.color);

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
        //press or hold the left arrow to move up
        if (game.input.keyboard.isHeld(ex.Input.Keys.Left) || game.input.keyboard.wasPressed(ex.Input.Keys.Left)) {
            if (this.pos.y > config.paddleHeight/2 ) {
                this.pos.y -= 10;
            }
        }
        //press or hold the right arrow to move down
         if (game.input.keyboard.isHeld(ex.Input.Keys.Right) || game.input.keyboard.wasPressed(ex.Input.Keys.Right)) {
             if (this.pos.y < config.gameHeight - config.paddleHeight/2) {
                this.pos.y += 10;
             }
        }
    }
}