var config = { 
    type: Phaser.AUTO, 
    scale: {
      mode: Phaser.Scale.FIT, 
      parent: 'superficie_juego',
      autoCenter: Phaser.Scale.CENTER_BOTH, 
      width: 1920,
      height: 1000   
    },
    backgroundColor: "#000000",
    scene: Escena,
    physics: {
      default: 'arcade',
      arcade: { 
        gravity: { y: 500 },
        debug: true
      }
    }
  }
  var game = new Phaser.Game(config);