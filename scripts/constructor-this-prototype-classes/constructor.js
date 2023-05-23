function Carte(titlu, autor, anPublicatie) {
  this.titlu = titlu;
  this.autor = autor;
  this.anPublicatie = anPublicatie;
}

const carte1 = new Carte("Harry Potter", "J.K. Rowling", 1997);
console.log(carte1);

function Carte(titlu, autor, anPublicatie) {
  this.titlu = titlu;
  this.autor = autor;
  this.anPublicatie = anPublicatie;

  this.afiseazaDetalii = function () {
    console.log(`Titlu: ${this.titlu}, Autor: ${this.autor}, An publicație: ${this.anPublicatie}`);
  };
}

const carte2 = new Carte("Mândrie și prejudecată", "Jane Austen", 1813);
carte2.afiseazaDetalii();
