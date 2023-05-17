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

/* ---------------------------------- */
/*           Other examples           */
/* ---------------------------------- */
// Problema 1: Verifică dacă numărul este par
function isEven(num) {
  // Verificarea asta:
  // if (num % 2 === 0) {
  //   return true;
  // } else {
  //   return false;
  // }
  // poate fi scrisa asa:
  return num % 2 === 0;
}

// Problema 2: Calculează suma celor două numere înmulțită cu 0.1
function sumMultipliedByPointOne(num1, num2) {
  return (num1 + num2) * 0.1;
}

// Problema 3: Calculează procentajul dintr-un număr
function calculatePercentage(num, percentage) {
  return (num * percentage) / 100;
}

// Problema 4: Află cel mai mare număr din cele trei primite
function findMax(num1, num2, num3) {
  let max = num1;

  if (num2 > max) {
    max = num2;
  }

  if (num3 > max) {
    max = num3;
  }

  return max;
}

// Problema 5: Calculează suma tuturor numerelor întregi de la 0 până la numărul dat
function sumIntegersUpTo(num) {
  let sum = 0;

  for (let i = 0; i <= num; i++) {
    sum += i;
  }

  return sum;
}

// Exemple de apelare a funcțiilor
console.log(isEven(4)); // true
console.log(sumMultipliedByPointOne(10, 20)); // 3
console.log(calculatePercentage(200, 25)); // 50
console.log(findMax(10, 20, 15)); // 20
console.log(sumIntegersUpTo(5)); // 15

// Asezare in local a unui grup de persoane
function aseazaLaMese(nrPers, locuriDisponibile, persLaMasa) {
  // daca e loc pentru toti
  if (nrPers > locuriDisponibile * persLaMasa) {
    console.log("Nu exista suficiente locuri pentru a aseza toate persoanele.");
    return;
  }

  var meseOcupate = (nrPers / persLaMasa) | 0; // Numarul de mese ocupate
  var locuriLibere = meseOcupate * persLaMasa - nrPers; // Numarul de locuri libere
  var meseRamas = meseOcupate - Math.floor(nrPers / persLaMasa); // Numarul de mese la care au ramas locuri libere

  console.log("Numarul de locuri libere: " + locuriLibere);
  console.log("Numarul de mese la care au ramas locuri libere: " + meseRamas);
}

aseazaLaMese(10, 5, 2);
aseazaLaMese(30, 15, 3);
aseazaLaMese(20, 10, 4);
aseazaLaMese(30, 10, 4);
aseazaLaMese(5, 2, 3);
aseazaLaMese(10, 5, 1);
aseazaLaMese(10, 5, 3);
aseazaLaMese(15, 5, 2);
