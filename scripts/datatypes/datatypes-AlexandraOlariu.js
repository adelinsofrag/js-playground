//Operatori aritmetici 
//1) Scrieți un program JavaScript care adună două numere și afișează rezultatul în consolă
var numar1 = 50;
var numar2 = 50;
var sum = numar1 + numar2;
console.log(sum);

//2) Scrieți un program JavaScript care calculează media a trei numere și afișează rezultatul în consolă
var numar1 = 5;
var numar2 = 10;
var numar3 = 15;
var medie = numar1 + numar2 + numar3 * 3;
console.log(medie);


//Operatori de atribuire
//1) Scrieți un program JavaScript care adaugă 5 la o variabilă numită "x" și afișează rezultatul în consolă
var x = 10;
x = x + 5;
console.log(x);

//2) Scrieți un program JavaScript care atribuie valoarea 10 variabilei "y" și apoi adaugă 2 la aceasta utilizând operatorul "+="
var y = 10;
y += 2;
console.log(y);


//Operatori de comparare
//1) Scrieți un program JavaScript care compară două numere și afișează "A este mai mare decât B" dacă primul număr este mai mare decât al doilea, sau "B este mai mare sau egal cu A" dacă al doilea număr este mai mare sau egal cu primul
var numar1 = 20;
var numar2 = 10;
if (numar1 > numar2) {
    console.log("A este mai mare decat B");
} else {
    console.log("B este mai mare sau egal cu A");
}

//2) Scrieți un program JavaScript care verifică dacă o variabilă numită "varsta" este mai mare sau egală cu 18 și afișează un mesaj corespunzător în consolă, în funcție de rezulta
var varsta = 25;
if (varsta>= 18) {
    console.log("Aveti peste 18 ani");
} else {
    console.log("Aveti 18 ani");
}

//Operatori logici
//1) Scrieți un program JavaScript care verifică dacă două condiții sunt adevărate utilizând operatorul "&&" (și logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat
var x = 10;
var y = 20;
if (x > 0 && y > 0) {
    console.log ("Conditiile sunt adevarate");
} else {
    console.log ("Cel putin o conditie nu este adevarata");
}

//2) Scrieți un program JavaScript care verifică dacă o condiție este adevărată utilizând operatorul "!" (nu logic) și afișează un mesaj corespunzător în consolă, în funcție de rezultat
var x = false;
if (!x) {
    console.log ("Variabila x este falsa");
} else {
    console.log ("Variabila x este adevarata");
}