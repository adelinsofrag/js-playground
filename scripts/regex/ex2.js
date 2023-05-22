// Exercițiul 2:
// Cerință: Verificați dacă un șir de caractere conține cel puțin un număr.
// Text: "Hello123"
// Caz de test:

// Textul: "Hello123" -> Rezultatul așteptat: true
// Textul: "Hello" -> Rezultatul așteptat: false

const text = "Hello123";
const regex = /\d/;

console.log(regex.test(text));
