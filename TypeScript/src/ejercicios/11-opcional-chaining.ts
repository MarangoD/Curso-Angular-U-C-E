/*
    ===== Código de TypeScript =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Fernando',
}

const pasajero2: Pasajero = {
    nombre: 'Melisa',
    hijos: ['Natalia', 'Gabriel']
}


function imprimeHijos(pasajero: Pasajero): void {
    const cuantosHijos: number = pasajero.hijos?.length || 0;
    console.log(cuantosHijos);
}


imprimeHijos(pasajero2);
imprimeHijos(pasajero1);