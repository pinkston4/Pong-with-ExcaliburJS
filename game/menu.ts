class MainMenu extends ex.Scene {
  // start-up logic, called once
  constructor() {
      super();
      game.input.pointers.primary.on('down', function (evt) {
        game.goToScene('theGame');
        });
    }
}