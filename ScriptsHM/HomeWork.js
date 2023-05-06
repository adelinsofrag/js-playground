
console.log("----- Home Work: -----");

// Operatori aritmetici Exercitiul 1 
// Scrieți un program JavaScript care adună două numere și afișează rezultatul în consolă.
      var num1 = 5;
      var num2 = 10;
      var sum = num1 + num2;
      console.log(sum);

// Exercitiul 2
// Scrieți un program JavaScript care calculează media a trei numere și afișează rezultatul în consolă.
      var num1 = 4;
      var num2 = 8;
      var num3 = 12;
      var avg = (num1 + num2 + num3) / 3;
      console.log("Media celor trei numere este: " + avg);

// Operatori de atribuire Exercitiul 1 
// Scrieți un program JavaScript care adaugă 5 la o variabilă numită "x" și afișează rezultatul în consolă.
      var x = 10;
      x = x + 50;
      console.log("Valoarea lui x este acum: " + x);

// Exercitiul 2
// Scrieți un program JavaScript care atribuie valoarea 10 variabilei "y" și apoi adaugă 2 la aceasta utilizând operatorul "+=".
      var y = 10;
      y += 2;
      console.log(y);

// Operatori de comparare Exercitiul 1
// Scrieți un program JavaScript care compară două numere și afișează "A este mai mare decât B" dacă primul număr este mai mare decât al doilea, sau "B este mai mare sau egal cu A" dacă al doilea număr este mai mare sau egal cu primul.
   var a = 5;
   var b = 8;
   if (a>b) {
    console.log("A este mai mare decat B");
   }else {
    console.log("B este mai mare decat A");
   }

// Exercitiul 2
// Scrieți un program JavaScript care verifică dacă o variabilă numită "varsta" este mai mare sau egală cu 18 și afișează un mesaj corespunzător în consolă, în funcție de rezultat.
var varsta  = 19;
if (varsta >=18) {
    console.log("Persoana este adulta");
}else {
    console.log("Persoana este minora");
}

// Operatori logici Exercitiul 1 
// Scrieți un program JavaScript care verifică dacă două condiții sunt adevărate utilizând operatorul "&&" (și logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat.
var variabila1 = 6;
var variabila2 = 12;

if (variabila1 < 12 && variabila2 > 6) {
  console.log("Ambele condiții sunt adevărate.");
} else {
  console.log("Cel puțin una dintre condiții nu este adevărată.");
}

// Exercitiul 2
// Scrieți un program JavaScript care verifică dacă o condiție este adevărată utilizând operatorul "!" (nu logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat.
var estePloaieAfara = false;

if (!estePloaieAfara) {
  console.log("Nu plouă afara.");
} else {
  console.log("Plouă afara!");
}