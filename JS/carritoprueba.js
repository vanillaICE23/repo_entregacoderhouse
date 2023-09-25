const shopContenido = document.getElementById("shopContenido");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modalContainer");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

const getProducts = async ()=> {
    const response = await fetch("data.json");
    const data = await response.json();

    data.forEach((product) => {
        let contenido = document.createElement("div");
        contenido.className = "card";
        contenido.innerHTML = `
        <img class="imagen" src="${product.img}">
        <h3 class="nombre">${product.nombre}</h3>
        <p class="precio">$ ${product.precio}</p>
        `;
        shopContenido.append(contenido);
    
        let boton = document.createElement("button")
        boton.innerText= "Adquirir";
        boton.className = "boton";
        contenido.append(boton);
    
        boton.addEventListener("click", () => {

            Toastify({

                text: "Se añadió el producto",               
                duration: 3000 ,
                gravity: "bottom",
                position: "right",              
                }).showToast();

            carrito.push({
                id : product,
                img : product.img,
                nombre : product.nombre,
                precio : product.precio,
                })
                console.log(carrito)
    
        })
    })
    
    const rellenarCarrito = () =>{
        modalContainer.innerHTML="";
        modalContainer.style.display = "flex";
        // HEADER 
        const modalHeader = document.createElement("div");
        modalHeader.className = "modal-header";
        modalHeader.innerHTML = `
        <h1 class="modal-header-title">Carrito</h1>
        `;
        modalContainer.append(modalHeader);
    
        const modalBoton = document.createElement("h1");
        modalBoton.innerText = "X";
        modalBoton.className = "modal-header-boton";
    
        modalBoton.addEventListener("click", () => {
            modalContainer.style.display = "none";
        });
    
        modalHeader.append(modalBoton);
    
        //CONTENIDO
        carrito.forEach((product) => {
        const carritoContenido = document.createElement ("div");
        carritoContenido.className = "carrito-contenido";
        carritoContenido.innerHTML =`
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio}</p>
        `;
    
        modalContainer.append(carritoContenido);
    
        const eliminar = document.createElement("span");
        eliminar.innerText = "❌"
        eliminar.className = "eliminar-producto";
        carritoContenido.append(eliminar);
    
        eliminar.addEventListener("click", eliminarProducto);
        })  
    
        // TOTAL
        const total = carrito.reduce((acc,el) => acc + el.precio, 0)
        const totalComprando = document.createElement("div");
        totalComprando.className = "total-comprando";
        totalComprando.innerHTML = `total a pagar ${total}`;
        modalContainer.append(totalComprando);
    
        saveLocal();
    };
    
    verCarrito.addEventListener("click", rellenarCarrito);
    
    const eliminarProducto = () => {
        const foundId = carrito.find((element) => element.id);
        carrito = carrito.filter((carritoId) => {
            return carritoId !== foundId;
        });
    
        rellenarCarrito();
        saveLocal();
    };
    
};

getProducts(); 



const saveLocal = () => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
};




