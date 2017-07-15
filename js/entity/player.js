class Player extends Phaser.Sprite {
    constructor(game, posx, posy, key, frame) {
        super(game, posx, posy, 'minion', 0);
        game.add.existing(this);
        game.physics.isoArcade.enable(this);
            this.cursors = game.input.keyboard.createCursorKeys();
    }
    
    update(){}
}