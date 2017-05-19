/// <reference path="../bower_components/excalibur/dist/excalibur.d.ts" />
/// <reference path="config.ts" />
/// <reference path="ball.ts" />
/// <reference path="paddle.ts" />
/// <reference path="npc.ts" />
/// <reference path="h_border.ts" />
/// <reference path="v_border.ts" />
/// <reference path="menu.ts" />

var game = new ex.Engine({
    width: config.gameWidth,
    height: config.gameHeight,
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

var gameScene = new ex.Scene();
gameScene.add(net);
gameScene.add(leftBorder);
gameScene.add(topBorder);
gameScene.add(rightBorder);
gameScene.add(bottomBorder);
gameScene.add(npc);
gameScene.add(player);
gameScene.add(ball);


var menuTitle = new ex.Actor(300, 225, 300, 225);
menuTitle.addDrawing(resources.title);

var clickPlay = new ex.Actor(300, 435, 200, 15);
clickPlay.addDrawing(resources.clickPlay);

var menuScene = new MainMenu();
menuScene.add(menuTitle);
menuScene.add(clickPlay);

var loseIcon = new ex.Actor(300, 225, 300, 225);
loseIcon.addDrawing(resources.lose);

var loseScene= new ex.Scene();
loseScene.add(loseIcon);
loseScene.add(clickPlay);


var winIcon = new ex.Actor(300, 225, 300, 225);
winIcon.addDrawing(resources.win);

var winScene= new ex.Scene();
winScene.add(winIcon);
winScene.add(clickPlay)


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
            winScene.engine.input.pointers.primary.on('down', function (evt) {
                game.goToScene('theGame');
            });
        }
        if(ev.other == rightBorder) {
            game.goToScene('youLose');
            loseScene.engine.input.pointers.primary.on('down', function (evt) {
                game.goToScene('theGame');
            });
        }
    });

});