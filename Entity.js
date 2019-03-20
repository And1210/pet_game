class Entity {
	constructor(pos, r) {
		this.pos = pos;
		this.vel = createVector(0, 0);
		this.acc = createVector(0, 0);

		this.r = r;
	}

	update() {
		this.vel.add(this.acc);
		this.pos.add(this.vel);
		this.acc.mult(0);
	}

	steerTowards(target) {
        var desiredVel = p5.Vector.sub(target, this.pos);
		// strokeWeight(2);
		// stroke(255);
		// line(this.pos.x, this.pos.y, this.pos.x + desiredVel.x, this.pos.y + desiredVel.y);
        var distance = desiredVel.mag();
        var mult = 1.0;
        if (distance < SLOW_RADIUS) {
            mult = (distance) / (SLOW_RADIUS);
        }
        desiredVel.limit(mult * MAX_SPEED);
        var force = p5.Vector.sub(desiredVel, this.vel);
        force.limit(MAX_FORCE);
        this.applyForce(force);
    }

	render() {
		strokeWeight(10);
		stroke(255);
		// point(this.pos.x, this.pos.y);
	}

	applyForce(acc) {
		this.acc.add(acc);
	}

	getDirection() {
		let magX = this.vel.x;
		let magY = this.vel.y;
		if (abs(magX) > abs(magY)) {
			if (magX > 0)
				return 1;
			else
				return 3;
		} else {
			if (magY > 0)
				return 2;
			else
				return 0;
		}
	}
}
