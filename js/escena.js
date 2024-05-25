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
        this.load.image("mesa","resource/mesa.png");
        this.load.image("background_wall","resource/pared.png");
        this.load.image("shadow","resource/sombracaja.png");
        this.load.image("estanteria","resource/estante1.png");
        this.load.image("letrero_estante","resource/letreroestante.png");
        this.load.image("barra1","resource/barra1.png");
        this.load.image("barra2","resource/barra2.png");
        this.load.image("cajitaticket","resource/cajitaticket.png");
        this.load.image("mantadinero","resource/mantadinero.png");
        this.load.image("monitor","resource/monitor.png");
        this.load.image("scanner1","resource/scanner1.png");
        this.load.image("scanner2","resource/scanner2.png");
        this.load.image("fondo_saldo","resource/fondo_Saldo.png");

        this.load.image("apple","resource/APPLE.png");
        this.load.image("banana","resource/BANANA.png");
        this.load.image("burguer","resource/BURGUER.png");
        this.load.image("coke","resource/COKE.png");
        this.load.image("cookies","resource/COOKIES.png");
        this.load.image("juice","resource/JUICE.png");
        this.load.image("mochi","resource/MOCHI.png");
        this.load.image("pizza","resource/PIZZA.png");
        this.load.image("popcorn","resource/POPCORN.png");
        this.load.image("salad","resource/SALAD.png");
        this.load.image("tuna","resource/TUNA.png");
        this.load.image("water","resource/WATER.png");
    }



    create(){

        

        var stringOption = false;
        var options;
        if (stringOption) {
            options = ['Manzanas', 'Platanos', 'Hamburguesas', 'Coca Cola','Zumo','Mochis','Pizzas','Palomitas','Ensalada','Agua'];
        } else {
            options = [
                { text: 'Manzanas 2 Euros', value: 2 },
                { text: 'Platanos 50 Centimos', value: 0.5 },
                { text: 'Hamburguesas 10 Euros', value: 10 },
                { text: 'Coca Colas 3 Euros', value: 3 },
                { text: 'Zumos 1 Euro', value: 1 },
                { text: 'Mochis 2 Euros', value: 2 },
                { text: 'Pizzas 4 Euros', value: 4 },
                { text: 'Palomitas 6 Euros', value: 6 },
                { text: 'Ensaladas 3 Euros', value: 3 },
                { text: 'Atun 2 Euros', value: 2 },
                { text: 'Ensaladas 4 Euros', value: 4 },
                { text: 'Agua 50 Centimos', value: 0.5 } 
            ]
        }

        var print = this.add.text(0, 0, '');
        var dropDownList = this.rexUI.add.dropDownList({
            x: 950, y: 20,

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
        this.imgSuelo = this.add.image(960,539,"background_floor").setScale(0.5);
        this.imgPared = this.add.image(960,541,"background_wall").setScale(0.5);

        this.estanteria1 = this.add.image(300,97,'estanteria').setScale(0.5);
        this.estanteria2 = this.add.image(300,258,'estanteria').setScale(0.5);
        this.estanteria3 = this.add.image(300,420,'estanteria').setScale(0.5);
        this.estanteria4 = this.add.image(735,97,'estanteria').setScale(0.5);
        this.estanteria5 = this.add.image(735,258,'estanteria').setScale(0.5);
        this.estanteria6 = this.add.image(735,420,'estanteria').setScale(0.5);
        this.estanteria7 = this.add.image(1170,97,'estanteria').setScale(0.5);
        this.estanteria8 = this.add.image(1170,258,'estanteria').setScale(0.5);
        this.estanteria9 = this.add.image(1170,420,'estanteria').setScale(0.5);
        this.estanteria10 = this.add.image(1607,97,'estanteria').setScale(0.5);
        this.estanteria11 = this.add.image(1607,258,'estanteria').setScale(0.5);
        this.estanteria12 = this.add.image(1607,420,'estanteria').setScale(0.5);

        this.letrero1 = this.add.image(451,126,"letrero_estante").setScale(0.5);
        this.letrero2 = this.add.image(451,288,"letrero_estante").setScale(0.5);
        this.letrero3 = this.add.image(451,450,"letrero_estante").setScale(0.5);
        this.letrero4 = this.add.image(885,126,"letrero_estante").setScale(0.5);
        this.letrero5 = this.add.image(885,288,"letrero_estante").setScale(0.5);
        this.letrero6 = this.add.image(885,450,"letrero_estante").setScale(0.5);
        this.letrero7 = this.add.image(1321,126,"letrero_estante").setScale(0.5);
        this.letrero8 = this.add.image(1321,288,"letrero_estante").setScale(0.5);
        this.letrero9 = this.add.image(1321,450,"letrero_estante").setScale(0.5);
        this.letrero10 = this.add.image(1757,126,"letrero_estante").setScale(0.5);
        this.letrero11 = this.add.image(1757,288,"letrero_estante").setScale(0.5);
        this.letrero12 = this.add.image(1757,450,"letrero_estante").setScale(0.5);  

        this.mesa = this.add.image(960,955,"mesa").setScale(0.5);
        this.barra1 = this.add.image(1598,944,"barra1").setScale(0.5);
        this.barra2 = this.add.image(160,944,"barra2").setScale(0.5);
        this.cajitaticket = this.add.image(395,881,"cajitaticket").setScale(0.5);
        this.mantadinero = this.add.image(664,988,"mantadinero").setScale(0.5);
        this.monitor = this.add.image(683,796,"monitor").setScale(0.5);
        this.scanner1 = this.add.image(1089,843,"scanner1").setScale(0.5);
        this.scanner2 = this.add.image(1105,975,"scanner2").setScale(0.5);
        this.shadow = this.add.image(960,955,"shadow").setScale(0.5);

        //comidaaaaa

        this.apple1 = this.add.image(1050,270,"apple").setScale(0.4);
        this.apple2 = this.add.image(1230,270,"apple").setScale(0.4);
        this.apple3 = this.add.image(1140,270,"apple").setScale(0.4);
        
        this.banana1 = this.add.image(1075,433,"banana").setScale(0.5);
        this.banana2 = this.add.image(1205,433,"banana").setScale(0.5);
        this.banana3 = this.add.image(1140,439,"banana").setScale(0.5);
        
        this.burguer1 = this.add.image(1650,255,"burguer").setScale(0.45);
        this.burguer2 = this.add.image(1500,255,"burguer").setScale(0.45);
        this.burguer3 = this.add.image(1575,260,"burguer").setScale(0.45);
        
        this.coke1 = this.add.image(640,110,"coke").setScale(0.5);
        this.coke2 = this.add.image(715,110,"coke").setScale(0.5);
        this.coke3 = this.add.image(790,110,"coke").setScale(0.5);
        
        this.cookies1 = this.add.image(180,257,"cookies").setScale(0.45);
        this.cookies2 = this.add.image(370,257,"cookies").setScale(0.45);
        this.cookies3 = this.add.image(275,257,"cookies").setScale(0.45);
        
        this.juice1 = this.add.image(640,275,"juice").setScale(0.5);
        this.juice2 = this.add.image(715,275,"juice").setScale(0.5);
        this.juice3 = this.add.image(790,275,"juice").setScale(0.5);
        
        this.mochi1 = this.add.image(1050,103,"mochi").setScale(0.4);
        this.mochi2 = this.add.image(1145,103,"mochi").setScale(0.4);
        this.mochi3 = this.add.image(1240,103,"mochi").setScale(0.4);
        
        this.pizza1 = this.add.image(1654,417,"pizza").setScale(0.4);
        this.pizza2 = this.add.image(1498,417,"pizza").setScale(0.4);
        this.pizza3 = this.add.image(1575,421,"pizza").setScale(0.4);
        

        this.popcorn1 = this.add.image(175,105,"popcorn").setScale(0.5);
        this.popcorn2 = this.add.image(270,105,"popcorn").setScale(0.5);
        this.popcorn3 = this.add.image(365,105,"popcorn").setScale(0.5);
        

        this.salad1 = this.add.image(1490,110,"salad").setScale(0.5);
        this.salad2 = this.add.image(1665,110,"salad").setScale(0.5);
        this.salad3 = this.add.image(1578,114,"salad").setScale(0.5);
        

        this.tuna1 = this.add.image(200,450,"tuna").setScale(0.5);
        this.tuna2 = this.add.image(280,450,"tuna").setScale(0.5);
        this.tuna3 = this.add.image(360,450,"tuna").setScale(0.5);
        
        this.water1 = this.add.image(630,421,"water").setScale(0.5);
        this.water2 = this.add.image(710,421,"water").setScale(0.5);
        this.water3 = this.add.image(790,421,"water").setScale(0.5);
        




        //interactuablez mostrador
        
        this.apple5 = this.add.image(1080,910,"apple").setInteractive().setScale(0.8).setVisible(false);
        this.banana5 = this.add.image(1080,910,"banana").setInteractive().setScale(0.8).setVisible(false);
        this.burguer5 = this.add.image(1080,910,"burguer").setInteractive().setScale(0.8).setVisible(false);
        this.coke5 = this.add.image(1080,910,"coke").setInteractive().setScale(0.8).setVisible(false);
        this.cookies5 = this.add.image(1080,910,"cookies").setInteractive().setScale(0.8).setVisible(false);
        this.juice5 = this.add.image(1080,910,"juice").setInteractive().setScale(0.8).setVisible(false);
        this.mochi5 = this.add.image(1080,910,"mochi").setInteractive().setScale(0.8).setVisible(false);
        this.pizza5 = this.add.image(1080,910,"pizza").setInteractive().setScale(0.8).setVisible(false);
        this.popcorn5 = this.add.image(1080,910,"popcorn").setInteractive().setScale(0.8).setVisible(false);
        this.salad5 = this.add.image(1080,910,"salad").setInteractive().setScale(0.8).setVisible(false);
        this.tuna5 = this.add.image(1080,910,"tuna").setInteractive().setScale(0.8).setVisible(false);
        this.water5 = this.add.image(1080,910,"water").setInteractive().setScale(0.8).setVisible(false);


        this.apple4 = this.add.image(1380,910,"apple").setInteractive().setScale(0.8);
        this.banana4 = this.add.image(1380,645,"banana").setInteractive().setScale(0.8);
        this.burguer4 = this.add.image(1450,620,"burguer").setInteractive().setScale(0.9);
        this.coke4 = this.add.image(1500,680,"coke").setInteractive().setScale(1);
        this.cookies4 = this.add.image(1630,600,"cookies").setInteractive().setScale(0.90);
        this.juice4 = this.add.image(1580,630,"juice").setInteractive().setScale(1);
        this.mochi4 = this.add.image(1500,645,"mochi").setInteractive().setScale(0.7);
        this.pizza4 = this.add.image(1750,620,"pizza").setInteractive().setScale(0.8);
        this.popcorn4 = this.add.image(1790,610,"popcorn").setInteractive().setScale(1);
        this.salad4 = this.add.image(1820,655,"salad").setInteractive().setScale(1);
        this.tuna4 = this.add.image(1375,630,"tuna").setInteractive().setScale(1);
        this.water4 = this.add.image(1670,620,"water").setInteractive().setScale(1);

        this.Tiket = this.add.image(400,600,"tuna").setInteractive().setScale(1).setVisible(false);
        this.Tiket.setDepth(10);

        this.Bag = this.add.image(200,600,"burguer").setScale(1).setVisible(false);
        this.Bag.setDepth(10);

        this.payed == false;

        //acciones para cuanto se clican

        this.Tiket.on('pointerdown', () => {
           this.Tiket.setVisible(false);
           this.Bag.setVisible(false);
           this.saldo += this.preciocompra;
           this.preciocompra = 0;
           this.payed = true;

        })

        this.apple4.on('pointerdown', () => {
            this.apple4.setVisible(false);
            this.apple5.setVisible(true);
        })
        this.apple5.on('pointerdown', () => {
            this.apple5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.banana4.on('pointerdown', () => {
            this.banana4.setVisible(false);
            this.banana5.setVisible(true);
        })
        this.banana5.on('pointerdown', () => {
            this.banana5.setVisible(false);
            this.Bag.setVisible(true);
            this.preciocompra += 2;
            
        })

        this.burguer4.on('pointerdown', () => {
            this.burguer4.setVisible(false);
            this.burguer5.setVisible(true);
        })
        this.burguer5.on('pointerdown', () => {
            this.burguer5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.coke4.on('pointerdown', () => {
            this.coke4.setVisible(false);
            this.coke5.setVisible(true);
        })
        this.coke5.on('pointerdown', () => {
            this.coke5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.cookies4.on('pointerdown', () => {
            this.cookies4.setVisible(false);
            this.cookies5.setVisible(true);
        })
        this.cookies5.on('pointerdown', () => {
            this.cookies5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.juice4.on('pointerdown', () => {
            this.juice4.setVisible(false);
            this.juice5.setVisible(true);
        })
        this.juice5.on('pointerdown', () => {
            this.juice5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.mochi4.on('pointerdown', () => {
            this.mochi4.setVisible(false);
            this.mochi5.setVisible(true);
        })
        this.mochi5.on('pointerdown', () => {
            this.mochi5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.pizza4.on('pointerdown', () => {
            this.pizza4.setVisible(false);
            this.pizza5.setVisible(true);
        })
        this.pizza5.on('pointerdown', () => {
            this.pizza5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.popcorn4.on('pointerdown', () => {
            this.popcorn4.setVisible(false);
            this.popcorn5.setVisible(true);
        })
        this.popcorn5.on('pointerdown', () => {
            this.popcorn5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.salad4.on('pointerdown', () => {
            this.salad4.setVisible(false);
            this.salad5.setVisible(true);
        })
        this.salad5.on('pointerdown', () => {
            this.salad5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.tuna4.on('pointerdown', () => {
            this.tuna4.setVisible(false);
            this.tuna5.setVisible(true);
        })
        this.tuna5.on('pointerdown', () => {
            this.tuna5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })

        this.water4.on('pointerdown', () => {
            this.water4.setVisible(false);
            this.water5.setVisible(true);
        })
        this.water5.on('pointerdown', () => {
            this.water5.setVisible(false);
            this.preciocompra += 2;
            this.Bag.setVisible(true);
        })



        
        
        

        this.water1.visible = false;

            //profundidades


        this.letrero1.setDepth(5);
        this.letrero2.setDepth(5);
        this.letrero3.setDepth(5);
        this.letrero4.setDepth(5);
        this.letrero5.setDepth(5);
        this.letrero6.setDepth(5);
        this.letrero7.setDepth(5);
        this.letrero8.setDepth(5);
        this.letrero9.setDepth(5);
        this.letrero10.setDepth(5);
        this.letrero11.setDepth(5);
        this.letrero12.setDepth(5);

        this.estanteria1.setDepth(3);
        this.estanteria2.setDepth(3);
        this.estanteria3.setDepth(3);
        this.estanteria4.setDepth(3);
        this.estanteria5.setDepth(3);
        this.estanteria6.setDepth(3);
        this.estanteria7.setDepth(3);
        this.estanteria8.setDepth(3);
        this.estanteria9.setDepth(3);
        this.estanteria10.setDepth(3);
        this.estanteria11.setDepth(3);
        this.estanteria12.setDepth(3);

        this.imgSuelo.setDepth(2);
        this.imgPared.setDepth(1);
        this.mesa.setDepth(7);
        this.shadow.setDepth(7);
        this.barra1.setDepth(8);
        this.barra2.setDepth(8);
        this.mantadinero.setDepth(8);
        this.scanner2.setDepth(8);
        this.cajitaticket.setDepth(9);
        this.monitor.setDepth(9);
        this.scanner1.setDepth(9);


        //comidaaaaa

        this.apple1.setDepth(10);
        this.apple2.setDepth(10);
        this.apple3.setDepth(10);
        this.apple4.setDepth(10);
        this.apple5.setDepth(10);

        this.banana1.setDepth(10);
        this.banana2.setDepth(10);
        this.banana3.setDepth(10);
        this.banana4.setDepth(10);
        this.banana5.setDepth(10);

        this.burguer1.setDepth(10);
        this.burguer2.setDepth(10);
        this.burguer3.setDepth(10);
        this.burguer4.setDepth(10);
        this.burguer5.setDepth(10);

        this.coke1.setDepth(10);
        this.coke2.setDepth(10);
        this.coke3.setDepth(10);
        this.coke4.setDepth(10);
        this.coke5.setDepth(10);

        this.cookies1.setDepth(10);
        this.cookies2.setDepth(10);
        this.cookies3.setDepth(10);
        this.cookies4.setDepth(10);
        this.cookies5.setDepth(10);

        this.juice1.setDepth(10);
        this.juice2.setDepth(10);
        this.juice3.setDepth(10);
        this.juice4.setDepth(10);
        this.juice5.setDepth(10);

        this.mochi1.setDepth(10);
        this.mochi2.setDepth(10);
        this.mochi3.setDepth(10);
        this.mochi4.setDepth(10);
        this.mochi5.setDepth(10);

        this.pizza1.setDepth(10);
        this.pizza2.setDepth(10);
        this.pizza3.setDepth(10);
        this.pizza4.setDepth(10);
        this.pizza5.setDepth(10);

        this.popcorn1.setDepth(10);
        this.popcorn2.setDepth(10);
        this.popcorn3.setDepth(10);
        this.popcorn4.setDepth(10);
        this.popcorn5.setDepth(10);

        this.salad1.setDepth(10);
        this.salad2.setDepth(10);
        this.salad3.setDepth(10);
        this.salad4.setDepth(10);
        this.salad5.setDepth(10);

        this.tuna1.setDepth(10);
        this.tuna2.setDepth(10);
        this.tuna3.setDepth(10);
        this.tuna4.setDepth(10);
        this.tuna5.setDepth(10);

        this.water1.setDepth(10);
        this.water2.setDepth(10);
        this.water3.setDepth(10);
        this.water4.setDepth(10);
        this.water5.setDepth(10);
        

        //Creacion del saldo
       this.saldo = 200;
       this.fondoSaldo = this.add.image(1870,20,"fondo_saldo").setScale(2);
       this.saldoValue = this.add.text(1840,0,'0',{ fontSize:'32px',fill:'#000'});
       this.saldoText = this.add.text(1820,30,'Saldo',{ fontSize:'32px',fill:'#000'});

       this.fondoSaldo.setDepth(9);
       this.saldoValue.setDepth(10);
       this.saldoText.setDepth(10);

       //precio total de la compra
       this.preciocompra = 0;
       this.preciocompravalue = this.add.text(500,740,'0',{ fontSize:'32px',fill:'#000'});
       this.preciocompraText = this.add.text(500,710,'Total:',{ fontSize:'32px',fill:'#000'});

       this.preciocompravalue.setDepth(10);
       this.preciocompraText.setDepth(10);
    }

    update(){
        this.saldoValue.setText(this.saldo);
        this.preciocompravalue.setText(this.preciocompra);
        //Esta llamada solo la utilizaremos para el menu de compra su uso es raro usando un bolean y no creo que se adapte al añadirSaldo 
        if( x == 0){
                this.cambioSaldo(-valor);
            x = 1
        }
        //gestion del tiket
        if (!this.apple4.visible && 
            !this.apple5.visible && 
            !this.banana4.visible &&
            !this.banana5.visible &&
            !this.popcorn4.visible &&
            !this.popcorn5.visible &&
            !this.cookies4.visible &&
            !this.cookies5.visible &&
            !this.coke4.visible &&
            !this.coke5.visible &&
            !this.tuna4.visible &&
            !this.tuna5.visible &&
            !this.juice4.visible &&
            !this.juice5.visible &&
            !this.water5.visible &&
            !this.water4.visible &&
            !this.mochi5.visible &&
            !this.mochi4.visible &&
            !this.salad4.visible &&
            !this.salad5.visible &&
            !this.burguer4.visible &&
            !this.burguer5.visible &&
            !this.pizza4.visible &&
            !this.pizza5.visible &&
            !this.payed
        ) {
            this.Tiket.setVisible(true); // Hace visible el objeto tiket
        } else {
            this.Tiket.setVisible(false); // Hace invisible el objeto tiket
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
