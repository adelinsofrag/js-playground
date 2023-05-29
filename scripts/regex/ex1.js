// Exercițiul 1:
// Cerință: Verificați dacă un șir de caractere conține doar litere mici.
// Text: "Hello"
// Caz de test:

// Textul: "Hello" -> Rezultatul așteptat: false
// Textul: "hello" -> Rezultatul așteptat: true

const text = "hello";
const regex = /^[a-z]+$/;

console.log(regex.test(text));
