/* ---------------------------------- */
/*         +, -, /, * 2 numere        */
/* ---------------------------------- */
/* ---------------------------------- */
/*          min, max 2 numere         */
/* ---------------------------------- */
/* ---------------------------------- */
/*         par, impar 1 numar         */
/* ---------------------------------- */
/* ---------------------------------- */
/*         restul de plata a%b        */
/* ---------------------------------- */
/* ---------------------------------- */
/*        min --> max interval        */
/* ---------------------------------- */
/* ---------------------------------- */
/*   Fn care rezolva cazurile 👆🏻.     */
/*   param: care din operatii ruleaza     */
/*   by default: afiseaza tot        */
/* ---------------------------------- */

var introducere = "Hello! Urmeaza cantitatile retetei!";

/**
 * Reteta.
 * preia ingredientele - amount
 * apeleaza o functie care stie sa faca display de reteta
 *
 */
function cookPasta(nrPersoane) {
  introducere = "Buna ziua! mai jos ai reteta!";

  var pastaAmount = 100;
  var oilAmount = 5;
  var garlicAmount = 5;
  var pepperAmount = 5;
  var saltAmount = 2.5;

  console.log("-- Ingrediente: --", introducere);

  // O functie ajutatoare pentru afisare.
  function calcAmount(ingredientAmount, ingredientText) {
    var response = "default";

    if (ingredientAmount) {
      response = "👉🏻 Grame de" + " " + ingredientText + ": " + ingredientAmount + " " + "grame";
    }

    return response;
  }

  var pasta = calcAmount(pastaAmount, "paste");
  var oil = calcAmount(oilAmount, "ulei");
  var garlic = calcAmount(garlicAmount, "usturoi");
  var pepper = calcAmount(pepperAmount, "piper");
  var salt = calcAmount(saltAmount, "sare");
  var separator = " ";

  return console.log(
    introducere +
      separator +
      nrPersoane * pasta +
      separator +
      nrPersoane * oil +
      separator +
      nrPersoane * garlic +
      separator +
      nrPersoane * pepper +
      separator +
      nrPersoane * salt
  );
}

var retetaOutputPentru5Persoane = cookPasta();
