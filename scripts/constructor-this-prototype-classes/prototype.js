Array.prototype.suma = function () {
  let suma = 0;
  for (let i = 0; i < this.length; i++) {
    suma += this[i];
  }
  return suma;
};

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.suma());

String.prototype.inverseaza = function () {
  return this.split("").reverse().join("");
};

const text = "Hello, world!";
console.log(text.inverseaza());
