class Player extends Phaser.Sprite {
    constructor(game, x, y, key) {
        super(game, x, y, 'testSheet');
        this.game.add.existing(this);
        this.game.physics.arcade.enable(this);
        this.anchor.setTo(0.5, 1.0);
        this.game.physics.arcade.enableBody(this);
        this.body.collideWorldBounds = true;
        this._addAnimations();
    
    }

    _addAnimations() {
        this.animations.add('down', [0, 1, 2], 10, true);
        this.animations.add('right', [3, 4, 5], 10, true);
        this.animations.add('up', [6, 7, 8], 10, true);
        this.animations.add('left', [9, 10, 11], 10, true);
    }
    



    update() {

        
        
        
        if (this.body.velocity.x > 0 && this.body.velocity.y < 50 && this.body.velocity.y > -50) {
            this.animations.play('right');
        } else if (this.body.velocity.x < 0 && this.body.velocity.y < 50 && this.body.velocity.y > -50) {
            this.animations.play('left');
        } else if (this.body.velocity.y < 0 && this.body.velocity.x < 50 && this.body.velocity.x > -50) {
            this.animations.play('up');
        } else if (this.body.velocity.y > 0 && this.body.velocity.x < 50 && this.body.velocity.x > -50) {
            this.animations.play('down');
        } else if (this.body.velocity.y === 0 && this.body.velocity.x === 0) {
            this.animations.stop(0, true);
        }
    }
}