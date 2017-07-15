class Preload extends Phaser.State {
    preload() {
        //this.load.script('webfont', '//ajax.googleapis.com/ajax/libs/webfont/1.4.7/webfont.js');

        this.load.script('simpleLevel', 'js/map/simplelevel.js');
        this.load.script('player', 'js/entity/player.js');
        this.load.spritesheet('initialTileset', 'img/highResTileset.png', 150, 88, 6);
        this.load.image('minion', 'img/minion.png');


    }
    create() {
        console.log("Preload.js:  Preload.create-> load_Level");
        this.game.state.add('SimpleLevel', SimpleLevel);
        this.game.state.start('SimpleLevel');
    }

}