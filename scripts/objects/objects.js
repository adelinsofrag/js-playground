// Exercițiul 1: Calcularea sumei vârstelor
function calculeazaSumaVarstelor(studenti) {
  var sumaVarstelor = 0;
  var numarStudenti = 0;
  console.log("Input Studenti: ", studenti);

  for (var studentCurrent in studenti) {
    console.log("Student: ", studentCurrent);

    sumaVarstelor += studenti[studentCurrent].varsta;

    console.log(
      "Studentul actual are varsta: ",
      studenti[studentCurrent].varsta,
      "=> Suma varstelor: ",
      sumaVarstelor
    );
    // numarStudenti = numarStudenti + 1;
    numarStudenti += 1;
  }

  console.warn("Total studenti:", numarStudenti);

  return sumaVarstelor / numarStudenti;
}

// Exercițiul 2: Concatenarea numelor de familie
function concateneazaNumeFamilie(familii) {
  var numeFamilieConcatenat = "";

  for (var familie in familii) {
    numeFamilieConcatenat += familii[familie].numeTata + " " + familii[familie].numeMama + " ";
  }

  return numeFamilieConcatenat.trim();
}

// Exercițiul 3: Găsirea celui mai mare punctaj
function gasesteCelMaiMarePunctaj(elevi) {
  var celMaiMarePunctaj = 0;

  for (var elev in elevi) {
    if (elevi[elev].punctaj > celMaiMarePunctaj) {
      celMaiMarePunctaj = elevi[elev].punctaj;
    }
  }

  return celMaiMarePunctaj;
}

// Exercițiul 4: Verificarea existenței unui email într-un obiect
function verificaExistentaEmail(utilizatori, emailCautat) {
  for (var utilizator in utilizatori) {
    if (utilizatori[utilizator].email === emailCautat) {
      return true;
    }
  }

  return false;
}

//TODO: check this when doing Arrays
// Exercițiul 5: Calcularea numărului total de persoane dintr-un obiect
function calculeazaNumarTotalPersoane(angajati) {
  var numarTotalPersoane = 0;

  for (var departament in angajati) {
    numarTotalPersoane++;
  }

  return numarTotalPersoane;
}

// Exercițiul 6: Verificarea existenței unui departament într-un obiect
function verificaExistentaDepartament(companie, numeDepartament) {
  for (var departament in companie) {
    if (departament === numeDepartament) {
      return true;
    }
  }

  return false;
}






var candidati = {
  candidat1: { nume: "Maria", calificari: ["HTML", "CSS", "JavaScript"] },
  candidat2: { nume: "Alex", calificari: ["Java", "Python", "C++"] },
};




// Exercițiul 7: Verificarea existenței unei calificări într-un obiect
function verificaExistentaCalificare(candidati, calificareCautata) {
  // prima data:
  // trec prin toti candidatii ==> fiecare fiind un alt obiect
  for (var candidat in candidati) {
  
    // stochez intr-o variabile calificarile
    var calificari = candidati[candidat].calificari;
  
    // trec prin acea lista de calificari (stocata mai sus^)
    for (var i = 0; i < calificari.length; i++) {

      // daca am dat de o calificare care e identica cu parametrul venit ca input calificareCautata
      if (calificari[i] === calificareCautata) {
        // return true! ==> are skillul respectiv.
        return true;
      }
    }
  }

  // nu are acel skill.
  return false;
}


console.log(verificaExistentaCalificare(candidati, "JavaScript")); // Output: true











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
        varsta: 20,
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
