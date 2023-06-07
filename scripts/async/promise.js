/* ------------ // Ex 1: ------------ */
function handleResponseEx1(drinks) {
  var container = document.getElementById("new-content");
  container.innerHTML = "";

  drinks.forEach(function (drink) {
    var brandName = drink.brand;
    var flavor = drink.flavor;
    var drinkInfo = `${brandName} - ${flavor}`;

    container.innerHTML += "<p>" + drinkInfo + "</p>";

    // TODO: converteste intr-o lista neordonata
  });
}
/* ------------ // Ex 2: ------------ */
function handleResponseEx2(drinks) {
  var randomIndex = Math.floor(Math.random() * drinks.length);
  var randomDrink = drinks[randomIndex];

  var container = document.getElementById("new-content");
  container.innerHTML = `${randomDrink.brand} - ${randomDrink.description}`;
}
/* ------------ // Ex 3: ------------ */
function handleResponseEx3(drinks) {
  var promptInput = prompt("Introduceți un gust specific:");
  if (promptInput) {
    // Poate fi scris asa:
    // var filteredDrinks = drinks.filter((drink) => drink.flavor.toLowerCase() === promptInput.toLowerCase());
    // Sau varianta cu function anonima:
    var filteredDrinks = drinks.filter(function (drink) {
      return drink.flavor.toLowerCase() === promptInput.toLowerCase();
    });

    var container = document.getElementById("new-content");
    container.innerHTML = "";

    filteredDrinks.forEach(function (drink) {
      var brandName = drink.brand;
      var description = drink.description;
      var drinkInfo = `${brandName} - ${description}`;
      container.innerHTML += "<p>" + drinkInfo + "</p>";
    });
    // TODO: converteste in arrow function
  }
}
/* ------------ // Ex 4: ------------ */
function handleResponseEx4(drinks) {
  // modalitate de a sorta descrescator
  drinks.sort((a, b) => b.price - a.price);

  var container = document.getElementById("new-content");
  container.innerHTML = "";

  drinks.forEach(function (drink) {
    var brandName = drink.brand;
    var price = drink.price;
    var drinkInfo = `${brandName} - ${price} lei`;

    container.innerHTML += "<p>" + drinkInfo + "</p>";
  });
}
/* ------------ // Ex 5: ------------ */
function handleResponseEx5(drinks) {
  var promptInput = Number(prompt("Introduceți ID-ul băuturii:"));
  if (promptInput) {
    var container = document.getElementById("new-content");
    var message = `Băutura cu ID-ul ${promptInput} nu a fost găsită.`;

    var updatedDrink = drinks.find((drink) => drink.id === promptInput);

    if (updatedDrink) {
      updatedDrink.quantity -= 10;
      message = `Cantitatea băuturii ${updatedDrink.brand} a fost actualizată la ${updatedDrink.quantity} bucăți.`;
    }

    container.innerHTML = message;
  }
}

/* ---------------------------------- */
/*               Promise              */
/* ---------------------------------- */
function getData(url) {
  // functia asta returneaza o promisiune
  return new Promise(function (resolve, reject) {
    // using an Ajax request
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

function handleClick() {
  // fac request la o functie (vezi functia mai sus)
  getData("scripts/async/soda.json")
    // daca getData ==> resolve execut ce am in callback de la then()
    .then(function (drinks) {
      return handleResponseEx5(drinks);
    })
    // daca getData => rejected execit ce am in callback de la catch()
    .catch(function (error) {
      console.error(error);
    });
}

document.getElementById("cta-primary").addEventListener("click", handleClick);
