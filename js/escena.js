//Variables que guardan valores HEX para los colores
const COLOR_PRIMARY = 0x4e342e;
const COLOR_LIGHT = 0x7b5e57;
const COLOR_DARK = 0x260e04;

//Valor bool y int que se usan para conectar menu de compra con el saldo
let x = 0;
let valor = 0;

class Escena extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }


    preload(){

        this.load.scenePlugin({
            key: 'rexuiplugin',
            url: 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js',
            sceneKey: 'rexUI'
        });    

        this.load.image("background_floor","resource/suelo.png");
        this.load.image("background_register","resource/background_register.png");
        this.load.image("background_wall","resource/pared.png");
        this.load.image("shadow","resource/sombra_estantes.png");
        this.load.image("estanteria","resource/estante1.png");
        this.load.image("letrero_estante","resource/letreroestante.png");
        this.load.image("fondo_saldo","resource/fondo_Saldo.png");
    }



    create(){

        

        var stringOption = false;
        var options;
        if (stringOption) {
            options = ['Patatas', 'Galletas', 'Leche', 'Cereales','Manzanas','Peras','a','b','c'];
        } else {
            options = [
                { text: 'Patatas 2 Euros', value: 2 },
                { text: 'Galletas 50 Centimos', value: 0.5 },
                { text: 'Leche 10 Euros', value: 10 },
                { text: 'Cereales 3 Euros', value: 3 },
                { text: 'Manzanas 1 Euro', value: 1 },
                { text: 'Peras 2 Euros', value: 2 },
                { text: 'a', value: 2 },
                { text: 'b', value: 2 },
                { text: 'c', value: 2 },
            ]
        }

        var print = this.add.text(0, 0, '');
        var dropDownList = this.rexUI.add.dropDownList({
            x: 200, y: 50,

            background: this.rexUI.add.roundRectangle(0, 0, 2, 2, 0, COLOR_PRIMARY).setDepth(10),
            icon: this.rexUI.add.roundRectangle(0, 0, 20, 20, 10, COLOR_LIGHT).setDepth(10),
            text: CreateTextObject(this, '-- MENU DE COMPRA --').setFixedSize(400, 0).setDepth(10),

            space: {
                left: 10,
                right: 10,
                top: 10,
                bottom: 10,
                icon: 10
            },

            options: options,

            list: {
                    createBackgroundCallback: function (scene) {
                    return scene.rexUI.add.roundRectangle(0, 0, 2, 2, 0, COLOR_DARK).setDepth(10);
                },
                createButtonCallback: function (scene, option, index, options) {
                    var text = (stringOption) ? option : option.text;
                    var button = scene.rexUI.add.label({
                        background: scene.rexUI.add.roundRectangle(0, 0, 2, 2, 0).setDepth(10),

                        text: CreateTextObject(scene, text),

                        space: {
                            left: 10,
                            right: 10,
                            top: 10,
                            bottom: 10,
                            icon: 10
                        }
                    });
                    button.value = (stringOption) ? undefined : option.value;

                    return button;
                },

                // scope: dropDownList
                onButtonClick: function (button, index, pointer, event) {

                    this.value = button.value;
                    print.text += `Select ${button.text}, value=${button.value}\n`;
                },

                // scope: dropDownList
                onButtonOver: function (button, index, pointer, event) {
                    button.getElement('background').setStrokeStyle(1, 0xffffff);
                },

                // scope: dropDownList
                onButtonOut: function (button, index, pointer, event) {
                    button.getElement('background').setStrokeStyle();
                },
              
                 
            },

            setValueCallback: function (dropDownList, value, previousValue) {

                console.log(-value);
                x = 0 ;
                valor = value;
                //this.cambioSaldo(-value);
            },
            value: undefined

        })
            .layout();
    




        //Creacion del Escenario
        this.imgSuelo = this.add.image(960,540,"background_floor");
        this.imgMostrador = this.add.image(960,460,"background_register").setScale(1);
        this.imgPared = this.add.image(960,540,"background_wall").setScale(1);
        this.imgSombra = this.add.image(960,540,"shadow").setAlpha(1);

        this.estanteria1 = this.add.image(262,165,'estanteria').setScale(1);
        this.estanteria2 = this.add.image(262,318,'estanteria').setScale(1);
        this.estanteria3 = this.add.image(262,470,'estanteria').setScale(1);
        this.estanteria4 = this.add.image(728,165,'estanteria').setScale(1);
        this.estanteria5 = this.add.image(728,318,'estanteria').setScale(1);
        this.estanteria6 = this.add.image(728,470,'estanteria').setScale(1);
        this.estanteria7 = this.add.image(1194,165,'estanteria').setScale(1);
        this.estanteria8 = this.add.image(1194,318,'estanteria').setScale(1);
        this.estanteria9 = this.add.image(1194,470,'estanteria').setScale(1);
        this.estanteria10 = this.add.image(1660,165,'estanteria').setScale(1);
        this.estanteria11 = this.add.image(1660,318,'estanteria').setScale(1);
        this.estanteria12 = this.add.image(1660,470,'estanteria').setScale(1);

        this.letrero1 = this.add.image(262,167,"letrero_estante");
        this.letrero2 = this.add.image(262,319,"letrero_estante");
        this.letrero3 = this.add.image(262,470,"letrero_estante");
        this.letrero4 = this.add.image(728,167,"letrero_estante");
        this.letrero5 = this.add.image(728,319,"letrero_estante");
        this.letrero6 = this.add.image(728,470,"letrero_estante");
        this.letrero7 = this.add.image(1194,167,"letrero_estante");
        this.letrero8 = this.add.image(1194,319,"letrero_estante");
        this.letrero9 = this.add.image(1194,470,"letrero_estante");
        this.letrero10 = this.add.image(1660,167,"letrero_estante");
        this.letrero11 = this.add.image(1660,319,"letrero_estante");
        this.letrero12 = this.add.image(1660,470,"letrero_estante");

        this.letrero1.setDepth(9);
        this.letrero2.setDepth(9);
        this.letrero3.setDepth(9);
        this.letrero4.setDepth(9);
        this.letrero5.setDepth(9);
        this.letrero6.setDepth(9);
        this.letrero7.setDepth(9);
        this.letrero8.setDepth(9);
        this.letrero9.setDepth(9);
        this.letrero10.setDepth(9);
        this.letrero11.setDepth(9);
        this.letrero12.setDepth(9);

        this.estanteria1.setDepth(4);
        this.estanteria2.setDepth(4);
        this.estanteria3.setDepth(4);
        this.estanteria4.setDepth(4);
        this.estanteria5.setDepth(4);
        this.estanteria6.setDepth(4);
        this.estanteria7.setDepth(4);
        this.estanteria8.setDepth(4);
        this.estanteria9.setDepth(4);
        this.estanteria10.setDepth(4);
        this.estanteria11.setDepth(4);
        this.estanteria12.setDepth(4);

        this.imgMostrador.setDepth(6);
        this.imgSuelo.setDepth(1);
        this.imgSombra.setDepth(3);
        this.imgPared.setDepth(1);
        

        //Creacion del saldo
       this.saldo = 200;
       this.fondoSaldo = this.add.image(1350,20,"fondo_saldo").setScale(2);
       this.saldoValue = this.add.text(1350,0,'0',{ fontSize:'32px',fill:'#000'});
       this.saldoText = this.add.text(1302,30,'Saldo',{ fontSize:'32px',fill:'#000'});

       this.fondoSaldo.setDepth(9);
       this.saldoValue.setDepth(10);
       this.saldoText.setDepth(10);
    }

    update(){
        this.saldoText.setText("Saldo: " + this.saldo);
        //Esta llamada solo la utilizaremos para el menu de compra su uso es raro usando un bolean y no creo que se adapte al añadirSaldo 
        if( x == 0){
                this.cambioSaldo(-valor);
            x = 1
        }

    }
    cambioSaldo(dinero){
        if (this.saldo <= 0){
            return;
        }else{
            this.saldo += dinero;
        }
    }

}



var CreateTextObject = function (scene, text) {
    return scene.add.text(0, 0, text, { fontSize: 20 }).setDepth(10)
}
