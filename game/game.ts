/// <reference path="../bower_components/excalibur/dist/excalibur.d.ts" />
/// <reference path="config.ts" />
/// <reference path="ball.ts" />
/// <reference path="paddle.ts" />
/// <reference path="npc.ts" />
/// <reference path="border.ts" />
/// <reference path="menu.ts" />

var game = new ex.Engine({
    width: config.gameWidth,
    height: config.gameHeight,
    canvasElementId: 'gameCanvas',
    pointerScope: ex.Input.PointerScope.Canvas
});

var loader = new ex.Loader();

var resources = {
    title: new ex.Texture('../resources/title.png'),
    clickPlay: new ex.Texture('../resources/play.png'),
    lose: new ex.Texture('../resources/lose.png'),
    win: new ex.Texture('../resources/win.png')
}

for (var r in resources) {
  loader.addResource(resources[r]);
}

var ball = new Ballz();
//the paddls
var npc = new Npc();
var player = new Player();

//the court
var net = new ex.Actor(config.gameWidth/2, config.gameHeight/2, config.thickness, config.gameHeight, config.color);
var leftBorder = new Border(config.leftBorderX, config.vY, config.thickness, config.vHeight, config.color, ex.CollisionType.Passive);
var topBorder = new Border(config.hX, config.topBorderY, config.hWidth, config.thickness, config.color, ex.CollisionType.Fixed);
var rightBorder = new Border(config.rightBorderX, config.vY, config.thickness, config.vHeight, config.color, ex.CollisionType.Passive);
var bottomBorder = new Border(config.hX, config.bottomBorderY, config.hWidth, config.thickness, config.color, ex.CollisionType.Fixed);

var gameScene = new ex.Scene();
gameScene.add(net);
gameScene.add(leftBorder);
gameScene.add(topBorder);
gameScene.add(rightBorder);
gameScene.add(bottomBorder);
gameScene.add(npc);
gameScene.add(player);
gameScene.add(ball);

var menuScene = new MainMenu();

var loseIcon = new ex.Actor(300, 225, 300, 225);
loseIcon.addDrawing(resources.lose);

var loseScene= new ex.Scene();
loseScene.add(loseIcon);

var winIcon = new ex.Actor(300, 225, 300, 225);
winIcon.addDrawing(resources.win);

var winScene= new ex.Scene();
winScene.add(winIcon);


// the game
game.start(loader).then( () => {

    game.add('theGame', gameScene);
    game.add('main', menuScene);
    game.add('youLose', loseScene);
    game.add('youWin', winScene);

    game.goToScene('main');

    ball.on('collision', (ev: ex.CollisionEvent ) => {
        if(ev.other == leftBorder) {
            game.goToScene('youWin');
        }
        if(ev.other == rightBorder) {
            game.goToScene('youLose');
        }
    });

});