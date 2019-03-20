class Player extends Entity {
	constructor(pos, r, ratio) {
		super(pos, r);

		this.ratio = ratio;
		this.img = undefined;
		this.animators = [];
		for (let i = 0; i < 4; i++) {
			let anim = new Animation(this);
			anim.setAnimationOptions({
				time: 1500,
				imgs: sprites.slice(i*4 + 1, i*4 + 5)
			});
			this.animators.push(anim);
		}
	}

	update() {
		super.update();

		if (p5.Vector.sub(this.pos, createVector(mouseX, mouseY)).magSq() < pow(SLOW_RADIUS, 2))
			this.img = sprites[0];
		else
			this.animators[this.getDirection()].update();
	}

	render() {
		super.render();
		imageMode(CENTER);
		image(this.img, this.pos.x, this.pos.y, this.r*2, this.ratio*this.r*2);
	}
}
