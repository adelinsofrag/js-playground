// var oldArray = [1,2,3,4];
// oldArray.functiaMeaPreferata();



Array.prototype.functiaMeaPreferata = function () {

  return console.log('Hello There!');

  // let suma = 0;

  // console.log('This:', this);

  // for (let i = 0; i < this.length; i++) {

  //   console.log("Indexul i:", i);
  //   console.log("Suma curenta:", suma);
    
  //   suma += this[i];

  //   console.log('Dupa incrementare, suma a devenit:', suma);
  // }
  // return suma;
};

const numbers = [1, 2, 3, 4, 5];

// numbers.functiaMeaPreferata();

String.prototype.inverseaza = function () {
  // tot ce e mai jos
  console.log("This:", this);

  var newThis = this.split("");
  console.log("This after split:", newThis);

  newThis.reverse();
  console.log("This after split & reverse:", newThis);
  
  return newThis.join("");
  
  // Se rezuma la:
  // return this.split("").reverse().join("");

};

const text = "Hello, world!";
console.log(text.inverseaza());
