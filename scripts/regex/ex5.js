// // Exercițiul 5:
// Cerință: Verificați dacă un șir de caractere este un număr de telefon valid (format: xxx-xxxx).
// Text: "123-4567"
// Caz de test:

// Textul: "123-4567" -> Rezultatul așteptat: true
// Textul: "12-34567" -> Rezultatul așteptat: false
const text = "123-4567";
const regex = /^\d{3}-\d{4}$/;

console.log(regex.test(text));
// Cerinta extra: modifica regula de mai sus astfel incat acest regex sa valideze formatul de 10 cifre: ex xxx xxx xxxx (077 123 1234)