// Exercițiul 3:
// Cerință: Găsiți toate aparițiile numerelor într-un șir de caractere și returnați-le sub formă de array.
// Text: "Today is 2021-05-22"
// Caz de test:

// Textul: "Today is 2021-05-22" -> Rezultatul așteptat: ["2021", "05", "22"]
const text = "Today is 2021-05-22";
const regex = /\d+/g;

console.log(text.match(regex));
