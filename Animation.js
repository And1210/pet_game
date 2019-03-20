class Animation {

	constructor(entity) {
		this.entity = entity;
		this.isAnimating = false;
		this.timer = 0;
		this.startTime = 0;
		this.options = {
			time: 0,
			imgs: []
		};
	}

	updateTimer() {
		this.timer = this.options.time / (this.options.imgs.length);
	}

	//Options is a JSON with the following properties:
	//time - time the animation will take
	//imgs - the imgs to loop through
	setAnimationOptions(options) {
		let keys = Object.keys(options);
		for (key of keys) {
			this.options[key] = options[key];
		}

		this.updateTimer();
	}

	animate() {
		this.isAnimating = true;
		this.startTime = millis();
	}

	stop() {
		this.isAnimating = false;
	}

	update() {
		if (millis() >= this.startTime + this.timer)
			this.animate();
		let index = floor(this.options.imgs.length*(millis() - this.startTime)/this.timer);
		this.entity.img = this.options.imgs[index];
	}

}
