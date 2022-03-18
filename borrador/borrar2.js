var d = document.getElementById("tesla");
var lienzo = d.getContext("2d");
var l = 0;
var lineas = 40;
var yi , xf;
var yini , xfini;
var xi , yf;
var xini , yfini;
function dibujarLinea(color, xinicial ,yinicial ,xfinal ,yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}   
for(l = 0; l < lineas; l++)
{
    yi = 10 * l;
    xf = 10 *(l + 1);
    xfin = 400 - ( l* 10);
    xi = 10 * l;
    yf = 10 * (l + 1);
    xini = 400 - (l * 10);
    yfin = 10 * (l + 1);
    dibujarLinea("red", 0, yi, xf, 400);
    dibujarLinea("blue", 400, yi, xfin, 400);
    dibujarLinea("yellow", xi, 0, 400, yf);
    dibujarLinea("grey", xini, 0, 0, yfin );
    console.log("linea" + l);
}     
dibujarLinea("black", 1, 1, 1, 399);
dibujarLinea("black", 1, 399, 399, 399);
dibujarLinea("black", 399, 1, 399, 399);
dibujarLinea("black", 1, 1, 399, 1);







