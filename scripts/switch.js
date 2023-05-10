/* ---------------- - --------------- */
// 1. Convertirea unui număr de la 1 la 7 în ziua corespunzătoare a săptămânii
/* ---------------- - --------------- */
var numarZi = 5;
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
    console.log("Numarul nu este valid.");
}

console.log("Numarul " + numarZi + " este ziua de " + ziuaSaptamanii);

// Alternativa cu switch (true)
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
    console.log("Numarul nu este valid.");
}

/* ---------------- - --------------- */
// 2. Afișarea unui mesaj diferit în funcție de valoarea unei variabile
/* ---------------- - --------------- */
var variabila = "rosu";
var mesaj;

switch (variabila) {
  case "rosu":
    mesaj = "Aceasta este o culoare frumoasă!";
    break;
  case "verde":
    mesaj = "Aceasta este o culoare relaxantă.";
    break;
  case "albastru":
    mesaj = "Aceasta este o culoare calmantă.";
    break;
  default:
    mesaj = "Aceasta nu este o culoare cunoscută.";
}

console.log(mesaj);

/* ---------------- - --------------- */
// 3. Afișarea prețului unui produs în funcție de codul său
/* ---------------- - --------------- */
var codProdus = "A100";
var pret;

switch (codProdus) {
  case "A100":
    pret = 25;
    break;
  case "B200":
    pret = 50;
    break;
  case "C300":
    pret = 75;
    break;
  default:
    console.log("Codul produsului nu este valid.");
}

console.log("Produsul cu codul " + codProdus + " costă " + pret + " lei.");
