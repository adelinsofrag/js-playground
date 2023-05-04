// 1. Afișarea numerelor pare de la 1 la 10
var i = 1;

do {
  if (i % 2 == 0) {
    console.log(i);
  }
  i++;
} while (i <= 10);

// 2. Citirea unui număr întreg de la tastatură până când numărul citit este pozitiv
var numar;

do {
  numar = prompt("Introdu un număr întreg pozitiv:");
} while (numar <= 0);

console.log("Ai introdus numărul " + numar);