/* 


let producto = 0;
let valorProducto = 0;
let cantidadProductos = 0;
let cantidadCuotas = 0;


class Pedido {
    constructor(producto, valorProducto, cantidadProductos, cantidadCuotas, iva) {
        this.producto = producto,
            this.valorProducto = valorProducto,
            this.cantidadProductos = cantidadProductos,
            this.cantidadCuotas = cantidadCuotas,
            this.subtotal = 0,
            this.envios = 0,
            this.cuotas = 0,
            this.total = 0
    }

    calcularSubtotal() {
        this.subtotal = this.valorProducto * this.cantidadProductos;
    }

    calcularIva() {
        return this.subtotal * 0.21
    }

    calcularEnvios() {
        if (this.subtotal >= 3500) {
            this.envios = 0;
        } else {
            this.envios = 650;
        }
    }

    calcularCuotas() {
        this.total = this.total / this.cuotas;
    }

    calcularTotal() {
        this.total = this.subtotal + this.envios + this.calcularIva();
    }
}

function pedidoProducto() {
    while (!producto || producto == 0 || producto > 4) {
        producto = parseInt(prompt("¿Que producto quiere comprar?:\n 1: Zapatillas($6500) \n 2: Remeras ($1800) \n 3: Pantalones ($4750)"));
    }

    switch (producto) {
        case 1:
            producto = "Zapatillas";
            valorProducto = 6500;
            break;
        case 2:
            producto = "Remeras";
            valorProducto = 1800;
            break;
        case 3:
            producto = "Pantalones";
            valorProducto = 4750;
            break;
    }

    while (!cantidadProductos) {
        cantidadProductos = parseInt(prompt("producto seleccionado: " + producto + "\n Introduzca la cantidad requerida.(Solo numeros)"));
    }

    return new Pedido(producto, valorProducto, cantidadProductos, cantidadCuotas)


}

    



alert ("Bienvenido a nuestra Tienda");

const pedido = pedidoProducto();

pedido.calcularSubtotal();
pedido.calcularIva();
pedido.calcularIva();
pedido.calcularEnvios();
pedido.calcularCuotas();
pedido.calcularTotal();


alert ("Detalle general del pedido: \n\n" + 
         "-" + pedido.producto + " x " + pedido.cantidadProductos + ": $" + pedido.valorProducto * pedido.cantidadProductos + "\n" + 
         "- IVA 21%: $" + pedido.calcularIva() + "\n" + 
         "- Costo de envio: $" + pedido.calcularEnvios +"\n\n" +
         "- Cantidad de cuotas: $" + pedido.calcularCuotas + "\n"+
         "- Total = $" + pedido.total
         );



console.log('paso')

const nombresDelPersonal = ["Agustin", "Walter", "Leonardo", "Julieta", "Juan", "Maria", "Pedro", "Miguel"]

let nuevoEmpleado = "";

do {
    if (nuevoEmpleado != "") {
        alert("El empleado ya esta en la nomina, ingrese uno nuevo")
    }

    nuevoEmpleado = prompt("Ingrese un nuevo nombre");


} while (nombresDelPersonal.indexOf(nuevoEmpleado) != -1)

alert("El nuevo empleado" + " " + nuevoEmpleado + " " + "ha sido registrado");

const personalDespedido = nombresDelPersonal.filter((posicion, numeros) => {
    return numeros === nombresDelPersonal.indexOf(posicion);
})

console.log(personalDespedido)


const materialesTrabajo = [

    { id: 01, objeto: "Notebook" },
    { id: 02, objeto: "Teclado" },
    { id: 03, objeto: "Monitor" },
    { id: 04, objeto: "Mouse" }
]

for (const materiales of materialesTrabajo) {
    console.log(materiales.id);
    console.log(materiales.materiales);

}

class objeto {
    constructor(nombre, precio) {
        this.nombre = nombre.toUpperCase();
        this.precio = precio.parseFloat(precio);
        this.adquirido = false;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}


const objetos = [];

const objeto1 = new objetos("microfono", "150");
objetos.push(objeto1);
objetos.push(new objeto("impresora", "275"));

console.log(objetos);

for (const objeto of objetos) {
    objeto.sumarIva();
}

console.log(objetos);

 */


let boton = document.getElementById("btn-planbasico");

 boton.addEventListener("click", respuestaclick);

 function respuestaclick(e) {
     console.log("Respuesta evento");
 }

 let boton2 = document.getElementById("btn-planenterprise");

 boton2-addEventListener("click", respuestaClick);

 function respuestaclick(e) {
     console.log ("registrado")
 } 

 