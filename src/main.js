let config = {
    type: Phaser.CANVAS,
    width: 375,
    height: 635,
    scene: [ Play ]
}

let game = new Phaser.Game(config);
let keyF, keyR, keyLEFT, keyRIGHT;