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
        //press or hold the left arrow to move left
        if (game.input.keyboard.isHeld(ex.Input.Keys.Left) || game.input.keyboard.wasPressed(ex.Input.Keys.Left)) {
            this.pos.y -= 20;
        }
        //press or hold the right arrow to move right
         if (game.input.keyboard.isHeld(ex.Input.Keys.Right) || game.input.keyboard.wasPressed(ex.Input.Keys.Right)) {
            this.pos.y += 20;
        }
    }
}