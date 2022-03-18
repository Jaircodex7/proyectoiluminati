var texto = document.getElementById("tesla_lineas");
var boton = document.getElementById("tesla_boton");
boton.addEventListener("click", dibujarPorClick);
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var ancho = d.width;
var colorcito = "black";

function dibujarLinea(color, xinicial ,yinicial ,xfinal ,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
dibujarLinea(colorcito, 1, 1, 1, 399);
dibujarLinea(colorcito, 1, 399, 399, 399);
dibujarLinea(colorcito, 399, 1, 399, 399);
dibujarLinea(colorcito, 1, 1, 399, 1);

function dibujarPorClick()
{
    var l = 0;
    var lineas = parseInt(texto.value);
    var yi , xf;
    var xfin;
    var xi , yf;
    var xini , yfin;
    var espacio = ancho / lineas;

for(l = 0; l < lineas; l++)
{
    yi = espacio * l;
    xf = espacio *(l + 1);
    xfin = 400 - (l * espacio);
    xi = espacio * l;
    yf = espacio * (l + 1);
    xini = 400 - (l * espacio);
    yfin = espacio * (l + 1);
    dibujarLinea("red", 0, yi, xf, 400);
    dibujarLinea("blue", 400, yi, xfin, 400);
    dibujarLinea("yellow", xi, 0, 400, yf);
    dibujarLinea("green", xini, 0, 0, yfin );
}
}  


