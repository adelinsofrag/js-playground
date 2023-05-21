//Scrie o funcție care primește ca argument o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 10. Funcția trebuie să returneze un mesaj diferit în fiecare caz.
function verificareNumar(valoare) {
    if (valoare < 10) {
        return "Valoarea este mai mica decat 10.";
    } else if (valoare > 10) {
        return "Valoarea este mai mare decat 10";
    } else {
        return "Valoarea este egala cu 10.";
    }
}
console.log(verificareNumar((5)));

//Scrie o funcție care primește ca argument un număr și verifică dacă acel număr este un număr prim. Funcția trebuie să returneze true dacă numărul este prim și false în caz contrar.

function numarPrim(numar) {
    if (numar <= 1) {
        return false;
    } 

    for (var i = 2; i<= numar / 2; i++) {
        if (numar % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(numarPrim(7));

//Scrie o funcție care primește ca argument un număr și calculează suma tuturor numerelor între 0 și acel număr.

function calculeazaSuma(numar) {
var suma = 0;

for (var i=0; i<=numar; i++) {
    suma += i;
}
return suma;
}

console.log(calculeazaSuma(3));


// 1. Scrie o funcție care primește un număr și returnează true dacă este par, altfel false.

function estePar(numar) {
    return numar % 2 === 0;
  }
  
  var numarAles = 7;
  var rezultat = estePar(numarAles);
  
console.log(rezultat);


//2. Scrie o funcție care primește două numere și returnează suma lor inmultita cu 0.1

function sumaInmultita(numar1, numar2) {
    var suma = numar1 + numar2;
    var rezultat = suma * 0.1;
    return rezultat;
  }
  
  var numar1 = 5;
  var numar2 = 8;
  var rezultat = sumaInmultita(numar1, numar2);
  
console.log(rezultat);


//3. Scrie o functie care calculeaza procentajul dintr-un numar. Procentajul si numarul se introduc ca parametrii.

function calculeazaProcentaj(numar, procentaj) {
    var rezultat = (procentaj / 100) * numar;
    return rezultat;
  }
  
  var numar = 500;
  var procentaj = 25;
  var rezultat = calculeazaProcentaj(numar, procentaj);
  
console.log(rezultat);

//4. Scrie o funcție care primește trei numere și returnează cel mai mare dintre ele.

function celMaiMare(numar1, numar2, numar3) {
    var maxim = numar1;
    if (numar2 > maxim) {
        maxim = numar2;
    }
    if (numar3 > maxim) {
        maxim = numar3;
    }
    return maxim;
}

var numar1 = 7;
var numar2 = 12;
var numar3 = 4;
var rezultat = celMaiMare(numar1, numar2, numar3);

console.log(rezultat);

//5. Scrie o funcție care primește un număr și returnează suma tuturor numerelor întregi de la 0 până la acel număr.

function sumaNumerelor(numar) {
    var suma = 0;
    for (var i = 0; i <= numar; i++) {
        suma += i;
    }
    return suma;
}

var numar = 5;
var rezultat = sumaNumerelor(numar);
console.log(rezultat);

//6. Scrie o funcție care primește un număr și returnează true dacă este prim, altfel false.

function estePrim(numar) {
    if (numar < 2) {
        return false;
    }
    for (var i =2; i < numar; i++) {
        if (numar % i === 0) {
            return false;
        }
    }
    return true;
}

var numar = 17;
var rezultat = estePrim(numar);

console.log(rezultat);

//7. Scrie o funcție care primește ca parametru o valoare numerica, iar apoi verifică dacă acea valoare este mai mare sau mai mică decât 0. Funcția trebuie să returneze un mesaj diferit în fiecare caz.

function verificaValoare(valoare) {
    if (valoare < 0) {
      return "Valoarea este mai mică decât 0";
    } else if (valoare > 0) {
      return "Valoarea este mai mare decât 0";
    } else {
      return "Valoarea este egală cu 0";
    }
  }
  
  var valoare1 = 10;
  var valoare2 = -5;
  
  console.log(verificaValoare(valoare1));  
  console.log(verificaValoare(valoare2)); 


//8.Scrie o functie care afiseaza toate numerele pare dintre un min si maxim dat ca parametru

function numerePare(min, max) {
    for (var numar = min; numar <= max; numar++) {
        if (numar % 2 === 0) {
            console.log(numar);
        }
    }
}

numerePare(1, 10);

//9. Scrie o functie care primeste 3 numere si afiseaza sir crescator cu acele numere.

function sirCrescator(numar1, numar2, numar3) {
    var crescator = [numar1, numar2, numar3];
    crescator.sort(function(a, b) {
        return a - b;
    });
    console.log(crescator);
}
sirCrescator (5, 2, 8);


//10. Scrie o functie care primeste 3 numere si afiseaza sir descrescator cu acele numere.

function afisareDescrescatoare (numar1, numar2, numar3) {
    var numere = [numar1, numar2, numar3];
    numere.sort(function(a, b) {
        return b - a;
    });
    console.log(numere);
}
afisareDescrescatoare(7, 2, 9);

//11. Scrie o functie care primeste 1 numar si afiseaza tabla inmultirii pentru acel numar.

function tablaInmultirii(numar) {
    for (var i = 1; i <= 10; i++) {
        var rezultat = numar * i;
        console.log(numar + " x " + i + " = " + rezultat);
    }
}
tablaInmultirii(5);

//12. Scrie o functie cu params: nr pers, locuri disponibile, nr pers la o masa. In functie de nr de pers si nr de mese, pune nr de pers la mese incat sa ocupi toate mese si afiseaza cate locuri libere si la cate mese au fost asezati au ramas (daca este cazul). Fa o verificare daca nr de pers are sau nu loc in localul respectiv. // 10 pers -> au loc -> asezi la masa, 30 pers -> nu au loc

//13. Scrie o functie care primeste 1 singur param. Acest parametru defineste care dintre functiile de mai sus este apelata. Afiseaza parametru primit, numele functiei apelate precum si raspunsul acelei functii.

function apelareFunctie(parametru) {
    console.log("Parametru primit: " + parametru);
  
    if (parametru === 1) {
      console.log("Numele functiei apelate: afisareDescrescatoare");
      afisareDescrescatoare(7, 2, 9);
    } else if (parametru === 2) {
      console.log("Numele functiei apelate: tablaInmultirii");
      tablaInmultirii(5);
    } else {
      console.log("Parametru nevalid. Nu există funcție asociată acestui parametru.");
    }
  }
  
apelareFunctie(1);

//14. Scrie o functie care primeste anul nasterii si calculeaza varsta in functie de anul curent.


//15. Scrie o functie care calculeaza anii unui animal de companie dat ca param (caine sau pisica / daca alegi si altceva, go for it).

function calculAniAnimalCompanie(specie) {
    var ani = 0;

    if (specie === "caine") {
        ani = 7; 
    } else if (specie === "pisica") {
        ani = 5;
    } else if (specie === "hamster") {
        ani = 2;
    } else {
        console.log("Specia animalului de companie nu este recunoscuta");
        return null;
    }
    return ani;
}

var specieCaine = "caine";
var aniCaine = calculAniAnimalCompanie(specieCaine);
console.log("Un " + specieCaine + " are aproximativ " + aniCaine + " ani umani.");

var speciePisica = "pisica";
var aniPisica = calculAniAnimalCompanie(speciePisica);
console.log("O " + speciePisica + " are aproximativ " + aniPisica + " ani umani.");

var specieHamster = "hamster";
var aniHamster = calculAniAnimalCompanie(specieHamster);
console.log("Un " + specieHamster + " are aproximativ " + aniHamster + " ani umani.");

var specieNecunoscuta = "dragon";
var aniNecunoscuta = calculAniAnimalCompanie(specieNecunoscuta);