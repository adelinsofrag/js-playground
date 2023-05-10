/* ---------------------------------- */
/*         +, -, /, * 2 numere        */
/* ---------------------------------- */
// function sum(firstNumber, secondNumber) {
//   var sum = firstNumber + secondNumber;
//   return sum;
// }

// function subtraction(firstNumber, secondNumber) {
//   return firstNumber - secondNumber;
// }

// Operatie care
// Primeste primii 2 parametrii ca fiind numerele cu care facem operatie.
// Primeste al 3-lea parametru ca fiind tipul de operatie.
function calcOperation(firstNumber, secondNumber, operationType) {
  var result;

  switch (operationType) {
    case "+":
      result = firstNumber + secondNumber;
      break;
    case "-":
      result = firstNumber - secondNumber;
      break;
    case "/":
      result = firstNumber / secondNumber;
      break;
    case "*":
      result = firstNumber * secondNumber;
      break;
    default:
      result = "Nu ai ales tipul de operatie - vezi al 3-lea parametru!";
      break;
  }

  console.log("test");

  return result;
}

// testing.
// console.log(calcOperation(2, 3, '*'));

/* ---------------------------------- */
/*          max 2 numere         */
/* ---------------------------------- */
function maxBetween2Numbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return firstNumber;
  } else if (secondNumber > firstNumber) {
    return secondNumber;
  }

  return firstNumber + "=" + secondNumber;
}
/* ---------------------------------- */
/*         par, impar 1 numar         */
/* ---------------------------------- */
function isEven(number) {
  return number % 2 == 0;
}
function isOdd(number) {
  return number % 2 != 0;
}
/* ---------------------------------- */
/*         restul de plata a%b        */
/* ---------------------------------- */
function restOf2Numbers(firstNumber, secondNumber) {
  return firstNumber % secondNumber;
}
/* ---------------------------------- */
/*        min --> max interval        */
/* ---------------------------------- */
function showIntervalBetween2Numbers(min, max) {
  if (min > max) {
    return min + " > " + max;
  } else if (min == max) {
    return min + " = " + max;
  }

  var result = "";

  for (i = min; i <= max; i++) {
    result = String(result) + " " + i;
    // console.log(result, 'now i = :', i);
  }

  return result;
}
/* ---------------------------------- */
/*   Fn care rezolva cazurile 👆🏻.     */
/*   param: care din operatii ruleaza     */
/*   by default: afiseaza tot        */
/* ---------------------------------- */
function resolveOperation(whichOperationType, firstNumber, secondNumber) {
  var result;

  switch (whichOperationType) {
    case "+":
      result = calcOperation(firstNumber, secondNumber, "+");
      break;
    case "-":
      result = calcOperation(firstNumber, secondNumber, "-");
      break;
    case "/":
      result = calcOperation(firstNumber, secondNumber, "/");
      break;
    case "*":
      result = calcOperation(firstNumber, secondNumber, "*");
      break;
    case "rest":
      result = restOf2Numbers(firstNumber, secondNumber, whichOperationType);
      break;
    case "even":
      result = isEven(firstNumber);
      break;
    case "odd":
      result = isOdd(firstNumber);
      break;
    case "max":
      result = maxBetween2Numbers(firstNumber, secondNumber);
      break;
    case "interval":
      result = showIntervalBetween2Numbers(firstNumber, secondNumber);
      break;
    default:
      result = "Please add the first param - operation type!";
      console.warn(result);
      break;
  }

  return result;
}
/* ---------------------------------- */
/*        Exemplul 1 de la curs       */
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
