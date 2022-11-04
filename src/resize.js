window.addEventListener("DOMContentLoaded", () => {
  const contCanvas = document.querySelector(".container-canvas");
  const canvas = document.getElementById("dibujo");

  newDimensions();

  window.addEventListener("resize", () => {
    newDimensions;
  });

  function getDimensions() {
    const height = contCanvas.clientHeight;
    const width = contCanvas.clientWidth;
    return [height, width];
  }

  function newDimensions() {
    const [height, width] = getDimensions();
    canvas.setAttribute("width", width);
    canvas.setAttribute("height", height);
  }
});
