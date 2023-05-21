
//Ex 1 (Data Types, Operators, Arrays):
//Scrie un program care primește de la utilizator trei numere și le adaugă într-un array. Apoi, calculează suma numerelor din array și o afișează în consolă.
var numere = [];

var numar1 = Number(prompt("Introduceti primul numar: "));
numere.push(numar1);

var numar2 = Number(prompt("Introduceti al doilea numar: "));
numere.push(numar2);

var numar3 = Number(prompt("Introduceti al treilea numar: "));
numere.push(numar3);

var suma = 0;
for (var i = 0; i < numere.length; i++) {
  suma += numere[i];
}

console.log("Suma numerelor: " + suma);


//Ex 2 (If, Operators, Arrays):
//Scrie un program care primește un array de la utilizator și verifică dacă există vreun element negativ în array. Dacă da, afișează un mesaj corespunzător. Altfel, calculează media numerelor din array și o afișează în consolă.
var array = [];

var numarElemente = Number(prompt("Introduceti numarul de elemente in array: "));
for (var i = 0; i < numarElemente; i++) {
  var element = Number(prompt("Introduceti elementul " + (i + 1) + ": "));
  array.push(element);
}

var existaElementNegativ = false;
for (var j = 0; j < array.length; j++) {
  if (array[j] < 0) {
    existaElementNegativ = true;
    break;
  }
}

if (existaElementNegativ) {
  console.log("Exista cel putin un element negativ in array.");
} else {

    var suma = 0;
  for (var k = 0; k < array.length; k++) {
    suma += array[k];
  }
  var media = suma / array.length;
  console.log("Media numerelor din array: " + media);
}

//Ex 3 (Switch, Functions, Arrays):
//Scrie un program care primește un cod de țară de la utilizator și afișează numele țării respective, împreună cu o listă de capitale asociate. Folosește un obiect pentru a mapa codurile de țară la numele țărilor și la array-uri cu capitalele corespunzătoare.
var coduriTari = {
    RO: { nume: "România", capitale: ["București"] },
    US: { nume: "Statele Unite", capitale: ["Washington, D.C.", "New York"] },
    FR: { nume: "Franța", capitale: ["Paris"] },
    UK: { nume: "Regatul Unit", capitale: ["Londra"] },
    DE: { nume: "Germania", capitale: ["Berlin"] }
  };
  function getNumeTara(codTara) {
    switch (codTara) {
      case "RO":
        return "România";
      case "US":
        return "Statele Unite";
      case "FR":
        return "Franța";
      case "UK":
        return "Regatul Unit";
      case "DE":
        return "Germania";
      default:
        return null;
    }
  }
  
  function getCapitaleTara(codTara) {
    switch (codTara) {
      case "RO":
        return ["București"];
      case "US":
        return ["Washington, D.C.", "New York"];
      case "FR":
        return ["Paris"];
      case "UK":
        return ["Londra"];
      case "DE":
        return ["Berlin"];
      default:
        return null;
    }
  }
  
  function afiseazaNumeTaraSiCapitale(codTara) {
    var numeTara = getNumeTara(codTara);
    var capitaleTara = getCapitaleTara(codTara);
  
    if (numeTara && capitaleTara) {
      console.log("Numele țării: " + numeTara);
      console.log("Capitalele: " + capitaleTara.join(", "));
    } else {
      console.log("Cod de țară invalid.");
    }
  }
  
  var codTara = prompt("Introduceți un cod de țară: ");
  afiseazaNumeTaraSiCapitale(codTara);

//Ex 4 (For, Arrays, Objects):
//Scrie un program care primește de la utilizator un array de obiecte, fiecare obiect reprezentând un produs (cu proprietăți precum nume, preț, cantitate). Calculează valoarea totală a produselor (preț x cantitate) și o afișează în consolă.

function calculeazaValoareTotala(produse) {
    var valoareTotala = 0;
  
    for (var i = 0; i < produse.length; i++) {
      var produs = produse[i];
      var valoareProdus = produs.pret * produs.cantitate;
      valoareTotala += valoareProdus;
    }
  
    return valoareTotala;
  }
  
  var produse = [];
  
  var numarProduse = Number(prompt("Introduceți numărul de produse: "));
  
  for (var i = 0; i < numarProduse; i++) {
    var nume = prompt("Introduceți numele produsului: ");
    var pret = Number(prompt("Introduceți prețul produsului: "));
    var cantitate = Number(prompt("Introduceți cantitatea produsului: "));
  
    var produs = {
      nume: nume,
      pret: pret,
      cantitate: cantitate
    };
  
    produse.push(produs);
  }
  
  var valoareTotala = calculeazaValoareTotala(produse);
  console.log("Valoarea totală a produselor: " + valoareTotala);

//Ex 5 (While / Do-While, Functions, Arrays, Objects):
//Scrie un program care primește de la utilizator un array de obiecte reprezentând studenți (cu proprietăți precum nume, vârstă, note) și calculează media notelor pentru fiecare student. Afișează numele și media fiecărui student în consolă.

function calculeazaMedie(note) {
    var sumaNote = 0;
  
    for (var i = 0; i < note.length; i++) {
      sumaNote += note[i];
    }
  
    var medie = sumaNote / note.length;
    return medie.toFixed(2);
  }
  
  var studenti = [];
  
  var numarStudenti = parseInt(prompt("Introduceți numărul de studenți: "));
  
  var i = 0;
  while (i < numarStudenti) {
    var nume = prompt("Introduceți numele studentului: ");
    var varsta = parseInt(prompt("Introduceți vârsta studentului: "));
  
    var note = [];
    var numarNote = parseInt(prompt("Introduceți numărul de note: "));
  
    var j = 0;
    do {
      var nota = parseFloat(prompt("Introduceți nota: "));
      note.push(nota);
      j++;
    } while (j < numarNote);
  
    var student = {
      nume: nume,
      varsta: varsta,
      note: note
    };
  
    studenti.push(student);
    i++;
  }
  
  for (var i = 0; i < studenti.length; i++) {
    var student = studenti[i];
    var medie = calculeazaMedie(student.note);
  
    console.log("Nume: " + student.nume + ", Medie: " + medie);
  }