Array.prototype.filtrareNrPare = function () {
  return this.filter(function (number) {
    return number % 2 == 0;
  });
};

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const output = input.filtrareNrPare();

console.log(output);
