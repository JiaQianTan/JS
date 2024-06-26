class introPage extends Phaser.Scene {

  constructor() {
      super({ key: 'introPage' });
  }

  init(){
  this.sound.stopAll();
  }
  
  preload() {
      // Images
      this.load.audio("bgmusic", "asses/bgmusic.mp3");
      this.load.image("introimg", "asses/introPage.jpg");

  }

  create() {
     this.bgmusic = this.sound.add("bgmusic",{loop: true})
     this.bgmusic.play();

      const instructionImg = this.add.image(0, 0, 'introimg');


      // Calculate scale factors
      const scaleX = this.game.config.width / instructionImg.width;
      const scaleY = this.game.config.height / instructionImg.height;

      // Set the scale to fit the image to the game scene
      instructionImg.setScale(scaleX, scaleY);

      instructionImg.setOrigin(0.5);
      instructionImg.setPosition(this.game.config.width / 2, this.game.config.height / 2);
      console.log("This is preloadScene spacebar");

      // Capture spacebar input to proceed to level1
      var spaceDown = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      this.input.keyboard.on('keydown-SPACE', function(event) {
          console.log("Spacebar pressed, go to storyLine");
          this.scene.start("storyLine");
      }, this);
  }
}