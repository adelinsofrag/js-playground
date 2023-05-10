// 1. Verificare dacă un utilizator este major sau minor
var age = 18;

if (age >= 18) {
  console.log("Utilizatorul este major.");
} else {
  console.log("Utilizatorul este minor.");
}

// 2. Verificare dacă un număr este pozitiv sau negativ
var number = -5;

if (number > 0) {
  console.log(number + " este un numar pozitiv.");
} else if (number < 0) {
  console.log(number + " este un numar negativ.");
} else {
  console.log("Numarul este 0.");
}

// 3. Verificare dacă un utilizator este autentificat
var isLoggedIn = true;

if (isLoggedIn) {
  console.log("Utilizatorul este autentificat.");
} else {
  console.log("Utilizatorul nu este autentificat.");
}

// 4. Verificare rol user venit din input de la tastatura
var userRole = prompt();
var isOwner = userRole == "owner" ? true : false;
if(userRole == 'owner') {
  var isOwner = true;
} else {
  var isOwner = false;
}

var isSefRaion = userRole == "sef raion";
var isMarketing = userRole == "marketing";

var hasUpperMngmtRole = isOwner || isSefRaion || isMarketing;

if (hasUpperMngmtRole) {
  text = "organizez magazin local";
} else {
  text = "am cont";
}
