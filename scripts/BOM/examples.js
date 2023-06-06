/* ---------------------------------- */
/*        // Exercițiul 1 - BOM       */
/* ---------------------------------- */
function ex1BOM() {
  console.log(window.location.href);

  setTimeout(function () {
    window.location.href = "https://www.itschool.ro";
  }, 5000);
}

/* ---------------------------------- */
/*       // Exercițiul 2 - JSON       */
/* ---------------------------------- */
function ex2JSON() {
  let product = {
    name: "Product Name",
    price: 10,
    availability: true,
  };

  let jsonString = JSON.stringify(product);
  console.log(jsonString);

  for (let key in product) {
    console.log(key + ": " + product[key]);
  }
}

/* ---------------------------------- */
/*       // Exercițiul 3 - AJAX       */
/* ---------------------------------- */
function ex3Ajax() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/scripts/BOM/source.txt", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      document.getElementById("paragraph").innerHTML = xhr.responseText;
    }
  };
  xhr.send();
}

/* ---------------------------------- */
/*     // Exercițiul 4 - Fetch API    */
/* ---------------------------------- */
function ex4FetchAPI() {
  fetch("/scripts/BOM/data.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

/* ---------------------------------- */
/*      // Exercițiul 5 - Timing      */
/* ---------------------------------- */
function ex5SetInterval() {
  setInterval(function () {
    console.log("This message is repeated every 2 seconds.");
  }, 2000);
}

function ex5SetTimeout() {
  setTimeout(function () {
    console.log("This message appears after a delay of 3 seconds.");
  }, 3000);
}

/* ---------------------------------- */
/*      // Exercițiul 6 - Window      */
/* ---------------------------------- */
function ex6Window() {
  console.log("Window width: " + window.innerWidth);
  console.log("Window height: " + window.innerHeight);

  let name = prompt("Please enter your name:");
  document.getElementById("paragraph").innerHTML = "Hello, " + name + "!";
}
