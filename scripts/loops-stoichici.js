
// Afisarea numerelor de la 1 pana la 10 do-while
var a = 1;

do{
  console.log(a);
  a++;
}while( a<= 10);



// 1. Afișarea numerelor pare de la 0 la 20
for (var i = 0; i <= 20; i += 2) {
    console.log(i);
  }
  
  // 2. Afișarea numerelor dintre doua numere
  
  var a = Number(prompt("Valoarea primul numar"));
  var b = Number(prompt("Valoarea primul numar"));
  
  if (a < b){
    for(i = a++; i < b; i++){
      console.log(i);
    }
  }else if(a > b){
    for(i = b++; i < a; i++){
      console.log(i);
    }
  }else {
    console.log("Numerele sunt egale");
  }
  
  //  3. Afisare aparitia vocalelor dintrun sir de caractere
  
  let caractere = prompt("Introduceti sirul de caracte");
  var count = 0;
  
  for (i = 0; i <= caractere.length; i++){
    if(caractere[i]=='a' || caractere[i]=='ă'|| caractere[i]=='Ă' || caractere[i]=='â' || caractere[i]=='Â' || caractere[i]=='î' || caractere[i]=='Î' || caractere[i]=='e' || caractere[i]=='i' || caractere[i]=='o' || caractere[i]=='u' || caractere[i]=='A' || caractere[i]=='E' || caractere[i]=='I' || caractere[i]=='O' || caractere[i]=='U'){
      count++;
    }
  }1
  console.log(count);
  
  // 4. Tabla inmultirii a unui numar
  
  var a = Number(prompt("Introduceti valoarea numarului"));
  for(i=0; i<10; i++){
    console.log(a*i);
  }