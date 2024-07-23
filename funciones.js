/**
 * Permite sumar 2 numeros ingresados por el usuario
 * @method suma
 */
let suma = () => {
    const s1 = Number(document.getElementById("numero1").value);
    const s2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(s1) || Number.isNaN(s2)) {
        alert('Debe ingresar un número válido');
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';
    } else if (s1 > 5 || s2 > 5 || s1 < 0 || s2 < 0) {
        alert('Los números deben ser mayores o iguales a 0 y menores o iguales a 5');
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';
    } else {
        document.getElementById("numero3").innerHTML = s1 + s2;
    }
}

/**
 * Permite restar 2 numeros ingresados por el usuario
 * @method resta
 */
let resta = () => {
    const r1 = Number(document.getElementById("numero1").value);
    const r2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(Number(r1)) || Number.isNaN(Number(r2))) {
        alert('Debe ingresar un número valido')
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';
    } else if (r1 > 5 || r2 > 5 || r1 < 0 || r2 < 0) {
        alert('Los números deben ser mayores o iguales a 0 y menores o iguales a 5');
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';
    } else {
        document.getElementById("numero3").innerHTML = r1 - r2;
    }
}

/**
 * Permite dividir 2 numeros ingresados por el usuario
 * @method division
 */
let division = () => {
    const d1 = Number(document.getElementById("numero1").value);
    const d2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(Number(d1)) || Number.isNaN(Number(d2))) {
        alert('Debe ingresar un número valido')
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';
    } else if (d1 > 5 || d2 > 5 || d1 < 0 || d2 < 0) {
        alert('Los números deben ser mayores o iguales a 0 y menores o iguales a 5');
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';
    } else {
        document.getElementById("numero3").innerHTML = d1 / d2;
    }
}

/**
 * Permite multiplicar 2 numeros ingresados por el usuario
 * @method multiplicacion
 */
let multiplicacion = () => {
    const m1 = Number(document.getElementById("numero1").value);
    const m2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(Number(m1)) || Number.isNaN(Number(m2)) || Number > 5) {
        alert('Debe ingresar un número valido')
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';
    } else if (m1 > 5 || m2 > 5 || m1 < 0 || m2 < 0) {
        alert('Los números deben ser mayores o iguales a 0 y menores o iguales a 5');
        document.getElementById('numero1').value = '';
        document.getElementById('numero2').value = '';
    } else {
        document.getElementById("numero3").innerHTML = m1 * m2;
    }
}

/**
 * Permite dibujar una recta numerica
 * @method dibujarRecta
 */

let dibujarRectaNumerica = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.moveTo(10, 50);
    ctx.lineTo(490, 50);
    ctx.stroke();

    for (let i = 0; i <= 10; i++) {
        ctx.fillText(i, 10 + i * 48, 70);
        ctx.moveTo(10 + i * 48, 45);
        ctx.lineTo(10 + i * 48, 55);
        ctx.stroke();
    }
}

/**
 * Permite graficar una linea en la recta numerica
 * @method graficarLinea
 */
let lineaRojaDibujada = false; // Variable para controlar si la línea roja ya se dibujó

let graficarLinea = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const puntoInicio = parseFloat(document.getElementById('numero1').value);
    const puntoFinal = parseFloat(document.getElementById('numero2').value);

    // Ordenar los números (puntoInicio debe ser el más pequeño)
    const numMin = Math.min(puntoInicio, puntoFinal);
    const numMax = Math.max(puntoInicio, puntoFinal);
    const tot = numMin + numMax;

    // dibuja la recta numerica en negro solo si la linea roja no se dibujo todavia
    if (!lineaRojaDibujada) {
        dibujarRectaNumerica();
    }

    // Función para dibujar la línea roja
    const dibujarLineaRoja = (x) => {
        ctx.strokeStyle = 'red';
        ctx.beginPath();
        ctx.moveTo(10 + numMin * 48, 50);
        ctx.lineTo(x, 50);
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.closePath();
    };

    const animarLinea = (x) => {
        if (x <= 10 + tot * 48) {
            dibujarLineaRoja(x);
            x += 1; // Incrementa la posición
            setTimeout(() => animarLinea(x), 10);
        } else {
            lineaRojaDibujada = true;
        }
    };

    animarLinea(10 + numMin * 48);
}
