class Boot {
  preload() {
    this.scale.scaleMode = Phaswer.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    this.state.start("Load")
  }
}
class Load {
  preLoad() {
    console.log("Loading...")
  }
  create() {
    console.log("Loaded");
  }
}
var game = new Phaser.Game(320,568);
game.state.add("Boot",Boot);
game.state.start("Boot");
