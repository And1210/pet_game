var environManager;

var player;

var spriteNames = ['dog0'];
var spriteSubNames = ['idle', 'up', 'right', 'down', 'left'];
var sprites = [];
var bg;
var grassImg;
var houseImg;

//Loading all assets
function preload() {
	for (var i of spriteSubNames) {
		if (i !== "idle") {
			for (var j = 0; j < 4; j++) {
				name = spriteNames[0] + "_" + i + j
				filename = "../raw/" +spriteNames[0] + "/" + name + ".png";
				sprites.push(loadImage(filename));
			}
		} else {
			j = 0;
			name = spriteNames[0] + "_" + i + j
			filename = "../raw/" +spriteNames[0] + "/" + name + ".png";
			// IH.loadImage(filename, name);
			sprites.push(loadImage(filename));
		}
	}

	bg = loadImage("../raw/grass_bg.png");
	grassImg = loadImage("../raw/grass.png");
	houseImg = loadImage("../raw/house.png");
}

function setup() {
	createCanvas(windowWidth, windowHeight);

	environImgsObj = {
		'grass': {
			'img': grassImg,
			'n': width/10,
		},
		'house': {
			'img': houseImg,
			'n': 1
		}
	}
	environManager = new EnvironmentManager(environImgsObj);

	player = new Player(createVector(width/2, height/2), 25, 1);
}

function draw() {
	drawBackground();
	environManager.render();

	player.steerTowards(createVector(mouseX, mouseY));
	player.update();
	player.render();
}

function drawBackground() {
	for (var i = 0; i < ceil(width/bg.width); i++) {
		for (var j = 0; j < ceil(height/bg.height); j++) {
			image(bg, i*bg.width, j*bg.height);
		}
	}
}

function windowResized() {
 	resizeCanvas(windowWidth, windowHeight);
}
