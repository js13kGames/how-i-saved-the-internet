// Décor bloquant ou non
// - Sprite
// - info
// Personnages
// - Sprite
// - 
// - Fonction de déplacement
// - Fonction de contact
// Items
// - Sprite
// - 

class Element {
	constructor(type, x, y) {
		this.type = type;
		this.x = x;
		this.y = y;

		this.dom = document.createElement('div');
		this.type.split(' ').forEach(t => this.dom.classList.add(t));
		
		this.dom.classList.add('sprite');

		this.dom.style.top = this.y * toDom() + 'px';
		this.dom.style.left = this.x * toDom() + 'px';

		this.isRendered = false;
	}

	move(deltaX, deltaY) {
		this.x += deltaX;
		this.y += deltaY;

		this.dom.style.top = this.y * toDom() + 'px';
		this.dom.style.left = this.x * toDom() + 'px';
	}

	touch(e) {}

	getHitbox() {
		return {
			x: this.x,
			y: this.y,
			w: 1,
			h: 1
		};
	}

	destroy() {
		this.dom.remove();
		remove(this);
	}
}

class Decor extends Element {
	constructor(type, x, y) {
		super(type, x, y);
		if (this.type.indexOf('stair') === -1) {
			this.blocking = true;
		}
	}

	touch(e) {
		if (this.type.indexOf('stair') === 0 && this.type.indexOf('flip') !== -1) {
			var hitbox = e.getHitbox();
			var center = hitbox.x+hitbox.w/2;
			if (Math.floor(center) === this.x) {
				var insideProgress = center - this.x;
				if (hitbox.y+hitbox.h > this.y + 1 - insideProgress) {
					e.move(0, -(hitbox.y+hitbox.h - (this.y + 1 - insideProgress)));
					if (e.isFalling) {
						e.falling(false);
					}
				}
			}
		} else if (this.type.indexOf('stair') === 0 && this.type.indexOf('flip') === -1) {
			var hitbox = e.getHitbox();
			var center = hitbox.x+hitbox.w/2;
			if (Math.floor(center) === this.x) {
				var insideProgress = 1 + this.x - center;
				if (hitbox.y+hitbox.h > this.y + 1 - insideProgress) {
					e.move(0, -(hitbox.y+hitbox.h - (this.y + 1 - insideProgress)));
					if (e.isFalling) {
						e.falling(false);
					}
				}
			}
		}
	}
}

function toDom() {
	return 16 * size;
}

class Character extends Element {
	constructor(type, x, y) {
		switch (type) {
			case 'player':
				super(type, x, y);
				break;
			case 'pnj':
				super(`pnj${randomPNJ()} pnj`, x, y);
				this.baseX = x;
				this.direction = Math.floor(Math.random() * 2) === 0 ? -1 : 1;
				break;
			default:
				throw new Error(`Type ${type} unknown for class Character`);
		}
	}

	currentMovement(movement) {
		var movements = ['walking-left', 'walking-right', 'hurted-left', 'hurted-right'];
		movements.forEach(m => {
			if (m !== movement) {
				this.dom.classList.remove(m);
			} else {
				this.dom.classList.add(m);
			}
		});

		if (movement === 'walking-left' || movement === 'hurted-right') {
			this.dom.classList.add('flip');
		} else if (movement === 'walking-right' || movement === 'hurted-left') {
			this.dom.classList.remove('flip');
		}
	}

	move(deltaX, deltaY) {
		super.move(deltaX, deltaY);

		if (this.type === 'player') {
			gameDom.style.left = parseFloat(gameDom.style.left.split('px')[0]) + (deltaX * toDom() * -1) + 'px';
			gameDom.style.top = parseFloat(gameDom.style.top.split('px')[0]) + (deltaY * toDom() * -1) + 'px';
		}
	}

	startJump() {
		if (this.jumping) {
			return;
		}

		this.jumping = (new Date()).getTime();
	}

	startHurt(direction) {
		if (this.hurted) {
			return;
		}

		this.hurted = (new Date()).getTime() + '-' + direction;
		this.currentMovement('hurted-'+direction);
	}

	endHurt() {
		this.hurted = false;
		this.currentMovement();
	}

	falling(isFalling) {
		if (isFalling) {
			this.dom.classList.add('falling');
		} else {
			this.dom.classList.remove('falling');
		}
		this.isFalling = isFalling;
	}

	getHitbox() {
		return {
			x: this.x + 0.25,
			y: this.y,
			w: 0.5,
			h: 1
		};
	}

	touch(e, direction) {
		if (e.type === 'player') {
			if (direction.indexOf('left') !== -1) {
				e.startHurt('left');
			} else {
				e.startHurt('right');
			}
			
		}
	}
}

function randomPNJ() {
	return Math.floor(Math.random() * 3);
}

class Item extends Element {
	constructor(type, x, y) {
		super(type, x, y);

		this.dom.classList.add('item');
	}

	touch(e) {
		if (e.type === 'player') {
			this.destroy();
			objectsFound.push(this.type);
		}
	}
}

class Wifi extends Element {
	constructor(x, y) {
		super('0,96,48,16');
	}
}
