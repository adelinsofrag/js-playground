// 1. Afișarea numerelor de la 1 la 10

var numar = 1;

while (numar < 11) {
  console.log(numar);
  numar++;
}


// 2. Afișarea elementelor unui array până la găsirea unui element specific

var listaCumparaturi = ["mere", "pere", "ciocolata", "iaurt", "paine"];
var index = 0;

while (listaCumparaturi[index] != "paine") {
  console.log(listaCumparaturi[index]);
  index++;
}


// 3. Găsirea celui mai mic divizor comun a două numere

var numar1 = 12;
var numar2 = 18;
var divizor = 2;
var cmmmdc;

while (divizor <= numar1 && divizor <= numar2) {
  if (numar1 % divizor == 0 && numar2 % divizor == 0) {
    cmmmdc = divizor;
  }
  divizor++;
}

console.log(
  "Cel mai mic divizor comun al numerelor " + numar1 + " și " + numar2 + " este " + cmmmdc
);

