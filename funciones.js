/**
 * Permite sumar 2 numeros ingresados por el usuario
 * @param suma
 * @param {number} s1 - numero real
 * @param {number} s2 - numero real
 * @return suma de dos numeros reales
 */
let suma = () => {
    const s1 = Number(document.getElementById("numero1").value);
    const s2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(Number(s1)) || Number.isNaN(Number(s2))) {
        alert('Debe ingresar un numero valido')
    } else {
        document.getElementById("numero3").innerHTML = s1 + s2;
    }
}

/**
 * Permite restar 2 numeros ingresados por el usuario
 * @param resta
 * @param {number} r1 - numero real
 * @param {number} r2 - numero real
 * @return resta de dos numeros reales
 */
let resta = () => {
    const r1 = Number(document.getElementById("numero1").value);
    const r2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(Number(r1)) || Number.isNaN(Number(r2))) {
        alert('Debe ingresar un numero valido')
    } else {
        document.getElementById("numero3").innerHTML = r1 - r2;
    }
}

/**
 * Permite dividir 2 numeros ingresados por el usuario
 * @param divide
 * @param {number} d1 - numero real
 * @param {number} d2 - numero real
 * @return division de dos numeros reales
 */
let division = () => {
    const d1 = Number(document.getElementById("numero1").value);
    const d2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(Number(d1)) || Number.isNaN(Number(d2))) {
        alert('Debe ingresar un numero valido')
    } else {
        document.getElementById("numero3").innerHTML = d1 / d2;
    }
}

/**
 * Permite multiplicar 2 numeros ingresados por el usuario
 * @param multiplicacion
 * @param {number} m1 - numero real
 * @param {number} m1 - numero real
 * @return multiplicacion de dos numeros reales
 */
let multiplicacion = () => {
    const m1 = Number(document.getElementById("numero1").value);
    const m2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(Number(m1)) || Number.isNaN(Number(m2))) {
        alert('Debe ingresar un numero valido')
    } else {
        document.getElementById("numero3").innerHTML = m1 * m2;
    }
}

function dibujarCuadrado() {
    var canvas = document.getElementById('miCanvas');
    var ctx = canvas.getContext('2d');
    var tamaño = document.getElementById('tamañoCuadrado').value;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(10, 10, tamaño, tamaño);
}

