const today = new Date();
today.getMonth();

const person = {
  age: 20,
};

class Color {
  secolor = () => {
    console.log('red');
  };
}

const red = new Color();
red.secolor();

// This is type annotations
let apples = 5;
apples = 10;
let speed: string = 'fast';
let hasName: boolean = true;
let nothing: null = null;
let noth: undefined = undefined;

let now: Date = new Date();

// Array
let colors: string[] = ['Sidd', 'Tush'];
let myNumber: number[] = [1, 2, 3, 4];

class Car {}

let newCar: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

// Function
const func: (i: number) => void = (i: number) => {
  console.log(i);
};
