class Masina {
    constructor (brand, model, an, culoare)  {
        this.brand = brand;
        this.model = model;
        this.an = an;
        this.culoare = culoare;
    }

    startMotor() {
        console.log('Pornire motor ... ');
    }

    stopMotor() {
        console.log('Oprire motor ... ');
    }
}

const redCar = new Masina('audi', 'a4', 2010, 'black');

redCar.startMotor();
redCar.stopMotor();

// ------------------------------
class Tesla extends Masina {
    constructor (brand, model, an, culoare, hasAI) {
        // super()
    }

    sayHello() {
        console.log('hello tesla user - ⚡️');
    }

    startMotor() {
        console.log('⚡️ electric');
    }
}

const newTesla = new Tesla("new tesla", 'model nou', 2022, 'white');
newTesla.sayHello();