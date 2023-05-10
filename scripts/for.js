// 1. Afișarea numerelor pare de la 0 la 10
for (var i = 0; i <= 10; i += 2) {
  console.log(i);
}

// 2. Afișarea sumei numerelor de la 1 la 100 care sunt divizibile 10
var suma = 0;

for (var i = 1; i <= 100; i++) {
  if (i % 10 === 0) {
    suma += i;
  }
}

console.log("Suma este: " + suma);
