/**
 * base class for a simple game level.
 *
 * @constructor  {}
 * @method   :
 * @property :
 * startPosition {} (x,y)
 */

class SimpleLevel extends Phaser.State {
    constructor() {
        super();
    }

    _loadLevel(tiles) {
        this.game.canvas.oncontextmenu = function (e) {
            e.preventDefault();
        }
        this.game.stage.backgroundColor = "#1b2823";
        this.game.world.setBounds(0, 0, 1040, 540);
        this.game.iso.anchor.setTo(0.5, 0);
        this.floorGroup = game.add.group();
        this.extensionGroup = game.add.group();
        this.camera.x = 200;
        this.camera.y = 90;
        var floorTile;
        var initialPosition = 200;
        var numberOfTiles = tiles;
        var tileWidth = 81;
        var totalLength = numberOfTiles * tileWidth + initialPosition;
        //        this.tiles = [
        //            8, 8, 8, 8, 8, 8, 8,
        //            8, 1, 1, 1, 1, 1, 8,
        //            8, 1, 1, 1, 1, 1, 8,
        //            8, 1, 1, 1, 1, 1, 8,
        //            8, 1, 1, 1, 1, 1, 8,
        //            8, 1, 1, 1, 1, 1, 8,
        //            8, 8, 8, 8, 8, 8, 8,
        //        ];
        this.tiles = [
             1, 1, 1, 1, 1,
             1, 1, 1, 1, 1,
             1, 1, 1, 1, 1,
             1, 1, 1, 1, 1,
             1, 1, 1, 1, 1,
        ];
         this.cursors = game.input.keyboard.createCursorKeys();
        
            this.game.input.keyboard.addKeyCapture([
            Phaser.Keyboard.LEFT,
            Phaser.Keyboard.RIGHT,
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN,
            Phaser.Keyboard.SPACEBAR
        ]);

        var i = 0;
        for (var yt = initialPosition; yt < totalLength; yt += tileWidth) {
            for (var xt = initialPosition; xt < totalLength; xt += tileWidth) {
                if (this.tiles[i] != 8) {
                    floorTile = game.add.isoSprite(xt, yt, 0, 'initialTileset', 0, this.floorGroup);
                    floorTile.anchor.set(0.5);
                    floorTile.selectionMade = false;
                    floorTile.tileNumber = i;
                    var randomTile = Math.floor(Math.random() * (6 - 0 + 1)) + 0;
                    floorTile.frame = this.tiles[i];
                }
                i++;
            }
        }
    }
    
    
    _addPlayer(){
   this.player = this.game.add.isoSprite(this.game.width/2, this.game.height/2, 0, 'minion', 1, this.isoGroup);
        this.game.physics.isoArcade.enable(this.player);
       // this.player = this.game.add.isoSprite(200, 200, 1, 'minion', 0, this.isoGroup);
    }
    _tileLogger() {
        var s = "";
        var k = 0;
        for (var i = 0; i < this.tiles.length; i++) {
            // for(var i = this.tiles.length; i > 0; i--){
            if (i % 7 === 0 && i != 0) {
                s += '\n';
            }
            s += this.tiles[i] + ' ';
            //s += i  + ' ';
        }
        console.log(s);
    }
    preload() {
    }
    create() {
        this.game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
        this.cursorPos = new Phaser.Plugin.Isometric.Point3();
        this.game.plugins.add(new Phaser.Plugin.Isometric(this.game));
        this._loadLevel(4);
        this.game.iso.simpleSort(this.floorGroup);
        //this._tileLogger();
        this._addPlayer();
    }
    update() {
        
                var speed = 60;

        if (this.cursors.up.isDown) {
            this.player.body.velocity.y = -speed;
        }
        else if (this.cursors.down.isDown) {
            this.player.body.velocity.y = speed;
        }
        else {
       this.player.body.velocity.y = 0;
        }

        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = -speed;
        }
        else if (this.cursors.right.isDown) {
           this.player.body.velocity.x = speed;
        }
        else {
       this.player.body.velocity.x = 0;
        }
        
    }

    render() {

        this.game.debug.body(this.floorGroup);


    }
}