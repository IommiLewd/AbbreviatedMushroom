class SimpleLevel extends Phaser.State {
    constructor() {
        super();
    }

    _loadLevel() {
        this.game.canvas.oncontextmenu = function (e) {
            e.preventDefault();
        }
        this.game.stage.backgroundColor = "#1b2823";

    }
    _addController() {
        this.game.touchControl = this.game.plugins.add(Phaser.Plugin.TouchControl);
        this.game.touchControl.inputEnable();
    }

    _addPlayer() {
        this.player = new Player(this.game, this.game.width / 2, this.game.height / 2, 'testSheet');
    }

    _addEnemy() {
        this.enemies = this.game.add.group();
        this.enemy = new Enemy(this.game, 200, 200, 'enemySheet');
        this.enemies.add(this.enemy);
    }

    preload() {}

    create() {
        this._loadLevel();
        this._addController();
        this._addPlayer();
        this._addEnemy();

    }

    update() {
        this.enemies.forEachAlive(function(enemy) {
            enemy.playerX = this.player.x;
            enemy.playerY = this.player.y;
        }, this)

        this.player.body.velocity.x = this.game.touchControl.speed.x *= -1;
        this.player.body.velocity.y = this.game.touchControl.speed.y *= -1;

    }
}