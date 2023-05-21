// 1. Verificare dacă un utilizator este major sau minor
var x = 18;
if (x >= 18) {
  console.log("Utilizatorul este major");
} else {
  console.log("Utilizatorul este minor");
}

// 2. Verificare dacă un număr este pozitiv sau negativ

var x = 2;
if (x > 0) {
  console.log("Numarul este pozitiv");
} else if (x < 0){
  console.log("Numarul este negativ");
}


// 3. Verificare dacă un utilizator este autentificat

var logged = false;

if (logged) {
  console.log("Utilizatorul este autentificat");
} else {
  console.log("Utilizatorul nu este autentificat");
}

// 4. Verificare rol user venit din input de la tastatura (NU AM PREA INTELES)

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