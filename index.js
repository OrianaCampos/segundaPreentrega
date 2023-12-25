
//Hice un simulador de calculos en pagos en cuotas.... 
class articulos {
  constructor(articulo, valor, modelo) {
    this.articulo = articulo;
    this.valor = valor;
    this.modelo = modelo;
  }
}

const heladera = new articulos("heladera", 850000, "mf6353");
const cocina = new articulos("cocina", 670000, "fr645");
const microondas = new articulos("microondas", 180000, "hs64");
const lavarropa = new articulos("lavarropas", 600000, "js87675");
const secarropas = new articulos("secarropas", 499999, "mr6496");
const ventiladorPie = new articulos("ventilador de pie", 50000, "t756");
const ventiladorTecho = new articulos("ventilador de techo", 143000, "pl6445");
const categorias = [heladera,cocina, microondas, lavarropa, secarropas, ventiladorPie, ventiladorTecho ];

function compra () {
const producto = prompt("Ingrese el producto a comprar");

/*
INTENTE MUCHAS FORMAS DE HACER QUE SI EN EL PROMPT INGRESAN "VENTILADOR" FUNCIONE, PERO ROMPO TODO O NO 
CONTINUA CON EL RESTO DE LA FUNCION, NO SABRIA COMO RESOLVERLO....EL RESTO FUNCIONA PERFECTO"*/

if (producto.includes ("ventilador")) {
  const ventiladorElegido= prompt("Seleccione si desea ventilador de pie o de techo: (pie/techo)")
  if (ventiladorElegido=== "pie"){producto=== ventiladorPie}
  else if (ventiladorElegido==="techo"){producto===ventiladorTecho}
  else {return}
  }


 else {
let valor = 0;
for (const categoria of categorias) {
  if (categoria.articulo === producto) {
    valor = categoria.valor;
    break;
  }
}

if (valor > 0) {
  alert ("El valor de " + producto + " es de $"+ valor);
} else {
  alert("Lo siento, no se encontró el producto " + producto )
  return;
  
}

let cantidadDeCuotas = parseInt (prompt ("Quiere abonar $" + valor + " en 1, 2, 3, 6 o 12 cuotas?"))

let cuotaAPagar = valor/cantidadDeCuotas

while (cantidadDeCuotas) {

  if (cantidadDeCuotas == "1" || cantidadDeCuotas == "2" || cantidadDeCuotas == "3" || cantidadDeCuotas == "6" || cantidadDeCuotas == "12" ) {
  alert ("Perfecto, calculemos el valor a abonar en cada cuota")
  } 

  else {alert ("No selecciono una cuota disponible")
     cantidadDeCuotas=false
     break }
     if (cantidadDeCuotas=="1"){alert ("Abonas " + cantidadDeCuotas + " pago de $ " + cuotaAPagar + " total.")
                                    break} 
          else {alert ("Abonas " + cantidadDeCuotas + " pagos de $ " + cuotaAPagar + " mensual.")
            break}
  
                  }}

function otroCalculo(){ 
let confirmacion = prompt ("Desea hacer otro calculo? (si/no)")
if (confirmacion=== "si") {compra()}
else {alert ("Gracias por confiar!")}
}
}
compra()

otroCalculo()
