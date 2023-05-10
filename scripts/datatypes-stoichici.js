console.log("Operatori aritmetici");
// Excercitiul 1 - aduna doua numere si afiseaja rez in consola
console.log("Adunarea a doua numere si afiseaja rez in consola");
var a = Number(prompt("Valoare numarului a"));
var b = Number(prompt("Valoare numarului b"));
console.log(a + b);

// Excercitiul 2 - media aritmetica
console.log("Media aritmetica a numerelor");
var c = Number(prompt("Valoare numarului c"));
var d = Number(prompt("Valoare numarului d"));
var e = Number(prompt("Valoare numarului e"));

var medie = (c + d + e)/3;

console.log(medie);
// -------------------------------------------//

console.log("Operatori de atribuire");
//Ex 1 - Atribuie o valoare la un numar
console.log("Atribuie o valoare la un numar"); 
var x;
x=5;
console.log(x);
//Ex 2 - Atribuie o valoare la un numar si adauga o alta valoare +=
console.log("Atribuie o valoare la un numar si adauga o alta valoare +="); 
var y = 10;
y += 2;
console.log(y);
// -------------------------------------------//

console.log("Operatori de comparare");
// Ex 1 - Comparare doua numere
console.log("Comparare doua numere");
var A = Number(prompt("Valoare numarului A"));
var B = Number(prompt("Valoare numarului B"));

if ( A >= B){
    console.log("A este mai mare sau egal cu B");
}else {
    console.log("B este mai mare sau egal cu A");
}

// Ex 2 - Este sau nu major
var varsta = Number(prompt("Introduceti varsta"));
if ( varsta >= 18){
    console.log("Este major");
}else{
    console.log("Persoana nu este majora")
}
//---------------------------------------------------//
console.log("Operatori logici");
// Ex 1 - Utilizare operato && 
var w = 2;
var q = 7;
var tast = Number(prompt("Valoarea de comparare"));
if(tast > w && tast < q){
    console.log("Este atevarat");
}else{
    console.log("Nu este adevarat");
}