var canvas;
var backgroundImage, track, ironManimg,americaimg;
var fireAuth, db;
var game, welcome, teacher, student;
var secret_word;
var player, allPlayers;
var gameState = null;
var playerCount;
var sound;

function preload() {
    backgroundImage = loadImage("./back3.jpg");
    track = loadImage("./tower.png");
    ironManimg = loadImage("./iron man fly1.png");
    sound = loadSound("sound.mp3");
    logoImage = loadImage("./logo.png");
    spiderManimg = loadImage("./america.png");
}

function setup() {
    sound.loop();
    canvas = createCanvas(displayWidth, displayHeight);
    db = firebase.database();
    fireAuth = firebase.auth();
    game = new Game();
    welcome = new Welcome();
    teacher = new Teacher();
    student = new Student();
    player = new Player();

    car1 = createSprite(width / 2, 200);
    car1.addImage("ironMan", ironManimg);
    car1.scale = 0.5;
    car2 = createSprite(width - 300, 200);
    car2.addImage("spiderMan", spiderManimg);
    car2.scale = 0.5;

    cars = [car1, car2];
}

function draw() {
    background(backgroundImage);
    if (gameState === null || gameState === 0) {
        game.start();
    }
    if (playerCount === 2) {
        game.update(1);
    }

    if (gameState === 1) {
        clear();
        student.greeting.hide();
        student.greeting2.hide();
        student.playButton.hide();

        teacher.greeting.hide();
        teacher.greeting2.hide();
        teacher.playButton.hide();
        teacher.secretWord.hide();

        game.play();
    }
    if (gameState === 2) {
        game.end();
    }
}

function windowResized() {
    resizeCanvas(displayWidth, displayHeight);
}