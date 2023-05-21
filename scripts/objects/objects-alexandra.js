
//Exercițiul 1: Crearea și Manipularea Obiectului

//Creează un obiect numit person cu proprietățile name, age și city.
//Modifică proprietatea age a obiectului.
//Accesează și afișează proprietățile obiectului în consolă.
var person = {
    name: "Alexandra",
    age: 26,
    city: "Bucuresti"
};

person.age = 27;

console.log("Nume: " + person.name);
console.log("Varsta: " + person.age);
console.log("Oras: " + person.city);


//Exercițiul 2: Metode în Obiect

//Creează un obiect numit calculator cu o metodă numită sum care primește doi parametri și returnează suma lor.
//Folosește metoda sum pentru a calcula suma a două numere și afișează rezultatul în consolă.

var calculator = {
    sum: function(a, b) {
        return a + b;
    }
};

var numar1 = 5;
var numar2 = 3;
var rezultat = calculator.sum(numar1, numar2);
console.log("Suma numerelor " + numar1 + " si " + numar2 + " este: " + rezultat);

//Exercițiul 3: Obiecte Înăuntrul Obiectelor

//Creează un obiect numit car cu proprietățile make, model și year.
//Adaugă un obiect numit engine în interiorul obiectului car, care are proprietățile power și fuelType.
//Accesează și afișează proprietatea power a obiectului engine în consolă.
var car = {
    make: "Dacia",
    model: "Logan",
    year: 2021,
    engine: {
        power: 300,
        fuelType: "gasoline"
    }
};
console.log("Putere motor: " + car.engine.power + " CP");



//Exercițiul 4: Compararea Obiectelor

//Creează două obiecte book1 și book2 cu proprietățile title și author.
//Compară proprietățile obiectelor book1 și book2 și afișează un mesaj în consolă indicând dacă sunt egale sau nu.
var book1 = {
    title: "Atomic Habits",
    author: "James Clear",
}

var book2 = {
    title: "5 second rule",
    author: "Mel Robbins",
}

if (book1.title === book2.title && book1.author == book2.author) {
    console.log("Cele doua carti sunt identice");
} else {
    console.log("Cele doua carti sunt diferite");
}



// Exercițiul 1: Calcularea sumei vârstelor
var studenti = {
    student1: { nume: "John", varsta: 20 },
    student2: { nume: "Alice", varsta: 22 },
    student3: { nume: "Mark", varsta: 19 }
  };

function calculeazaSumaVarstelor(studenti) {
var sumaVarstelor = 0;

for (var student in studenti) {
    sumaVarstelor += studenti[student].varsta;
}
return sumaVarstelor;
}
var suma = calculeazaSumaVarstelor(studenti);
console.log("Suma vârstelor: " + suma);

// Exercițiul 2: Concatenarea numelor de familie
var familii = {
    familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
    familie2: { numeTata: "Radu", numeMama: "Georgescu" }
  };

function concateneazaNumeFamilie (familii) {
    var numeFamilieConcatenat = "";
    for (var familie in familii) {
        numeFamilieConcatenat += familii[familie].numeTata + " " + familii[familie].numeMama + " ";
    }
    return numeFamilieConcatenat.trim();
}


// Exercițiul 3: Găsirea celui mai mare punctaj
var elevi = {
    elev1: { nume: "Maria", punctaj: 80 },
    elev2: { nume: "Alex", punctaj: 95 },
    elev3: { nume: "Andrei", punctaj: 85 }
  };

function gasesteCelMaiMarePunctaj (elevi) {
    var celMaiMarePunctaj = 0;

    for (var elev in elevi) {
        if (elevi[elev].punctaj > celMaiMarePunctaj) {
            celMaiMarePunctaj = elevi[elev].punctaj;
        }
    }
    return celMaiMarePunctaj;
}

// Exercițiul 4: Verificarea existenței unui email într-un obiect
var utilizatori = {
    utilizator1: { nume: "John", email: "john@example.com" },
    utilizator2: { nume: "Alice", email: "alice@example.com" }
  };

function verificaExistentaEmail(utilizatori, emailCautat) {
    for (var utilizator in utilizatori) {
      if (utilizatori[utilizator].email === emailCautat) {
        return true;
      }
    }
  
    return false;
  }
  
// Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect
var angajati = {
    departament1: { nume: "John", varsta: 30 },
    departament2: { nume: "Alice", varsta: 35 },
    departament3: { nume: "Mark", varsta: 28 }
  };

function calculeazaNumarTotalPersoane(angajati) {
    var numarTotalPersoane = 0;
  
    for (var departament in angajati) {
      numarTotalPersoane++;
    }
  
    return numarTotalPersoane;
  }

// Exercițiul 6: Verificarea existenței unui departament într-un obiect
var companie = {
    departamentIT: { nume: "John", vechime: 5 },
    departamentVanzari: { nume: "Alice", vechime: 3 }
  };

function verificaExistentaDepartament(companie, numeDepartament) {
  for (var departament in companie) {
    if (departament === numeDepartament) {
      return true;
    }
  }

  return false;
}

// Exercițiul 7: Verificarea existenței unei calificări într-un obiect
var candidati = {
    candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
    candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] }
  };

function verificaExistentaCalificare(candidati, calificareCautata) {
    for (var candidat in candidati) {
      var calificari = candidati[candidat].calificari;
      for (var i = 0; i < calificari.length; i++) {
        if (calificari[i] === calificareCautata) {
          return true;
        }
      }
    }
  
    return false;
  }
  
  // Utilizare
  
  // sudenti = variabila
  var studenti = 
  // contine un obiect ca valoare
  {
    // key
    student1: 
    // valoare - un alt obiect
    { 
      // key : value
      nume: "John", 
      // key : value
      varsta: 20 
    },
    student2: { nume: "Alice", varsta: 22 },
    student3: { nume: "Mark", varsta: 19 },
  };
  console.log(calculeazaSumaVarstelor(studenti)); // Output: 61
  
  var familii = {
    familie1: { numeTata: "Popescu", numeMama: "Ionescu" },
    familie2: { numeTata: "Radu", numeMama: "Georgescu" },
  };
  console.log(concateneazaNumeFamilie(familii)); // Output: "Popescu Ionescu Radu Georgescu"
  
  var elevi = {
    elev1: { nume: "Maria", punctaj: 80 },
    elev2: { nume: "Alex", punctaj: 95 },
    elev3: { nume: "Andrei", punctaj: 85 },
  };
  console.log(gasesteCelMaiMarePunctaj(elevi)); // Output: 95
  
  var utilizatori = {
    utilizator1: { nume: "John", email: "john@example.com" },
    utilizator2: { nume: "Alice", email: "alice@example.com" },
  };
  console.log(verificaExistentaEmail(utilizatori, "john@example.com")); // Output: true
  
  var angajati = {
    departament1: { nume: "John", varsta: 30 },
    departament2: { nume: "Alice", varsta: 35 },
    departament3: { nume: "Mark", varsta: 28 },
  };
  console.log(calculeazaNumarTotalPersoane(angajati)); // Output: 3
  
  console.log(
    verificaExistentaDepartament(
      {
        departamentIT: { nume: "John", vechime: 5 },
        departamentVanzari: { nume: "Alice", vechime: 3 },
      },
      "departamentVanzari"
    )
  ); // Output: true
  
  var candidati = {
    candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
    candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] },
  };
  console.log(verificaExistentaCalificare(candidati, "JavaScript")); // Output: true