/**
 * Permite sumar 2 numeros ingresados por el usuario
 * @method suma
 */
let suma = () => {
    const s1 = Number(document.getElementById("numero1").value);
    const s2 = Number(document.getElementById("numero2").value);

    if (Number.isNaN(Number(s1)) || Number.isNaN(Number(s2))) {
        alert('Debe ingresar un numero valido')
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
        alert('Debe ingresar un numero valido')
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
        alert('Debe ingresar un numero valido')
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
        alert('Debe ingresar un numero valido')
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

function dibujarRectaNumerica() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(10, 50);
    ctx.lineTo(990, 50);
    ctx.stroke();

    for (let i = 0; i <= 20; i++) {
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
let graficarLinea = () => {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    const puntoInicio = document.getElementById('numero1').value;
    const puntoFinal = document.getElementById('numero2').value;

    dibujarRectaNumerica();

    ctx.strokeStyle = 'red';
    ctx.beginPath();
    ctx.moveTo(10 + puntoInicio * 48, 45);
    ctx.lineTo(10 + puntoFinal * 48, 55);
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}


dibujarRectaNumerica();



