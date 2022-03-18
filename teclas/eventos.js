var teclas={
    UP: 38,
    RIGHT: 39,
    DOWN: 40 ,
    LEFT: 37
};
document.addEventListener("keydown", dibujarTeclado);

var cuadro = document.getElementById("areaDeDibujo");
var papel = cuadro.getContext("2d");
var x = 5;
var y = 5;

dibujarLinea("black", x -1 , y-1 , x + 1 , y+1 , papel);
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
function dibujarTeclado(teclado)
{
    var colorcito = "orange";
    var mover = 1;
    switch(teclado.keyCode)
    {
        case teclas.UP:
            dibujarLinea(colorcito,x,y,x,y-mover,papel );
            y = y - mover;
        break;
        case teclas.DOWN:
            dibujarLinea(colorcito,x,y,x,y+mover,papel );
            y = y + mover;
        break;
        case teclas.LEFT:
            dibujarLinea(colorcito,x,y,x-mover,y,papel );
            x = x - mover;
        break;
        case teclas.RIGHT:
            dibujarLinea(colorcito,x,y,x+mover,y,papel );
            x = x + mover;
        break;
        default:
            alert("solo puedes mover las flechas por ahora");
        break;    
    }
}





