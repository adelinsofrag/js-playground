// @search and replace
const str = "Hello, world!";
/* ---------------------------------- */
/*               indexOf              */
/* ---------------------------------- */
console.log(str.indexOf("o")); // Output: 4
/* ---------------------------------- */
/*             lastIndexOf            */
/* ---------------------------------- */
console.log(str.lastIndexOf("o")); // Output: 8
/* ---------------------------------- */
/*               search               */
/* ---------------------------------- */
console.log(str.search("world")); // Output: 7
/* ---------------------------------- */
/*              includes              */
/* ---------------------------------- */
console.log(str.includes("world")); // Output: true
/* ---------------------------------- */
/*              substring             */
/* ---------------------------------- */
console.log(str.substring(7, 12)); // Output: "world"
/* ---------------------------------- */
/*               replace              */
/* ---------------------------------- */
const newStr1 = str.replace("world", "John");
console.log(newStr1); // Output: "Hello, John!"
/* ---------------------------------- */
/*             replaceAll             */
/* ---------------------------------- */
const newStr2 = str.replaceAll("o", "a");
console.log(newStr2); // Output: "Hella, warld!"