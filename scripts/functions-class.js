let response;

function displayAmount(ingredientAmount, ingredientText) {
  if (ingredientAmount) {
    response =
      "Grame de " + ingredientText + ": " + ingredientAmount + " grame";
  }
  return console.log(response);
}

function cookPasta(
  pastaAmount,
  oilAmount,
  garlicAmount,
  pepperAmount,
  saltAmount
) {
  displayAmount(pastaAmount, "pasta");
  displayAmount(oilAmount, "oil");
  displayAmount(garlicAmount, "garlic");
  displayAmount(pepperAmount, "pepper");
  displayAmount(saltAmount, "salt");
  return;
}

cookPasta(450, 20, 10, 5, 1);
