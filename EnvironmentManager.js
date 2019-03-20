class EnvironmentManager {

	/*
	environImgs is a json object filled with json objects (name of environment object is the key)
	Each object must have:
		img - the sprite of the object
		n - the number of objects to draw
	Optional arguments:
		x - the x location
		y - the y location
	*/
	constructor(environImgs) {
		this.environImgs = environImgs;
		this.names = Object.keys(this.environImgs);

		this.instantiateObject("grass", this.environImgs.grass.n,
										this.environImgs.grass.img.width,
										this.environImgs.grass.img.height);
	}

	render() {
		imageMode(CORNER);
		for (name of this.names) {
			let obj = this.environImgs[name];
			let img = obj.img;
			for (let i = 0; i < obj.x.length; i++) {
				image(img, obj.x[i], obj.y[i]);
			}
		}
	}

	instantiateObject(name, n, w, h) {
		this.environImgs[name].x = [];
		this.environImgs[name].y = [];
		for (var i = 0; i < n; i++) {
			var x = w * floor(random(0, width/w));
			var y = h * floor(random(0, height/h));

			this.environImgs[name].x.push(x);
			this.environImgs[name].y.push(y);
		}
	}
}
