class GameOver extends ex.Scene {
  // start-up logic, called once
  private clickPlay: ex.Actor = new ex.Actor(0, 180, 200, 15);
  constructor() {
      super();
    }

    public onInitialize() {
        this.clickPlay.addDrawing(resources.clickPlay);
        this.add(this.clickPlay)
    }

    public onActivate() {
        game.input.pointers.primary.on('down', function (evt) {
                location.reload(true);
            });
    }
}