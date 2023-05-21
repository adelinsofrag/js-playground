/* ---------------- - --------------- */
// 1. Convertirea unui număr de la 1 la 7 în ziua corespunzătoare a săptămânii
/* ---------------- - --------------- */

var numarZi = 7;
var ziuaSaptamanii;

switch (numarZi) {
  case 1: 
   ziuaSaptamanii = "Luni";
  break;
  case 2:
    ziuaSaptamanii = "Marti";
  break;
  case 3:
    ziuaSaptamanii = "Miercuri";
  break;
  case 4:
    ziuaSaptamanii = "Joi";
  break;
  case 5:
    ziuaSaptamanii = "Vineri";
  break;
  case 6:
    ziuaSaptamanii = "Sambata";
  break;
  case 7:
    ziuaSaptamanii = "Duminica";
  break;
  default:
    console.log("Numarul nu este valid");
}

console.log("Numarul " + numarZi + " este ziua de " + ziuaSaptamanii);

// Alternativa cu switch (true)

var numarZi = 7;
var ziuaSaptamanii;

switch (true) {
case numarZi == 1:
  ziuaSaptamanii = "Luni";
break;
case numarZi == 2:
  ziuaSaptamanii = "Marti";
break;
case numarZi == 3:
  ziuaSaptamanii = "Miercuri";
break;
case numarZi == 4:
  ziuaSaptamanii = "Joi";
  break;
case numarZi == 5:
  ziuaSaptamanii = "Vineri";
  break;
case numarZi == 6:
  ziuaSaptamanii = "Sambata";
  break;
case numarZi == 7:
  ziuaSaptamanii = "Duminica";
  break;
default:
  console.log ("Numarul nu este valid.");
}
console.log("Numarul " + numarZi + " este ziua de " + ziuaSaptamanii);


/* ---------------- - --------------- */
// 2. Afișarea unui mesaj diferit în funcție de valoarea unei variabile
/* ---------------- - --------------- */

var variabila = "pisica";
var mesaj;

switch (variabila) {
  case "pisica":
    mesaj = "Aceasta este o pisica";
  break;
  case "caine":
    mesaj = "Acesta este un caine";
  break;
  case "hamster":
    mesaj = "Acesta este un hamster";
  break;
  default:
    mesaj = "Nu este un animal";
}

console.log(mesaj);

/* ---------------- - --------------- */
// 3. Afișarea prețului unui produs în funcție de codul său
/* ---------------- - --------------- */

var pretProdus; 
var codProdus = "ABC22";

switch (codProdus) {
  case "ABC22":
    pretProdus = 10;
  break;
  case "ABC25":
    pretProdus = 5;
  break;
  case "ABC55":
    pretProdus = 8;
  break;
  default:
    console.log("Codul produsului nu exista");
}

console.log("Produsul cu codul " + codProdus + " costa " + pretProdus + " lei ");