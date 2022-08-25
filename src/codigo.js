let canvas = document.getElementById("dibujo");
let lienzo = canvas.getContext("2d");
let ancho = 500;
// let colores = ["red", "pink", "blue", "yellow", "green"];
let x, y;

const color = document.getElementById("color");
const numero = document.getElementById("numero");
const btn = document.getElementById("enviar");

// Escucha el evento de click en el boton
btn.addEventListener("click", (e) => {
  // Limpia el canvas antes de dibujar
  canvas.width = canvas.width;
  // Elimina el comportamiento por defecto de refrescar la pagina
  e.preventDefault();
  //   Extrae los valores de los inputs
  numeroLineas = numero.value;
  colorElegido = color.value;
  numero.value = "";
  // color.value = '#fefefe';
  //   Verificacion de numeroLineas
  if (numeroLineas < 0) {
    numeroLineas = numeroLineas * -1;
  }
  // Divide el numero para que este el total de lineas creadas
  numeroLineas = numeroLineas / 4;
  // Ajusta las lineas dependiendo de el numero de lineas
  numeroDivisorio = ancho / numeroLineas;
  //   Dibuja la figura
  dibujoEspecifico(colorElegido, numeroDivisorio, ancho);
});

// Funcion que dibuja linea con cordenadas especificadas
function dibujaLinea(color, xInicial, yInicial, xFinal, yFinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xInicial, yInicial);
  lienzo.lineTo(xFinal, yFinal);
  lienzo.stroke();
  lienzo.closePath();
}

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
