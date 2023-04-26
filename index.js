var arrayVacio = [];

var arrayNumeros = [0,1,2,3,4,5,6,7,8,9];

var arrayNumerosPares = [0,2,4,6,8];

var arrayBidimensional = [[0,1,2], ['a','b','c']];

function suma(a, b) {
    let result = a+b;
    return result;
}

function potenciacion(a, b) {
    return a**b;
}

function separarPalabras(string) {
    return string.split(' ');
}

function repetirString(string, number) {
    return string.repeat(number);
}

function esPrimo(num) {
    for(let i = (num - 1); i > 1; i--) {
        if(num % i == 0) {
            return false;
        }
    }
    return true;
}

function ordenarArray(array) {
    let result = array.sort();
    return result;
}

function obtenerPares(array) {
    let result = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            result.push(array[i]);
        }
    }

    return result;
}

function pintarArray(array) {
    let string = '[';

    for(let i = 0; i < array.length; i++) {
        if(i < array.length-1) {
            string = string+`${array[i]}, `;
        } else {
            string = string+`${array[i]}`;
        }
    }
    string = string+']';
    return string;
}

function arrayMapi(array, funcion) {
    result = [];
    for(let i = 0; i < array.length; i++) {
        result.push(funcion(array[i]));
    }
    return result;
}

// function eliminarDuplicados(array) {
//     let currentNumber = null;

//     for(let i = 0; i < array.length; i++) {
//         currentNumber = array[i];

//         for(let a = 0; a < array.length; a++) {
//             if(currentNumber === array[a]) {
//                 array.splice(a, 1);
//             }
//         }
//     }

//     return array;
// }

function eliminarDuplicados (array){
    let newArray=array.filter((element, index) => {
        if (array.indexOf(element) === index){
            return element;
        };
    });
    return newArray;
}

var arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

var holaMundo = ['Hola', 'Mundo'];

var loGuardoTodo =  ['hola', 'que', 23, 42.33, 'tal'];

var arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

function multiplicacion(a, b) {
    return a*b;
}

function division(a, b) {
    return a/b;
}

function esPar(numero) {
    if(numero % 2 == 0) {
        return true;
    } else {
        return false;
    }
}

var arrayFunciones = [function suma(a, b) {
    return a+b;
}, function resta(a, b) {
    return a-b;
}, function multiplicacion(a, b) {
    return a*b;
}];

function ordenarArray2(array) {
    return array.sort();
}

function obtenerImpares(array) {
    let result = [];

    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 !== 0) {
            result.push(array[i]);
        }
    }

    return result;
}

function sumarArray(array) {
    let result = 0;

    for(let i = 0; i < array.length; i++) {
        result += array[i];
    }

    return result;
}

function multiplicarArray(array) {
    let result = 1;

    for(let i = 0; i < array.length; i++) {
        result *= array[i];
    }

    return result;
}