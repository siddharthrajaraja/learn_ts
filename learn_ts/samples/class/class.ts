class Vehicle {
  constructor(public color: string) {}
  protected honk(): void {
    console.log('Beep');
  }
}

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log('Hekki');
  }
  startDrive(): void {
    this.drive();
    this.honk();
  }
}

const car = new Car(4, 'white');
car.startDrive();

const vehicle = new Vehicle('yellow');
vehicle.color;
console.log(vehicle.color);
