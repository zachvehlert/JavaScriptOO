class Vehicle {
	constructor (year, make, model) {
		this.year = year;
		this.make = make;
		this.model = model;
	}
	honk = function () {
		return 'beep!';
	};
	toString = function () {
		return `This vehicle is a ${this.make} ${this.model} from ${this.year}`;
	};
}

class Car extends Vehicle {
	constructor (year, make, model) {
		super(year, make, model);
		this.numWheels = 4;
	}
}

class Motorcycle extends Vehicle {
	constructor (year, make, model) {
		super(year, make, model);
		this.numWheels = 2;
	}

	revEngine = function () {
		return 'VROOOOM!!!';
	};
}

class Garage {
	constructor (capacity) {
		this.vehicles = [];
		this.capacity = capacity;
	}
	add = function (vehicle) {
		if (this.vehicles.length < this.capacity && vehicle instanceof Vehicle) {
			this.vehicles.push(vehicle);
			return 'Vehicle added!';
		}
		if (vehicle instanceof Vehicle == false) {
			return 'Only vehicles are allowed in here!';
		}
		if (this.vehicles.length >= this.capacity) {
			return "Sorry, we're full!";
		}
	};
}

let bike = new Motorcycle('2021', 'Harley', 'Hog');
let garage = new Garage(2);
