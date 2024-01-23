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
 const categorias = [heladera, cocina, microondas, lavarropa, secarropas, ventiladorPie, ventiladorTecho];
 
 const input = document.querySelector(".input__buscador")
 const inputVentilador= document.querySelector(".pie__techo__input")
 const btnBuscarIndex = document.querySelector(".btn__buscar__index")
 const btnVentilador= document.querySelector(".btn__buscar__ventilador")
 const h2 = document.querySelector(".h2")
 const productosIndex= document.querySelector(".productos__index")
 const valorProducto= document.querySelector (".valor")
 let productos= ""
 let ventiladorElegido=""
 const agregarCarrito = document.querySelector(".agregar")
 const carrito= localStorage.getItem("carrito")

 input.addEventListener ("input" , (event)=> {
  productos=event.target.value
 })

btnBuscarIndex.addEventListener("click",()=> {
  const productoEncontrado = categorias.find(categoria => categoria.articulo.toLowerCase().includes(productos.toLowerCase()));
 
  if (productoEncontrado) {
    if (productoEncontrado.articulo.includes("ventilador")) {
      h2.innerText = "Seleccione si desea ventilador de pie o de techo: (pie/techo)";
      productosIndex.innerHTML= `
      <div class="productos__index__ventilador">
      <input class="pie__techo__input" type="text" placeholder="pie/techo" >
      <button class="btn__buscar__ventilador ">Buscar</button>
      </div>
      <div class="productos__index__ventilador">
      <section>
            <img class="img__productos__index" src="./assests.html/ventilador techo.jpg" alt="ventilador de techo">
        </section>
        <section >
            <img class="img__productos__index" src="./assests.html/ventiladorpie.jpg" alt="ventilador de pie">
        </section>
      </div>
      `
      
      inputVentilador.addEventListener ("input" , (event)=> {
        ventiladorElegido=event.target.value
        })
      btnVentilador.addEventListener("click",()=>{
        if (ventiladorElegido === "pie") {
          productoEncontrado.articulo = ventiladorPie;
          
        } else if (ventiladorElegido === "techo") {
          productoEncontrado.articulo = ventiladorTecho;
          
        } else {
          return;
      }
      })
       
       }
       
  }
  //hasta aca no supe como solucionar esto, ya que no puedo hacer que se elija techo o pie, pero segui

  let valor = productoEncontrado.valor
  /* 
 aca queria que tambien aparezca la foto del producto, intente con switch y no pude... y con if y else if tampoco pude

 if (productos=heladera){
   valorProducto.innerHTML = `
  <p>El valor de ${productos} es de $ ${valor}</p>
  <img class="img__productos__index" src="./assests.html/heladera.jpg" alt="Heladera con freezer">
  `
}
*/
  valorProducto.innerHTML = `
  <p>El valor de ${productos} es de $ ${valor}</p>
  <h2  class="h2">Desea agregarlo al carrito?</h2>
  <button class="agregar">SI</button>
  <button class="no-agregar">NO</button>
  `

  function agregarEvento() {
    const agregarCarrito = document.querySelector(".agregar");
    agregarCarrito.addEventListener("click", () => {
      localStorage.setItem("carrito", productos);
      valorProducto.innerHTML = `
  <p>Ya se añadio a tu carrito!</p>
  <h2  class="h2">Desea agregar algo más al carrito?</h2>
  <button class="agregar">SI</button>
  <button class="no-agregar">NO</button>
  `
    });
  }
  
  agregarEvento();
 console.log(carrito)
  }
  )


 
 /* function compra() {
  const producto = prompt("Ingrese el producto a comprar");
 
  const productoEncontrado = categorias.find(categoria => categoria.articulo.toLowerCase().includes(producto.toLowerCase()));
 
  if (productoEncontrado) {
    if (productoEncontrado.articulo.includes("ventilador")) {
      const ventiladorElegido = prompt("Seleccione si desea ventilador de pie o de techo: (pie/techo)");
 
      if (ventiladorElegido === "pie") {
        productoEncontrado.articulo = ventiladorPie;
      } else if (ventiladorElegido === "techo") {
        productoEncontrado.articulo = ventiladorTecho;
      } else {
        return;
      }
    }
 
    let valor = productoEncontrado.valor;
    alert("El valor de " + producto + " es de $" + valor);
 
    let cantidadDeCuotas = parseInt(prompt("Quiere abonar $" + valor + " en 1, 2, 3, 6 o 12 cuotas?"));
    let cuotaAPagar = valor / cantidadDeCuotas;
 
    while (cantidadDeCuotas) {
      if (cantidadDeCuotas == "1" || cantidadDeCuotas == "2" || cantidadDeCuotas == "3" || cantidadDeCuotas == "6" || cantidadDeCuotas == "12") {
        alert("Perfecto, calculemos el valor a abonar en cada cuota");
      } else {
        alert("No seleccionó una cuota disponible");
        cantidadDeCuotas = false;
        break;
      }
 
      if (cantidadDeCuotas == "1") {
        alert("Abonas " + cantidadDeCuotas + " pago de $ " + cuotaAPagar + " total.");
        break;
      } else {
        alert("Abonas " + cantidadDeCuotas + " pagos de $ " + cuotaAPagar + " mensual.");
        break;
      }
    }
  } else {
    alert("Lo siento, no se encontró el producto " + producto);
    return;
  }
 }
 
 function otroCalculo() {
  let confirmacion = prompt("Desea hacer otro calculo? (si/no)");
  if (confirmacion === "si") {
    compra();
  } else {
    alert("Gracias por confiar!");
  }
 }
 
 compra();
 otroCalculo();
 */