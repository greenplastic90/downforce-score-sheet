export class Car {
	constructor(name) {
		this.name = name
		this.color = name === 'black' ? 'blackAlpha' : name
		this.bid = 0
	}
}
