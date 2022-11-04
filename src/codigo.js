const canvas = document.getElementById("dibujo");
const color = document.getElementById("color");
const numero = document.getElementById("numero");
const btn = document.getElementById("enviar");

let lienzo = canvas.getContext("2d");
let ancho = 500;
let x, y;

// Escucha el evento de click en el boton
btn.addEventListener("click", (e) => {
  e.preventDefault(); // Elimina el comportamiento por defecto de refrescar la pagina
  canvas.width = canvas.width; // Limpia el canvas antes de dibujar
  // Extrae los valores de los inputs
  numeroLineas = numero.value;
  colorElegido = color.value;
  numero.value = "";
  //   Verificacion de numeroLineas Si es un numero negativo vuelvelo positivo
  if (numeroLineas < 0) {
    numeroLineas = numeroLineas * -1;
  }
  numeroLineas = numeroLineas / 4; // Divide el numero para que este el total de lineas creadas
  numeroDivisorio = ancho / numeroLineas; // Ajusta las lineas dependiendo de el numero de lineas
  //   Dibuja la figura
  dibujoEspecifico(colorElegido, numeroDivisorio, ancho);
});

/**
 * Funcion que dibuja una linea dado una cordenada de inicio y una de final
 * @type {Function}
 * @param {String} color Color con el que la linea estara coloreada
 * @param {Number} xInicial Valor de x donde iniciara la linea
 * @param {Number} yInicial Valor de y donde iniciara la linea
 * @param {NUmber} xFinal Valor de x donde terminara la linea
 * @param {Number} yFinal Valor de y donde terminara la linea
 * @return {Boolean} Si la linea se dibujo correctamente devuelve true
 */
// Funcion que dibuja linea con cordenadas especificadas
function dibujaLinea(color, xInicial, yInicial, xFinal, yFinal) {
  try {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial, yInicial);
    lienzo.lineTo(xFinal, yFinal);
    lienzo.stroke();
    lienzo.closePath();
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}

/**
 * Funcion que dibuja la figura en general dado sus parametros
 * @type {Function}
 * @param {String} color Color de las lineas
 * @param {Number} numeroDivisorio Numero de ajuste para que las lineas salgan uniformes
 * @param {Number} ancho Ancho del canvas
 * @return {void}
 */
// Dibuja con los parametros
function dibujoEspecifico(color, numeroDivisorio, ancho) {
  for (let contador = 0; contador <= numeroLineas; contador++) {
    // Esquina derecha inferior
    setTimeout(() => {
      y = numeroDivisorio * contador;
      x = numeroDivisorio * (contador + 1);
      dibujaLinea(color, 0, y, x, ancho);
    }, 1000);

    // Esquina izquierda inferior
    setTimeout(() => {
      x = ancho - contador * numeroDivisorio;
      y = numeroDivisorio * contador;
      dibujaLinea(color, ancho, y, x, ancho);
    }, 1000);

    // Esquina derecha superior
    setTimeout(() => {
      x = contador * numeroDivisorio;
      y = ancho - contador * numeroDivisorio;
      dibujaLinea(color, 0, y, x, 0);
    }, 1500);

    // Esquina izquierda superior
    setTimeout(() => {
      x = ancho - contador * numeroDivisorio;
      y = ancho - contador * numeroDivisorio;
      dibujaLinea(color, ancho, y, x, 0);
    }, 1500);
  }
}
