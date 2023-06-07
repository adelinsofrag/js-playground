function getData(url) {
  return new Promise(function (resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.onload = function () {
      if (xhr.status === 200) {
        resolve(JSON.parse(xhr.responseText));
      } else {
        reject(new Error("Network request failed. Status: " + xhr.status));
      }
    };
    xhr.onerror = function () {
      reject(new Error("Network request failed."));
    };
    xhr.send();
  });
}

document.getElementById("cta-primary").addEventListener("click", 
// cand am dat click, am o functionalitate care e asincrona
async function () {
  // incerc sa execut blocul de aici
  try {

    // in variabila "drinks"
    // astept cu "await" raspunsul din getData, 
    // getData fiind on functie care imi returneaza o promisiune
    var drinks = await getData("scripts/async/soda.json");
    console.table(drinks);

    // dupa ce promisiunea mi-a raspuns - de aici si await-ul
    // merg mai departe, ca si cum as fi un cod sync 
    // Ex 1:
    var container = document.getElementById("paragraph");
    container.innerHTML = "";
    drinks.forEach(function (drink) {
      var brandName = drink.brand;
      var flavor = drink.flavor;
      var drinkInfo = brandName + " - " + flavor;
      container.innerHTML += "<p>" + drinkInfo + "</p>";
    });
    
  } 
  // daca am o eroare -> prin eroare si o pun in consola
  catch (error) {
    console.error(error);
  }
});
