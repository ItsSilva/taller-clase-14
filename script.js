const fibonacci = [1, 1, 2, 3, 5, 8, 13, 21];

// Versión ES5.

// Funcion para determinar los numeros menores a ocho.
const funcionMenoresQueOcho = (arreglos) => {
    return arreglos.filter (numero => numero < 8);
};
// Funcion para determinar los numeros mayores o iguales a ocho.
const funcionMayoresQueOcho = (arreglos) => {
    return arreglos.filter (numero => numero >= 8);
};

// Version vieja de las funciones.

// Funcion para contar números.
function contarElementos (arreglos){
    return arreglos.length;
};
// Almacenamiento funciones.
const menoresQueOcho = funcionMenoresQueOcho(fibonacci);
const mayoresQueOcho = funcionMayoresQueOcho(fibonacci);

//Conteo numeros
const cantidadMenorQueOcho = document.getElementById("menoresQueOcho");
const cantidadMayorQueOcho = document.getElementById("mayoresQueOcho");

const elementosMenores = contarElementos(menoresQueOcho);
const elementosMayores = contarElementos(mayoresQueOcho);
// Inyectando resultados en el HTML
cantidadMenorQueOcho.textContent = "Existen {contarElementos(menoresQueOcho)} números menores que " + elementosMenores;
cantidadMayorQueOcho.textContent = "Existen {contarElementos(mayoresQueOcho)} números menores que " + elementosMayores;


