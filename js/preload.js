class Preload extends Phaser.State {
    preload() {
        //this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        this.load.script('simpleLevel', 'js/map/simplelevel.js');
        this.load.script('controller', 'js/entity/controller.js');
        this.load.script('player', 'js/entity/player.js');
        this.load.script('enemy', 'js/entity/enemy.js');
        this.load.image('compass', 'img/navigator.png');
        this.load.image('touch_segment', 'img/indicator.png');
        this.load.image('touch_segment2', 'img/indicator2.png');
        this.load.image('touch', 'img/touch.png');
        this.load.image('player', 'img/player.png');
        this.load.spritesheet('testSheet', 'img/testsheet.png', 53, 64, 11);
        this.load.spritesheet('enemySheet', 'img/enemyTestsheet.png', 53, 64, 11);

    }
    create() {
        console.log("Preload.js:  Preload.create-> load_Level");
        this.game.state.add('SimpleLevel', SimpleLevel);
        this.game.state.start('SimpleLevel');
    }

}