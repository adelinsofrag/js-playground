// 1. Scrie un program care afișează numerele de la 1 la 10 folosind o buclă do-while.

var i = 1;
do {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
} while (i<=10);



// 2. Citirea unui număr întreg de la tastatură până când numărul citit este pozitiv

var numar;
do {
  numar = prompt("Introdu un numar intreg pozitiv:");
} while (numar <=0);
console.log("Am introdus numarul " + numar);