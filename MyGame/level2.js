class level2 extends Phaser.Scene {
  constructor() {
    super({ key: "level2" });
  }

  preload() {
    // Step 1, load JSON
    this.load.tilemapTiledJSON("world2", "asses/myMap2.tmj");

    // Step 2 : Preload any images here
    this.load.image("floor", "asses/floor.jpg");
    this.load.image("rack2", "asses/rack2.jpg");
    this.load.image("wall2", "asses/wall2.jpg");
    this.load.image("jelly", "asses/jelly.png");
    this.load.image("ice", "asses/ice.png");
    this.load.image("orange", "asses/orange.png");
    this.load.image("grape", "asses/grape.png");
    this.load.image("lemon", "asses/lemon.png");
    this.load.image("cheery", "asses/cheery.png");
    // Use spritesheet for the girl
    this.load.spritesheet("boy", "asses/boy.png", {
      frameWidth: 64,
      frameHeight: 64,
   });
}
   // end of preload //

   create (){

    console.log("level2")

    //Step 3 - Create the map from main
    let map = this.make.tilemap({ key: "world2" });

    // Step 4 Load the game tiles
    //1st parameter is name in Tiled,
    //2nd parameter is key in Preload
    let groundTiles = map.addTilesetImage("floor", "floor");
    let rack2Tiles = map.addTilesetImage("rack2", "rack2");
    let wall2Tiles = map.addTilesetImage("wall2", "wall2")

    //Step 5  create an array of tiles
    let tilesArray = [groundTiles, rack2Tiles,wall2Tiles];

    // Step 6  Load in layers by layers

    this.floorLayer = map.createLayer("floorLayer", tilesArray, 0, 0);
    this.walkLayer = map.createLayer("walkLayer", tilesArray, 0, 0);
    this.rackLayer = map.createLayer("rackLayer", tilesArray, 0, 0);
    this.wall2Layer = map.createLayer("wall2Layer", tilesArray, 0, 0);

    this.physics.world.bounds.width = this.walkLayer.width;
    this.physics.world.bounds.height = this.walkLayer.height;

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
    .sprite(48, 297, "boy")
    .play("boy-right");
  window.player = this.player;
  this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7);

  var jellyy = map.findObject("objectLayer",(obj)=> obj.name === "item1")
  this.Object1 = this.add.image(77.53,428.52,'jelly')
  var icee = map.findObject("objectLayer",(obj)=> obj.name === "item2")
  this.Object2 = this.add.image(371.94,487.19,'ice')
  var orangee = map.findObject("objectLayer",(obj)=> obj.name === "item3")
  this.Object3 = this.add.image(235.74,104.77,'orange')
  var fruit = map.findObject("objectLayer",(obj)=> obj.name === "item4")
  this.Object4 = this.add.image(302.79,489.29,'grape')
  var fruit2 = map.findObject("objectLayer",(obj)=> obj.name === "item5")
  this.Object5 = this.add.image(108.96,557.39,'lemon')
  var fruit3 = map.findObject("objectLayer",(obj)=> obj.name === "item6")
  this.Object6 = this.add.image(435.85,136.20,'cheery')

  // When object overlap with player, call the this.collectFire function
  this.physics.add.overlap(this.player,this.object3,this.hitObject3,null,this);
  this.physics.add.overlap(this.player,this.object4,this.hitObject4,null,this);
  this.physics.add.overlap(this.player,this.object5,this.hitObject5,null,this);
  this.physics.add.overlap(this.player,this.object6,this.hitObject6,null,this);

  this.tweens.add({
    targets: this.Object1,
    y: 450,
    yoyo: true,
    duration: 1500,
    repeat: -1
    })
    this.tweens.add({
    targets: this.Object2,
    y: 500,
    yoyo: true,
    duration: 3500,
    repeat: -1
    })
   this.tweens.add({
    targets: this.Object3,
    y: 100,
    yoyo: true,
    duration: 1500,
    repeat: -1
    })
  this.tweens.add({
   targets: this.Object4,
   y: 500,
   yoyo: true,
   duration: 3500,
    repeat: -1
        })
  this.tweens.add({
   targets: this.Object5,
   y: 540,
   yoyo: true,
   duration: 3500,
   repeat: -1
    })
  this.tweens.add({
    targets: this.Object6,
    y: 150,
    yoyo: true,
    duration:3500,
    repeat: -1
    })
  
//create the arrow keys
this.cursors = this.input.keyboard.createCursorKeys();

    var page3Down = this.input.keyboard.addKey(50);

    page3Down.on('down', function(){
        console.log("go to page3");
            this.scene.start("page3");
        }, this );


    //Add main player here with physics.add.sprite

    //Add time event / movement here

    // get the tileIndex number in json, +1
    // mapLayer.setTileIndexCallback(11, this.room1, this);

    // Add custom properties in Tiled called "mouintain" as bool
    this.wall2Layer.setCollisionByExclusion(-1, true);
    this.rackLayer.setCollisionByExclusion(-1, true);

    //What will collider witg what layers
    // this.physics.add.collider(mapLayer, this.player);
    this.physics.add.collider(this.player, this.wall2Layer);
    this.physics.add.collider(this.player, this.rackLayer);

    //create the arrow keys
    this.cursors = this.input.keyboard.createCursorKeys();
    // this.cursors = this.input.keyboard.createCursorKeys();

    // make the camera follow the player
    this.cameras.main.startFollow(this.player);
   
  } // end of create //

 

  update () {
    if (this.player.x > 629 && this.player.y > 118 && this.player.y < 233) {
      console.log("Door3");
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

    hitObject3(player, item) {
      console.log("player hit object3")
      this.cameras.main.shake(200);
      item.disableBody(true, true)
      return false
    }
    hitObject4(player, item) {
      console.log("player hit object4")
      this.cameras.main.shake(200);
      item.disableBody(true, true)
      return false
    }
    hitObject5(player, item) {
      console.log("player hit object5")
      this.cameras.main.shake(200);
      item.disableBody(true, true)
      return false
    }
    hitObject6(player, item) {
      console.log("player hit object6")
      this.cameras.main.shake(200);
      item.disableBody(true, true)
      return false
    }

// Function to jump to room1
room1(player, tile) {
  console.log("room1 function");
  this.scene.start("page3");
}
}
   // outside of update()

  // Function to jump to room1

 // end of update //

