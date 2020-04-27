class Car {
  static getSpecs(car) {
    console.table(
      `maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`,
    );
  }

  constructor({
    speed = 0,
    price,
    maxSpeed,
    isOn = false,
    distance = 0,
  }) {
    this.speed = speed;
    this._price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;

    return this._price;
  }

  turnOn(password) {
    if (password === 1111) {
      this.isOn = true;
    }

    return this.isOn;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;

    return this.isOn;
  }

  accelerate(value) {
    if (value + this.speed < this.maxSpeed) {
      this.speed += value;
    }

    return this.speed;
  }

  decelerate(value) {
    if (value + this.speed > 0) {
      this.speed -= value;
    }

    return this.speed;
  }

  drive(hours) {
    if (this.isOn === true) {
      this.distance += hours * this.speed;
    }

    return this.distance;
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn(1111);
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// // maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
