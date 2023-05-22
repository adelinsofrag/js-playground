// Exercițiul 4:
// Cerință: Înlocuiți toate spațiile dintr-un șir de caractere cu underscore.
// Text: "Hello World"
// Caz de test:

// Textul: "Hello World" -> Rezultatul așteptat: "Hello_World"
const text = "Hello World";
const regex = /\s/g;

const newText = text.replace(regex, "_");
console.log(newText);
// Cerinta extra: modifica regexul de mai sus incat sa faca replace de salut. Alege tu unu sau daca te simti neinspirat transforma-l in Goodbye World