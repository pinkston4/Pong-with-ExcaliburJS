class MainMenu extends ex.Scene {
  // start-up logic, called once
  private title: ex.Actor = new ex.Actor(0, 0, 300, 225);
  private clickPlay: ex.Actor = new ex.Actor(0, 180, 200, 15);

  constructor() {
      super();
    }

    public onInitialize() {
        this.title.addDrawing(resources.title);
        this.clickPlay.addDrawing(resources.clickPlay)
        this.add(this.title)
        this.add(this.clickPlay)
    }

    public onActivate() {
        game.input.pointers.primary.on('down', function (evt) {
            game.goToScene('theGame');
        });
    }
}