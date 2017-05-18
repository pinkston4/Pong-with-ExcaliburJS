/// <reference path="../bower_components/excalibur/dist/excalibur.d.ts" />
/// <reference path="config.ts" />
/// <reference path="ball.ts" />
/// <reference path="paddle.ts" />
/// <reference path="npc.ts" />

var game = new ex.Engine({
    width: 800,
    height: 600,
});


game.start().then( () => {
    var ball = new Ballz();
    var npc = new Npc();
    var player = new Player();

    game.add(ball);
    game.add(npc);
    game.add(player);
});