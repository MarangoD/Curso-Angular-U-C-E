/*
    ===== Código de TypeScript =====
*/

export interface Producto {
    desc: string;
    precio: number;
}

const telefono: Producto = {
    desc: 'Nokia A1',
    precio: 150
}

const tablet: Producto = {
    desc: 'IPad A1',
    precio: 350
}


export function calcularIva(productos: Producto[], iva: number) {
    let total = 0;
    let totalSinIva = 0;

    productos.forEach(({ precio }) => {
        total += precio / 100 * iva;
        total += precio;
        totalSinIva += precio;
    });

    return [total, totalSinIva];
}

const [iva, total] = calcularIva([telefono, tablet], 21);

console.log('Total sin iva: ', total);
console.log('IVA: ', iva);