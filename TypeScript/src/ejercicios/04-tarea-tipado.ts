/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    heroName: string;
    heroAge: number;
    heroAddress: Address;
    showAddress: () => string;
}

interface Address {
    street: string;
    country: string;
    city: string;
}

const superHero = {
    heroName: 'Spiderman',
    heroAge: 30,
    heroAddress: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.heroName + ', ' + this.heroAddress.city + ', ' + this.heroAddress.country;
    }
}

const address = superHero.showAddress();

console.log(address);