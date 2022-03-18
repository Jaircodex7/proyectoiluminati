var d = document.getElementById("borradorsito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;
function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial,yinicial);
    lienzo.lineTo(xfinal,yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
while(l < lineas)
{
    yi = 10 * l;
    xf = 10 * (l + 1);
    dibujarLinea("red", 0, yi, xf, 300);
    l = l + 1;
    console.log("linea" + l)
}
dibujarLinea("blue", 1, 1, 1, 300);
dibujarLinea("blue", 1, 299, 299, 299);