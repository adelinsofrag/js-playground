// Exercițiul cu constructor functions:
function Masina(marca, model, anFabricatie) {
    this.marca = marca;
    this.model = model;
    this.anFabricatie = anFabricatie;

    // counter nrMasiniCreate.
    Masina.nrMasiniCreate+=1;
}

Masina.nrMasiniCreate = 0;

Masina.prototype.afiseazaDetalii = function() {
    console.log(`
        Marca: ${this.marca}, 
        Model: ${this.model}, 
        An de fabricatie: ${this.anFabricatie}
    `);
}

// creez 2 instante de Masina
const masina1 = new Masina("bmw", "Seria 3", "2020");
const masina2 = new Masina("audi", "A4", "2018");

// afisare detalii
masina1.afiseazaDetalii();
console.log(Masina);

const masina3 = new Masina("audi", "A3", "2014");
console.log(Masina);