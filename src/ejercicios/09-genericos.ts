/*
    ===== Código de TypeScript =====
*/

function queTipoSoy<T>(arg: T) {
    return arg;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(100);
let soyArray = queTipoSoy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
let soyExplicito = queTipoSoy<string>('Hola Mundo');
