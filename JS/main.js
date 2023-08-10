alert("Ingrese el 'codigo' del producto que desea llevar. Para salir ingrese 'ESC'. ")

let seleccionarProducto = prompt(" (RAA) Remera Adidas azul - $4000 // (RAV) Remera Adidas verde - $4000 // (RAB) Remera Adidas blanco - $4500")
let seleccionarCantidad;
let total = 0
const cantidad = (cantidad, precio) => {
    return cantidad * precio
}
while (seleccionarProducto != "ESC") {
    switch (seleccionarProducto) {
        case "RAA":
            seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas azul, ingrese el numero de la cantidad que desea llevar."));
            total += cantidad(seleccionarCantidad, 4500);
            break;
        case "RAV":
            seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas verde, ingrese el numero de la cantidad que desea llevar."));
            total += cantidad(seleccionarCantidad, 4000);
            break;
        case "RAB":
            seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas blanco, ingrese el numero de la cantidad que desea llevar."));
            total += cantidad(seleccionarCantidad, 4500);
            break;
    }
    seleccionarProducto = prompt(" (RAA) Remera Adidas azul - $4000 // (RAV) Remera Adidas verde - $4000 // (RAB) Remera Adidas blanco - $4500")
}
alert("El total de la compra es de " + total + ", gracias por su visita vuelva pronto.");



