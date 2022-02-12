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
        { papel.drawImage(cerdito.objeto, 30, 30);
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
cerdito.objeto.addEventListener("keyup", dibujarCerdito);

function dibujarCerdito(evento){
if (evento.keyCode == teclas.UP){
    // cerdito.cargaOk;
    // dibujar(cerdito.objeto, 30, (y - 10));
    console.log ("arriba");
}
}

//    dibujarCerdito(xi, yi, x, (y - movimiento), papel);
//     y = y - movimiento;}

// if (teclas.UP) 
// {
  
   
//    dibujarCerdito(xi, yi, x, (y - movimiento), papel);
//     y = y - movimiento;
// }
// if (teclas.DOWN)        
//    dibujarCerdito(xi, yi, x, (y + movimiento), papel);
//         y = y + movimiento;
// }        
//     if (teclas.LEFT){
//     dibujarCerdito(xi, yi, (x - movimiento), y, papel);
//         x = x - movimiento;
//     }
// if (teclas.RIGHT){
//     dibujarCerdito(xi, yi, (x + movimiento), y, papel);
//     x = x + movimiento;
//  }

