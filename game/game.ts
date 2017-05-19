/// <reference path="../bower_components/excalibur/dist/excalibur.d.ts" />
/// <reference path="config.ts" />
/// <reference path="ball.ts" />
/// <reference path="paddle.ts" />
/// <reference path="npc.ts" />
/// <reference path="h_border.ts" />
/// <reference path="v_border.ts" />

var game = new ex.Engine({
    width: config.gameWidth,
    height: config.gameHeight,
});

//the ball
var ball = new Ballz();

//the paddls
var npc = new Npc();
var player = new Player();

//the court
var net = new ex.Actor(game.getDrawWidth()/2, game.getDrawHeight()/2, 2, 450, config.color);
var leftBorder = new VBorder(config.leftBorderX, config.vY, config.thickness, config.vHeight, config.color);
var topBorder = new HBorder(config.hX, config.topBorderY, config.hWidth, config.thickness, config.color);
var rightBorder = new VBorder(config.rightBorderX, config.vY, config.thickness, config.vHeight, config.color);
var bottomBorder = new HBorder(config.hX, config.bottomBorderY, config.hWidth, config.thickness, config.color);



// the game
game.start().then( () => {

    game.add(leftBorder);
    game.add(topBorder);
    game.add(rightBorder);
    game.add(bottomBorder);
    game.add(net);
    game.add(npc);
    game.add(player);
    game.add(ball);

});