const calculator = {
  rezultat: 0,

  aduna: function (numar) {
    this.rezultat += numar;
  },

  scade: function (numar) {
    this.rezultat -= numar;
  },

  afiseazaRezultat: function () {
    console.log(`Rezultat: ${this.rezultat}`);
  },
};

calculator.aduna(5);
calculator.scade(3);
calculator.afiseazaRezultat();

function Persoana(nume, varsta) {
  this.nume = nume;
  this.varsta = varsta;
}

Persoana.prototype.prezintaTe = function () {
  console.log(`Nume: ${this.nume}, Vârsta: ${this.varsta} ani`);
};

const persoana1 = new Persoana("John Doe", 30);
persoana1.prezintaTe();
