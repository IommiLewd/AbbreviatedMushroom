class Weapons extends Phaser.Sprite {
    constructor(game, x, y, key, type) {
        super(game, x, y, key, type);
        this.game.add.existing(this);
    }




    update() {

    }
}