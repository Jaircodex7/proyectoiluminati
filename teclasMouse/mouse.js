document.addEventListener("mousedown", dibujarMause);

var cuadro = document.getElementById("area");
var papel = cuadro.getContext("2d");

function dibujarMause(evento)
{
    console.log(evento.y);
    
function dibujarLinea(color, xinicial ,yinicial ,xfinal ,yfinal,lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}
 
dibujarLinea("red",149 ,149,151,159,papel)
}