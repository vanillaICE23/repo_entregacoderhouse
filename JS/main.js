const productos = [
    { nombre : "harina", precio : 50},
    { nombre : "agua", precio : 20},
    { nombre : "galletas", precio : 30},
    { nombre : "desodorante", precio : 10},
];

let carrito = []

let seleccion = prompt("¿ Deseas comprar algun producto ? si o no.")

while (seleccion != "si" && seleccion != "no"){
    alert("por favor ingrese si o no")
    seleccion = prompt ("¿ Deseas comprar algun producto ? si o no.")
}


if(seleccion == "si"){
    alert("a continuacion nuestra lista de productos")
    let listaMercado = productos.map ((producto) => producto.nombre + " " + producto.precio + "$");
    alert(listaMercado.join(" - "))
}else if(seleccion == "no"){
    alert("gracias por su visita.")
}


while(seleccion != "no"){
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

if (producto == "harina" || producto == "agua" || producto == "galletas" || producto == "desodorante"){
    switch (producto){
        case "harina":
            precio = 50
            break;
        case "agua":
            precio = 20
            break;
        case "galletas":
            precio = 30
            break;
        case "desodorante":
            precio = 10
            break;
        default:
        break;                
        }
    let unidades = parseInt(prompt("Cuantas unidades desea llevar?"))  
    
    carrito.push({producto, unidades, precio})
    console.log (carrito)
    } else {
    alert("no tenemos ese producto")   
    }

    seleccion = prompt("desea seguir comprando ?")


    while (seleccion === "no"){
        alert("gracias por su compra, vuela pronto.")
        carrito.forEach((carritoFinal) => {
            console.log (`producto : ${carritoFinal.producto}, unidades : ${carritoFinal.unidades}, precio total a pagar por producto: ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }

}
const total = carrito.reduce ((acc,el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar x su compra es : ${total}`)


// class Animal {
//     constructor(especie, nombre, edad,) {
//         this.especie = especie
//         this.nombre  = nombre;
//         this.edad = edad;
        
//     }  
// }
// const Samu = new Animal ("perruno", "Samu", "10");
// const Manolo = new Animal ("perruno", "Samu", "10");
// const Pata = new Animal ("perruno", "Pata", "10");


// alert("Ingrese el 'codigo' del producto que desea llevar. Para salir ingrese 'FIN'. ")



// let total = 0;

// const cantidad = (cantidad, precio) => {
//     return cantidad * precio
// }

// let comprar = prompt("Desea comprar algún producto en nuestra tienda? Si - No");
// let seleccionarProducto = prompt(" (RAA) Remera Adidas azul - $4000 // (RAV) Remera Adidas verde - $4000 // (RAB) Remera Adidas blanco - $4500 // ¨FIN¨ para salir.");

// while(comprar != "No") {
//     switch (seleccionarProducto) {
//         case "RAA":
//             seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas azul, ingrese el numero de la cantidad que desea llevar."));
//             total += cantidad(seleccionarCantidad, 4500);
                       
//             break;
//         case "RAV":
//             seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas verde, ingrese el numero de la cantidad que desea llevar."));
//             total += cantidad(seleccionarCantidad, 4000);
//             break;
//         case "RAB":
//             seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas blanco, ingrese el numero de la cantidad que desea llevar."));
//             total += cantidad(seleccionarCantidad, 4500);

//             break;
//     }
//     comprar = prompt("Desea seguir comprando? Si - No");

    
    
// }
// alert("El total de la compra es de " + total + ", gracias por su visita vuelva pronto.");



// var arrayAnimales = [];
// do{
//     var Ingreso = prompt("Ingrese la especie del animal que desea adoptar o fin para salir.")
//     if (Ingreso === fin || Ingreso === FIN || Ingreso === Fin){
//         break;
//     }else{
//         especie = Ingreso;
//         var especie = prompt("Ingrese la especie  del animal");
//         var nombre = prompt ("Ingrese el nombre del animal");
//         var raza = prompt ("Ingrese la raza del animal");
//         var edad = prompt ("Ingrese la edad");
//         var color = prompt ("Ingrese el color");
//         var tamanio = prompt ("Ingrese el tamaño");
//         arrayAnimales.push(new Animal ("perruno", "Samu", "retriever", "10", "amarillo", "mediano"))
//     }
// }
// while (Ingreso != fin || Ingreso != FIN || Ingreso != Fin)

// console.log(arrayAnimales);

// for (var Animales of arrayAnimales){
//     document.write("La especie que ustede lleva es" + Animal.especie)
//     document.write("El nombre de su nuevo amigo es" + Animal.nombre)
//     document.write("La raza de su animal es" + Animal.raza)
//     document.write("La edad de su nueva mascota es" + Animal.edad)
//     document.write("El color es" + Animal.color)
//     document.write("El tamaño es" + Animal.tamanio)
// }

// console.log(Animal.especie);
// console.log(Animal.nombre);
// console.log(Animal.raza);
// console.log(Animal.edad);
// console.log(Animal.color);
// console.log(Animal.tamanio);


















// alert("Ingrese el 'codigo' del producto que desea llevar. Para salir ingrese 'FIN'. ")



// let total = 0;

// const cantidad = (cantidad, precio) => {
//     return cantidad * precio
// }

// let comprar = prompt("Desea comprar algún producto en nuestra tienda? Si - No");
// let seleccionarProducto = prompt(" (RAA) Remera Adidas azul - $4000 // (RAV) Remera Adidas verde - $4000 // (RAB) Remera Adidas blanco - $4500 // ¨FIN¨ para salir.");

// while(comprar != "No") {
//     switch (seleccionarProducto) {
//         case "RAA":
//             seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas azul, ingrese el numero de la cantidad que desea llevar."));
//             total += cantidad(seleccionarCantidad, 4500);
                       
//             break;
//         case "RAV":
//             seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas verde, ingrese el numero de la cantidad que desea llevar."));
//             total += cantidad(seleccionarCantidad, 4000);
//             break;
//         case "RAB":
//             seleccionarCantidad = Number(prompt("Ingreso el codigo de Remera Adidas blanco, ingrese el numero de la cantidad que desea llevar."));
//             total += cantidad(seleccionarCantidad, 4500);

//             break;
//     }
//     comprar = prompt("Desea seguir comprando? Si - No");

    
    
// }
// alert("El total de la compra es de " + total + ", gracias por su visita vuelva pronto.");



