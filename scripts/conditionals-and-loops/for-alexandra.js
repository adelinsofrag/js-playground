// 1. Scrie un program care afișează toate numerele pare între 0 și 20 folosind o buclă for.

for (var i = 0; i <= 20; i += 2) {
  console.log(i);
}


// 2. Afișarea sumei numerelor de la 1 la 100 care sunt divizibile 10

var suma = 0;

for (var i = 1; i <=100; i++) {
  if (i % 10 === 0) {
    suma += i;
  }
}

console.log("Suma este: " + suma);

//Scrie un program care citește două numere de la tastatură și afișează toate numerele între aceste două numere folosind o buclă for.
//Scrie un program care citește un șir de caractere de la tastatură și afișează numărul de vocale folosind o buclă for și condiția pentru a determina dacă un caracter este o vocală.
//Scrie un program care citește un număr de la tastatură și afișează tabla înmulțirii pentru acel număr folosind o buclă for.

