/* ---------------------------------- */
/*           Simple examples          */
/* ---------------------------------- */

/* -------- // Exercițiul 1: -------- */
console.log("----- Exercițiul 1: -----");

// RO: Concatenează două variabile de tip string și afișează rezultatul.
// EN: Concatenate two string variables and display the result.
var firstName = "John"; // RO: primul nume  EN: first name
var lastName = "Doe"; // RO: ultimul nume  EN: last name
var fullName = firstName + " " + lastName; // RO: concatenarea celor două variabile  EN: concatenating the two variables
console.log(fullName); // output: "John Doe"

/* -------- // Exercițiul 2: -------- */
console.log("----- Exercițiul 2: -----");

// RO: Adună două variabile de tip număr întreg și afișează rezultatul.
// EN: Add two integer variables and display the result.
var num1 = 10; // RO: primul număr întreg  EN: first integer
var num2 = 5; // RO: al doilea număr întreg  EN: second integer
var sum = num1 + num2; // RO: suma celor două numere  EN: sum of the two numbers
console.log(sum); // output: 15

/* -------- // Exercițiul 3: -------- */
console.log("----- Exercițiul 3: -----");

// RO: Calculează prețul total al unui produs, incluzând și taxa, și afișează rezultatul.
// EN: Calculate the total price of a product, including tax, and display the result.
var price = 9.99; // RO: prețul produsului  EN: product price
var taxRate = 0.2; // RO: rata taxei  EN: tax rate
var total = price + price * taxRate; // RO: calcularea prețului total  EN: calculating the total price
console.log(total); // output: 11.988

/* -------- // Exercițiul 4: -------- */
console.log("----- Exercițiul 4: -----");

// RO: Folosește operatorii booleani pentru a verifica dacă două variabile de tip boolean sunt ambele adevărate și afișează rezultatul.
// EN: Use boolean operators to check if two boolean variables are both true and display the result.
var isRaining = true; // RO: variabila booleană "este ploaie?"  EN: boolean variable "is it raining?"
var isSunny = false; // RO: variabila booleană "este soare?"  EN: boolean variable "is it sunny?"
var isRainyAndSunny = isRaining && isSunny; // RO: verificarea ambelor variabile booleane  EN: checking both boolean variables
console.log(isRainyAndSunny); // output: false

/* -------- // Exercițiul 5: -------- */
console.log("----- Exercițiul 5: -----");

// RO: Inițializează o variabilă de tip null și afișează valoarea acesteia.
// EN: Initialize a null variable and display its value.
var myNull = null; // RO: variabila nulă  EN: null variable
console.log(myNull); // output: null

/* ---------------------------------- */
/*      Interesting fact about JS     */
/* ---------------------------------- */
console.log("----- 🤔 Interesting fact about JS -----");

// Concatenare între string și int
var x = 10; // declară variabila x și atribuie valoarea 10 (un int)
var y = "20"; // declară variabila y și atribuie valoarea "20" (un string)

console.log(x + y); // afișează "1020" - JavaScript concatenează string-ul cu int-ul, în loc să adune valorile numerice

// Comparare între string și int
var x = 10; // declară variabila x și atribuie valoarea 10 (un int)
var y = "5"; // declară variabila y și atribuie valoarea "5" (un string)

console.log(x > y); // afișează true - JavaScript convertește valoarea lui y (un string) într-un int, pentru a putea face comparația
