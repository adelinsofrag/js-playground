console.log("----- Home Work: -----");
  // Scrie un program care afișează numerele de la 1 la 10 folosind o buclă do-while.
var i = 1;
do {
  console.log(i);
  i++;
} while (i <= 10);


  //Scrie un program care afișează toate numerele pare între 0 și 20 folosind o buclă for.
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }


  //Scrie un program care citește două numere de la tastatură și afișează toate numerele între aceste două numere folosind o buclă for.
// Citim cele două numere de la tastatură
var numar1 = prompt("Introdu primul număr: ");
var numar2 = prompt("Introdu al doilea număr: ");

// Convertim input-urile de la string-uri la numere intregi
numar1 = parseInt(numar1);
numar2 = parseInt(numar2);

// Verificăm dacă numar1 este mai mic decât numar2
if (numar1 < numar2) {
  // Parcurgem fiecare număr între numar1 și numar2, și le afișăm
  for (var i = numar1; i <= numar2; i++) {
    console.log(i);
  }
} else {
  // Parcurgem fiecare număr între numar2 și numar1, și le afișăm
  for (var i = numar2; i <= numar1; i++) {
    console.log(i);
  }
}


    //Scrie un program care citește un șir de caractere de la tastatură și afișează numărul de vocale folosind o buclă for și condiția pentru a determina dacă un caracter este o vocală.
// Citim șirul de caractere de la tastatură
var sir = prompt("Introdu un șir de caractere: ");

// Inițializăm contorul de vocale
var numar_vocale = 0;

// Definim un șir cu toate vocalele
var vocale = "aeiouAEIOU";


// Parcurgem fiecare caracter din șir folosind o buclă for
for (var i = 0; i < sir.length; i++) {
  // Verificăm dacă caracterul curent este o vocală
  if (vocale.indexOf(sir[i]) !== -1) {
    // Dacă da, incrementăm contorul de vocale
    numar_vocale++;
  }
}

// Afisam numarul de vocale
console.log("Numărul de vocale din șirul introdus este: " + numar_vocale);


  // Scrie un program care citește un număr de la tastatură și afișează tabla înmulțirii pentru acel număr folosind o buclă for.
// Citim numarul de la tastatura
var numar = parseInt(prompt("Introdu un număr:"));

// Parcurgem tabla inmultirii pentru numarul citit
for (var i = 1; i <= 10; i++) {
  // Calculam produsul
  var produs = numar * i;
  
  // Afisam randul
  console.log(numar + " x " + i + " = " + produs);
}

  