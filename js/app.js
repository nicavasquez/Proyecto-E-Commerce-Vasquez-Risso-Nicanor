
let nombre = ""
const carrito = [];

// Bienvenida - funciones solicitarNombre y saludar
solicitarNombre(nombre);

function solicitarNombre(nombre) {
    nombre = prompt("Buenas tardes, por favor ingrese su nombre: ");
    saludar(nombre);
}

function saludar(nombre) {
    console.log(`Bienvenido ${nombre}, juntos vamos a seleccionar tu pedido.`);
}

// clase de productos con metodo de valorFinal (ver si ValorFinal lo dejo de usar)
class Producto {
    constructor (nombre, precio, descripcion, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.descripcion = descripcion;
        // this.cantidad = 0;
    }
}

// creo los distintos productos (puedo crear listas que contengan distintas clases de pizzas, hamburguesas , lomitos, etc)
const producto1 = new Producto ("Pizza", 1200, "Pizza especial");
const producto2 = new Producto ("Hamburguesa", 800, "Hamburguesa simple con fritas");
const producto3 = new Producto ("Lomito", 1500, "Lomo especial con fritas");
const producto4 = new Producto ("Sand. Milanesa", 900, "Sand. Completo con fritas");

console.log("Las opciones que podemos elegir son las siguientes: ");
console.log(`1) ${producto1.nombre}`);
console.log(`2) ${producto2.nombre}`);
console.log(`3) ${producto3.nombre}`);
console.log(`4) ${producto4.nombre}`);


// funcion para escoger opciones, cantidad, agregar productos dentro de carrito y calculo de valor total 
seleccionarOpcion();

function seleccionarOpcion () {

    let option = prompt(`Elija una opcion:
    1: Pizza
    2: Hamburguesa
    3: Lomito
    4: Sand. Milanesa
    5: No quiero nada.`);
    switch (option) {
        case "1":
            console.log("Has seleccionado Pizza");
            carrito.push(producto1);
            cantidad();
            agregarProducto();  
            break;
        case "2":
            console.log("Has seleccionado Hamburguesa");
            carrito.push(producto2);
            cantidad();
            agregarProducto();      
            break;
        case "3":
            console.log("Has seleccionado Lomito");
            carrito.push(producto3);
            cantidad();
            agregarProducto();        
            break;
        case "4":
            console.log("Has seleccionado Sand. Milanesa");
            carrito.push(producto4)
            cantidad();
            agregarProducto();       
            break;
        case "5":
            console.log("Has seleccionado No quiero nada.");        
            break;    

        default:
            console.log("No has iniciado una opción válida.");
            alert("No has iniciado una opción válida."); 
            alert("Selecciona una opción válida.");
            seleccionarOpcion();
            break;
}
}

// funcion para agregar productos, dentro de la funcion seleccionarOpcion()
function agregarProducto() {
    console.log("Si quieres agregar otro producto presiona 1, en caso contrario presiona 2.");
    valor = prompt(`Si quieres agregar otro producto presiona 1, en caso contrario presiona 2. Elija:
    1: Si
    2: No`);

    switch (valor) {
        case "1":
            console.log("Has seleccionado Si");
            seleccionarOpcion();
            

            break;
        case "2":
            console.log("Has seleccionado No");        
            // console.log(carrito)
            break;
            
        default:
            console.log("No has iniciado una opción válida.");
            alert("No has iniciado una opción válida."); 
            alert("Selecciona una opción válida.");
            agregarProducto();    
}
}

// funcion cantidad, para especificar la cantidad de un producto, funciona dentro de la funcion seleccionarOpcion()
function cantidad() {
    
    cant = prompt("Dime que cantidad quieres de este producto: ");
    console.log(`Has seleccionado ${cant} unidades.`);
    carrito.push(cant);
    
}
// funcion para calculo del monto total a pagar, a partir de la lista creada de productos.
let montoApagar = 0
function montoTotal (){
    // console.log(carrito);
    for (let index = 0; index < carrito.length; index=index+2) {
        const element = carrito[index];
        let resultado = element.precio * carrito[index+1];
        montoApagar = montoApagar + resultado;    
    }
console.log(`El monto a pagar es ${montoApagar}`);    
}
montoTotal();


