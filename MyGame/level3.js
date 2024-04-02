class level3 extends Phaser.Scene {
  constructor() {
    super({ key: "level3" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world3", "asses/myMap3.tmj");

    // Step 2 : Preload any images here
    this.load.image("floor", "asses/tree.png");
    this.load.image("tree2", "asses/tree2.png");
    this.load.image("tree3", "asses/tree3.png");
    this.load.image("heart1", "asses/heart.png"); 
    this.load.image("heart2", "asses/heart.png"); 
    this.load.image("heart3", "asses/heart.png"); 

    // Use spritesheet for the girl
    this.load.spritesheet("boy", "asses/boy.png", {
      frameWidth: 64,
      frameHeight: 64,
   });
   this.load.spritesheet("enemy1", "asses/enemy.png", {
    frameWidth: 64,
    frameHeight: 64,
   });
   this.load.spritesheet("milkTea2", "asses/milkTea2.png", {
    frameWidth: 64,
    frameHeight: 64,
   });
   
}
   // end of preload //

   create (){

    console.log("level3")

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world3" });

    // Step 4 Load the game tiles
    //1st parameter is name in Tiled,
    //2nd parameter is key in Preload
    let floorTiles = map.addTilesetImage("floor", "floor");
    let tree2Tiles = map.addTilesetImage("tree2", "tree2");
    let tree3Tiles = map.addTilesetImage("tree3", "tree3");
    

    //Step 5  create an array of tiles
    let tilesArray = [floorTiles, tree2Tiles, tree3Tiles];

    // Step 6  Load in layers by layers

    this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
    this.walkLayer = map.createLayer("walkLayer", tilesArray, 0, 0);
    this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
    this.treeLayer = map.createLayer("treeLayer", tilesArray, 0, 0);
    this.tree2Layer = map.createLayer("tree2Layer", tilesArray, 0, 0);
    this.lampLayer = map.createLayer("lampLayer", tilesArray, 0, 0);
    this.tree3Layer = map.createLayer("tree3Layer", tilesArray, 0, 0);

    this.physics.world.bounds.width = this.floorLayer.width;
    this.physics.world.bounds.height = this.floorLayer.height;

    this.anims.create({
      key: "boy-up",
      frames: this.anims.generateFrameNumbers("boy", { 
        start: 105, 
        end: 112 
      }),
      frameRate: 5,
      repeat: -1,
    });
    
    this.anims.create({
      key: "boy-left",
      frames: this.anims.generateFrameNumbers("boy", {
        start: 118,
        end: 125,
      }),
      frameRate: 5,
      repeat: -1,
    });
    
    this.anims.create({
      key: "boy-down",
      frames: this.anims.generateFrameNumbers("boy", {
        start: 131,
        end: 138,
      }),
      frameRate: 5,
      repeat: -1,
    });
    
    this.anims.create({
      key: "boy-right",
      frames: this.anims.generateFrameNumbers("boy", {
        start: 144,
        end: 151,
      }),
      frameRate: 5,
      repeat: -1,
    });

  
    this.player = this.physics.add
    .sprite(427, 714, "boy")
    .play("boy-up");
    window.player = this.player;
    this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7);
    this.player.setCollideWorldBounds(true)

   
    this.object1 = this.add.image(415.45,294.51,'milkTea2')

   //var start = map.findObject("objectLayer",obj.name === "start");
  //var end = map.findObject("objectLayer",obj.name === "end");
  //load drone objects

  let milkTea = map.findObject("objectLayer", (obj) => obj.name === "item")
  let enemy1 = map.findObject("objectLayer", (obj) => obj.name === "enemy1")
  this.milkTea = this.physics.add.sprite(415.45,294.51,'milkTea2')
  this.enemy1 = this.physics.add.sprite(244, 398, "enemy1");
  this.enemy2 = this.physics.add.sprite(574, 523, "enemy1");
  this.enemy3 = this.physics.add.sprite(268, 655, "enemy1");

  // in create, add tweens  
  this.tweens.add({
  targets: this.enemy1,
  x: 600,
  yoyo: true,
  duration: 2500,
  repeat: -1
  })
  this.tweens.add({
  targets: this.enemy2,
  x: 300,
  yoyo: true,
  duration: 2500,
  repeat: -1
  })
  this.tweens.add({
    targets: this.enemy3,
    x: 550,
    yoyo: true,
    duration: 2500,
    repeat: -1
    })

    this.heart1 = this.add.sprite(477, 23, "heart1");
    this.heart1.setDepth(1); // Set the depth to 1 (or higher if needed) to render it on top

    this.heart2 = this.add.sprite(515, 23, "heart2");
    this.heart2.setDepth(1); // Set the depth to 1 (or higher if needed) to render it on top
  
    this.heart3 = this.add.sprite(552, 23, "heart3");
    this.heart3.setDepth(1);

   // When object overlap with player, call the this.collectFire function
    this.physics.add.overlap(this.player,this.enemy1,this.hitEnemy1,null,this);
    this.physics.add.overlap(this.player,this.enemy2,this.hitEnemy2,null,this);
    this.physics.add.overlap(this.player,this.enemy3,this.hitEnemy3,null,this);
    this.physics.add.overlap(this.player,this.milkTea,this.hitmilkTea,null,this);
    
    
 //create the arrow keys
  this.cursors = this.input.keyboard.createCursorKeys();
// make the camera follow the player
    var gameOverDown = this.input.keyboard.addKey(51);

    gameOverDown.on('down', function(){
        console.log("go to gameOver");
            this.scene.start("gameOver");
        }, this );


    //Add main player here with physics.add.sprite

    //Add time event / movement here

    // get the tileIndex number in json, +1
    // mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool
    this.wallLayer.setCollisionByExclusion(-1, true);
    this.tree2Layer.setCollisionByExclusion(-1, true);
    this.tree3Layer.setCollisionByExclusion(-1, true);
    this.lampLayer.setCollisionByExclusion(-1, true);

    //What will collider witg what layers
    // this.physics.add.collider(mapLayer, this.player);
    this.physics.add.collider(this.player, this.wallLayer);
    this.physics.add.collider(this.player, this.tree2Layer);
    this.physics.add.collider(this.player, this.tree3Layer);
    this.physics.add.collider(this.player, this.lampLayer);

    //create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    // this.cursors = this.input.keyboard.createCursorKeys();

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);
   
  } // end of create //

 

  update () {
    const camera = this.cameras.main;
    const heart1X = camera.scrollX + camera.width - 30;
    const heart1Y = camera.scrollY + 35;
    this.heart1.setPosition(heart1X, heart1Y);  
  
    const heart2X = camera.scrollX + camera.width - 70;
    const heart2Y = camera.scrollY + 35;
    this.heart2.setPosition(heart2X, heart2Y);  
  
    const heart3X = camera.scrollX + camera.width - 110;
    const heart3Y = camera.scrollY + 35;
    this.heart3.setPosition(heart3X, heart3Y);  

    if (this.player.x > 784 && 
      this.player.y > 374 && 
      this.player.y < 457) {
      console.log("Door5");
      this.room1();
    }

    if (this.cursors.left.isDown) {
      this.player.setVelocityX(-160);
      this.player.anims.play("boy-left", true);
    } else if (this.cursors.right.isDown) {
      this.player.setVelocityX(160);
      this.player.anims.play("boy-right", true);
    } else if (this.cursors.up.isDown) {
      this.player.setVelocityY(-160);
      this.player.anims.play("boy-up", true);
    } else if (this.cursors.down.isDown) {
      this.player.setVelocityY(160);
      this.player.anims.play("boy-down", true);
    } else {
      this.player.setVelocity(0);
      this.player.anims.stop();
    }

  }
    // outside of update()

    hitmilkTea(player, item) {
      console.log("player hit milkTea")
      this.cameras.main.shake(200);
      item.disableBody(true, true)
      return false
    }
    hitEnemy1(player, item) {
      console.log("player hit enemy1")
      this.cameras.main.shake(200);
      item.disableBody(true, true)
      return false
    }
    hitEnemy2(player, item) {
      console.log("player hit enemy2")
      this.cameras.main.shake(200);
      item.disableBody(true, true)
      return false
    }
    hitEnemy3(player, item) {
      console.log("player hit enemy3")
      this.cameras.main.shake(200);
      item.disableBody(true, true)
      return false
    }

// Function to jump to room1
room1(player, tile) {
  console.log("room1 function");
  this.scene.start("gameOver");
}
}
   // outside of update()

  // Function to jump to room1

 // end of update //

