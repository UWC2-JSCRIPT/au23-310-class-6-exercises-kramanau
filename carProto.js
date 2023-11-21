/**
 * Car class
 * @constructor
 * @param {String} model
 */
class Car{
    constructor(model){
        this.currentSpeed = 0;
        this.model = model;
    }

    accelerate(){
        this.currentSpeed += 1;
    }

    brake(){
        this.currentSpeed -= 1;
    }

    toString(){
        return `The ${this.model} is driving at speed ${this.currentSpeed}`;
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const honda = new Car('Honda');
honda.accelerate();
honda.accelerate();
honda.brake();
console.log(honda.toString());

/**
 * ElectricCar class
 * @constructor
 * @param {String} model
 */
class ElectricCar extends Car{
    constructor(model){
        super(model);
        this.motor = 'electric';
    }

    accelerate(){
        this.currentSpeed += 2;
    }

    toString(){
        return `The electric ${this.model} is driving at ${this.currentSpeed} speed.`;
    }
}
//  Create an instance, accelerate twice, brake once, and console log the instance.toString()
const tesla = new ElectricCar('Tesla');
tesla.accelerate();
tesla.accelerate();
tesla.brake();
console.log(tesla.toString());