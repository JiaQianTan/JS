class level1 extends Phaser.Scene {
  constructor ()
  {
      super({ key: 'level1' });
      this.score = 0;
  }

  preload() {

      // Step 1, load JSON
    this.load.tilemapTiledJSON("world1", "asses/myMap.tmj");
      // Step 2 : Preload any images here
     this.load.image("floor", "asses/floor.jpg");
     this.load.image("defimon3", "asses/defimon3.png");
     this.load.image("design", "asses/design.png");
     this.load.image("defimon5", "asses/defimon5.png");
     this.load.image("heart1", "asses/heart.png"); 
     this.load.image("heart2", "asses/heart.png"); 
     this.load.image("heart3", "asses/heart.png"); 
     
  // Use spritesheet for the girl
     this.load.spritesheet("boy", "asses/boy.png", {
     frameWidth: 64,
     frameHeight: 64,
  });
  this.load.spritesheet("grape", "asses/grape.png", {
    frameWidth: 64,
    frameHeight: 64,
 });
 this.load.spritesheet("lemon", "asses/lemon.png", {
  frameWidth: 64,
  frameHeight: 64,
});
this.load.spritesheet("cheery", "asses/cheery.png", {
frameWidth: 64,
frameHeight: 64,
});
}

   // end of preload //

  create (){

  console.log("level1")


  //Step 3 - Create the map from main
  let map = this.make.tilemap({ key: "world1" });

  
  // Step 4 Load the game tiles
  //1st parameter is name in Tiled,
  //2nd parameter is key in Preload
  let groundTiles = map.addTilesetImage("floor", "floor");
  let rackTiles = map.addTilesetImage("defimon3", "defimon3");
  let rack2Tiles = map.addTilesetImage("design", "design");
  let tableTiles = map.addTilesetImage("defimon5", "defimon5");
  let wallTiles = map.addTilesetImage("wall2", "wall2");



  //Step 5  create an array of tiles
  let tilesArray = [
      groundTiles,
      rackTiles,
      rack2Tiles,
      tableTiles,
      wallTiles
      ];

  // Step 6  Load in layers by layers

  this.groundLayer = map.createLayer("groundLayer",tilesArray,0,0);
  this.walkingLayer = map.createLayer("walkingLayer", tilesArray, 0, 0);
  this.wallLayer = map.createLayer("wallLayer", tilesArray, 0, 0);
  this.rackLayer = map.createLayer("rackLayer",tilesArray,0,0);
  this.rack2Layer = map.createLayer("rack2Layer",tilesArray,0,0);
  this.tableLayer = map.createLayer("tableLayer",tilesArray,0,0);
  this.smallThingLayer = map.createLayer("smallThingLayer",tilesArray,0,0);

  this.physics.world.bounds.width = this.walkingLayer.width;
  this.physics.world.bounds.height = this.walkingLayer.height;




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
  .sprite(322, 596, "boy")
  .play("boy-up");
  window.player = this.player;
  this.player.body.setSize(this.player.width * 0.5, this.player.height * 0.7);

  let grape = map.findObject("objectLayer", (obj) => obj.name === "grape")
  let lemon = map.findObject("objectLayer", (obj) => obj.name === "lemon")
  let cheery = map.findObject("objectLayer", (obj) => obj.name === "cheery")
  this.grape = this.physics.add.sprite(230.50,369.85,"grape")
  this.lemon = this.physics.add.sprite(187.54,215.83,"lemon")
  this.cheery = this.physics.add.sprite(591.96,505,"cheery")

  this.heart1 = this.add.sprite(477, 23, "heart1");
  this.heart1.setDepth(1); // Set the depth to 1 (or higher if needed) to render it on top

  this.heart2 = this.add.sprite(515, 23, "heart2");
  this.heart2.setDepth(1); // Set the depth to 1 (or higher if needed) to render it on top

  this.heart3 = this.add.sprite(552, 23, "heart3");
  this.heart3.setDepth(1);

  this.physics.add.overlap(this.player,this.grape,this.hitgrape,null,this);
  this.physics.add.overlap(this.player,this.lemon,this.hitlemon,null,this);
  this.physics.add.overlap(this.player,this.cheery,this.hitcheery,null,this);
  
  //create the arrow keys
  this.cursors = this.input.keyboard.createCursorKeys(); 
  // make the camera follow the player
  var page2Down = this.input.keyboard.addKey(50);

  page2Down.on('down', function(){
      console.log("go to page2");
          this.scene.start("page2");
      }, this );
  

   //Add main player here with physics.add.sprite

  //Add time event / movement here

  // get the tileIndex number in json, +1
  // mapLayer.setTileIndexCallback(11, this.room1, this);

  // Add custom properties in Tiled called "mouintain" as bool
  this.wallLayer.setCollisionByExclusion(-1, true);
  this.rackLayer.setCollisionByExclusion(-1, true);
  this.rack2Layer.setCollisionByExclusion(-1, true);
  this.tableLayer.setCollisionByExclusion(-1, true);
  this.smallThingLayer.setCollisionByExclusion(-1, true);
  
  //What will collider witg what layers
  // this.physics.add.collider(mapLayer, this.player);
  this.physics.add.collider(this.player, this.wallLayer);
  this.physics.add.collider(this.player, this.rackLayer);
  this.physics.add.collider(this.player, this.rack2Layer);
  this.physics.add.collider(this.player, this.smallThingLayer);


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

    if (this.player.x > 629 && 
      this.player.y > 118 && 
      this.player.y < 233 ) {
      console.log("Door1");
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

hitgrape(player, item) {
console.log("player hit grape")
this.cameras.main.shake(200);
item.disableBody(true, true)
window.grape++
return false
}
hitlemon(player, item) {
console.log("player hit lemon")
this.cameras.main.shake(200);
item.disableBody(true, true)
window.lemon++
return false
}
hitcheery(player, item) {
console.log("player hit cheery")
this.cameras.main.shake(200);
item.disableBody(true, true)
window.cheery++
return false
}

// Function to jump to room1
room1(player, tile) {
  console.log("room1 function");
  this.scene.start("page2");
}
}

// end of update // 
