/*
    ===== Código de TypeScript =====
*/
import { calcularIva, Producto } from "./06-destructuracion-funcion";


const carritoCompras: Producto[] = [

    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 333
    }
];


const [totalConIva, totalSinIva] = calcularIva(carritoCompras, 21);

console.log('Total con iva: ', totalConIva);
console.log('Total sin iva: ', totalSinIva);