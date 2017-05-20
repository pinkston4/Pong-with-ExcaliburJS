class Border extends ex.Actor {

    constructor(x:number, y:number, width:number, height:number, color:any, ct: ex.CollisionType) {
        super(x, y, width, height, color);
        this.collisionType = ct;
    }
}