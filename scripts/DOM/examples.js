// Fac update la textul continut de un <p>
const paragraph = document.getElementById("paragraph");
paragraph.textContent = "The new content of the paragraph";

// Adaug un nou <p> la un eveniment de click pe un <button>
const ctaPrimary = document.getElementById("cta-primary");
const div = document.getElementById("first-impact-content");

ctaPrimary.addEventListener("click", function () {
  const newElement = document.createElement("p");
  newElement.textContent = "Newly added element";
  div.appendChild(newElement);
});

// Daca dau click pe acel <div> in care am adaugat un nou element <p>
// Ii va da remove
div.addEventListener("click", function (event) {
  if (event.target.tagName === "P") {
    div.removeChild(event.target);
  }
});

// Schimb stilul unui button la evenimentul de click pe acesta
const ctaSecondary = document.getElementById("cta-secondary");

ctaSecondary.addEventListener("click", function () {
  ctaSecondary.style.backgroundColor = "#C0FFEE";
  ctaSecondary.style.fontSize = "20px";
  ctaSecondary.style.color = "black";
  ctaSecondary.style.border = "none";
});
