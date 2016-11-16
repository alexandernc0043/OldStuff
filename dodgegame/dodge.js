var C = {
  "game": {
    "width": 320,
    "height": 568,
  },
  "bg": {
  "width": 320,
  "height": 568,
  "xspeed": 0,
  "yspeed": 0,
  "file": "assets/background.jpg"
    },
    "p": {
      "file": "assets/player.png",
      "width": 128,
      "height": 128,
      "frames": 4,
      "fps": 4,
      "startx": 160,
      "starty": 500
},
    "d": {
      "file": "assets/dodgeme.jpg",
      "width": 64,
      "height": 64,
      "frames": 1,
      "fps":1,
      "startx": 160,
      "starty": 500,
        },
      }


class Boot {
  preload() {
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
  }
  create() {
    this.state.start("Load")
  }
}
class Load {
  preload() {
    console.log("Loading...");
    this.load.image("bg",C.bg.file);
    this.load.spritesheet("player",C.p.file,C.p.width,C.p.height,C.p.fps);
    this.load.image("dodge",C.d.file,C.d.width,C.d.height,C.d.frames);
  }

  create() {
    console.log("Loaded");
    this.state.start("Play");
  }
}

class Play {
  create() {
    console.log("Entered Play");
    //this.bg = this.add.tileSprite(0,0,C.bg.width,C.bg.height,"bg");
    this.background = this.add.tileSprite(0,0,C.bg.width,C.bg.height,"bg");
    this.background.autoScroll(C.bg.xspeed,C.bg.yspeed);
    this.player = this.add.sprite(C.p.startx,C.p.starty,"player"); 
    this.player.anchor.set(0.5,0.5);
    this.player.smoothed = false;
    this.player.scale.set(0.5);
    this.player.animations.add("anim");
    this.player.animations.play("anim",C.p.fps,true);
  }
}
function restart() {
  game.state.start("Boot");
}
var game = new Phaser.Game(C.game.width,C.game.height);
game.state.add("Boot",Boot);
game.state.add("Load", Load);
game.state.add("Play", Play);
game.state.start("Boot");
