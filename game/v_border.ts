class VBorder extends ex.Actor {

    constructor(x:number, y:number, width:number, height:number, color:any) {
        super(x, y, width, height, color);
        this.collisionType = ex.CollisionType.Passive;
    }
}