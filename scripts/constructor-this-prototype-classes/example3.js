class FormaGeometrica {
  static descriere() {
    console.log("Aceasta este o forma geometrica...");
  }
}

// afisez textul formei de baza
FormaGeometrica.descriere();

// Cerc extinde FormaGeometrica
class Cerc extends FormaGeometrica {
  constructor(r) {
    super();
    this.r = r;
  }

  calculeazaAria() {
    return Math.PI * this.r * this.r;
  }

  calculeazaPerimetru() {
    return 2 * Math.PI * this.r;
  }
}

// Patrat extinde FormaGeometrica
class Patrat extends FormaGeometrica {
  constructor(latura) {
    super();
    this.latura = latura;
  }

  calculeazaAria() {
    return this.latura * 2;
  }

  calculeazaPerimetru() {
    return this.latura * 4;
  }
}

const cerc = new Cerc(10);
console.log("Aria cercului:", cerc.calculeazaAria());
console.log("Perimetrul cercului:", cerc.calculeazaPerimetru());

const patrat = new Patrat(10);
console.log("Aria patratului:", patrat.calculeazaAria());
console.log("Perimetrul patratului:", patrat.calculeazaPerimetru());