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
      "starty": 500,
      "speed": 5
},
    "d": {
      "file": "assets/dodgeme.png",
      "width": 64,
      "height": 64,
      "frames": 6,
      "fps":6,
      "startx": 160,
      "starty": 32
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
    this.load.spritesheet("dodge",C.d.file,C.d.width,C.d.height,C.d.fps);
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

    this.dodge = this.add.sprite(C.d.startx,C.d.starty,"dodge");
    this.dodge.anchor.set(0.5,0.5);
    this.dodge.smoothed = false;
    this.dodge.scale.set(1);
    this.dodge.animations.add("anim");
    this.dodge.animations.play("anim",C.d.fps,true);
 
    this.cursors = this.input.keyboard.createCursorKeys();
  }
  update() {
    console.log("Play.update() called.");
    if (this.cursors.left.isDown) {
      this.player.x -= C.p.speed;
    }

  if (this.cursors.right.isDown) {
    this.player.x += C.p.speed;
    }
  }
  render() {
    game.debug.text("x: " + this.doge.x + ", y: " + this.doge.y, 4, 16);
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
