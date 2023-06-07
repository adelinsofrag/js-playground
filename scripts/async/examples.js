function requestSodaDetailsWithAJAX() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "/scripts/async/soda.json", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    }
  };
  xhr.send();
}

function requestSodaDetailsWithFetchAPI() {
  fetch("/scripts/async/soda.json")
    .then((response) => response.json())
    .then((data) => console.log(data));
}

/* ---------------------------------- */
/*                ajax                */
/* ---------------------------------- */
// Creăm un obiect XMLHttpRequest
var xhttp = new XMLHttpRequest();

// Definim o funcție care va fi apelată la schimbarea stării obiectului XMLHttpRequest
xhttp.onreadystatechange = function () {
  // Verificăm dacă operațiunea a fost finalizată cu succes și răspunsul este gata
  if (this.readyState == 4 && this.status == 200) {
    // Afișăm în consolă mesajul primit în răspunsul AJAX
    console.log("Mesaj AJAX: " + this.responseText);
  }
};

// Deschidem o cerere GET către fișierul "soda.json"
xhttp.open("GET", "soda.json", true);

// Trimitem cererea
xhttp.send();

/* ---------------------------------- */
/*              fetch api             */
/* ---------------------------------- */
// Folosim funcția fetch pentru a face o cerere GET către fișierul "soda.json"
fetch("soda.json")
  // Folosim metoda then pentru a trata răspunsul primit
  .then((response) => response.text())
  .then((data) => {
    // Afișăm în consolă mesajul primit prin Fetch API
    console.log("Mesaj Fetch API: " + data);
  })
  // Folosim metoda catch pentru a trata eventualele erori
  .catch((error) => {
    console.log(error);
  });

/* ---------------------------------- */
/*               promise              */
/* ---------------------------------- */
// Cream o promisiune
var myPromise = new Promise(function (resolve, reject) {
  // Utilizăm funcția setTimeout pentru a simula o operațiune asincronă
  setTimeout(function () {
    // În cazul în care operațiunea a fost finalizată cu succes, apelăm metoda resolve
    resolve("Mesaj Promise: Operațiunea a fost finalizată cu succes!");
  }, 2000);
});

// Folosim metoda then pentru a trata rezolvarea promisiunii
myPromise
  .then(function (message) {
    // Afișăm în consolă mesajul rezultat din promisiune
    console.log(message);
  })
  .catch(function (error) {
    // Afișăm în consolă eventualele erori
    console.log(error);
  });

/* ---------------------------------- */
/*             async-await            */
/* ---------------------------------- */
// Funcția wait așteaptă un anumit număr de milisecunde
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Funcția displayMessage este marcată cu async pentru a utiliza await
async function displayMessage() {
  // Folosim await pentru a aștepta 2000 de milisecunde
  await wait(2000);

  // Afișăm în consolă un mesaj după așteptare
  console.log("Mesaj async-await: Așteptarea s-a încheiat!");
}

// Apelăm funcția displayMessage pentru a o rula
displayMessage();
