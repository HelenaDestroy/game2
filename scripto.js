var vp = document.getElementById("land");
var papel = vp.getContext("2d");
var fondo = {
    url: "tile.png",
    cargaOk: false
}
fondo.objeto = new Image();
fondo.objeto.src = fondo.url;
fondo.objeto.addEventListener("load", cargarFondo);

var cerdito = {
    url: "cerdito.png",
    cargaOk: false
}
cerdito.objeto = new Image();
cerdito.objeto.src = cerdito.url;
cerdito.objeto.addEventListener("load", cargarCerdito);
function dibujar()
{
    if (fondo.cargaOk)
    {
        papel.drawImage (fondo.objeto, 0, 0);
    }
    if (cerdito.cargaOk)
        {  console.log("e");
            papel.drawImage(cerdito.objeto, 30, 30);
        }
    }

function cargarFondo(){
    fondo.cargaOk = true;
    dibujar();
    } 
function cargarCerdito(){
    cerdito.cargaOk = true;
    dibujar();
 }
 
var teclas = {
UP: 38,
DOWN: 40,
LEFT: 37,
RIGHT: 39
};

cerdito.objeto.addEventListener("keyup", moverCerdito);

moverCerdito(evento.keyCode)
{   xi = 10;
    yi = 10;
    var movimiento = 10;
if (evento.teclas.UP) 
{
   moverCerdito(xi, yi, x, (y - movimiento), papel);
    y = y - movimiento;
}
if (evento.teclas.DOWN)        
   moverCerdito(xi, yi, x, (y + movimiento), papel);
        y = y + movimiento;
}        
    if (evento.teclas.LEFT){
   moverCerdito(xi, yi, (x - movimiento), y, papel);
        x = x - movimiento;
    }
if (evento.teclas.RIGHT){
    moverCerdito(xi, yi, (x + movimiento), y, papel);
    x = x + movimiento;
 }






   
      
      
     
    
    


    // dejemos planteado el problema.


    // LOGRAR QUE EL cerdito SE MUEVA CON EL TECLADO.

    // CARGAR cerdito ADD EVENT Listener
    // ASOCIAR MOVIMIENTO DE TECLAS AL cerdito  -EL EVENTO DEBERIA INICIAR CON ALGUN BOTON-
    // VER QUE EL cerdito no deje la estela al andar

    // QUE NO MODIFIQUE VACAS Y Pollos