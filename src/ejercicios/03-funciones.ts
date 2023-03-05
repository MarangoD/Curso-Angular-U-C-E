/*
    ===== Código de TypeScript =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarArrow = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

// const resultado = multiplicar(20);

// console.log(resultado);

interface CharacterLOR {
    nameCharacter: string;
    healPoints: number;
    showHealPoints: () => void;
}

function healing(character: CharacterLOR, healX: number): void {
    character.healPoints += healX;
    console.table(character);
}

const newCharacter: CharacterLOR = {
    nameCharacter: 'Tom',
    healPoints: 50,
    showHealPoints() {
        console.log('Tom healpoints: ' + this.healPoints);
    }
}

healing(newCharacter, 27);
newCharacter.showHealPoints();