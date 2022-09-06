import { dataDB } from "./js/data.js"
import { printCatalogo } from "./js/catalogo.js";
import { printCarrito, carrito } from "./js/carrito.js";
import "./js/btn.js";
const contenido = document.querySelector(".productos")
const cartContent = document.querySelector(".fuente")
//let carrito = {}
printCatalogo();
const catalogo = document.querySelector(".item1")
contenido.addEventListener(("click"), (e) =>  {
    if (e.target.classList.contains("bx") || e.target.classList.contains("btnAgregar")){
    
    };
})






contenido.addEventListener(('click'), (e) => {

if (e.target.classList.contains("bx-cart-add") )  {
    const idProducto = +e.target.parentElement.id;
    const findProducto = dataDB.find((item) => item.id == idProducto);


    if (carrito[idProducto] && carrito[idProducto].stock >= 1){
        carrito[idProducto].cantidad++;
        carrito[idProducto].stock--;
    }
    else{
        carrito[idProducto] = findProducto ;
        carrito[idProducto].cantidad = 1;
        carrito[idProducto].stock --;
        carrito[idProducto].precioTotal = carrito[idProducto].precio;
    }
    console.log(carrito);
    printCarrito();
}

});


cartContent.addEventListener("click", (e) => {
    const idProducto = +e.target.parentElement.id;
    let precio = carrito[idProducto].precio;
    let cantidad = carrito[idProducto].cantidad;
    let suma = 1;
    console.log( carrito[idProducto].precioTotal);
if (e.target.classList.contains("bx-plus")) {
    if (carrito[idProducto].stock == 0 ) {
        console.log("ya no hay");
    }
    if (carrito[idProducto].stock > 0) {
        carrito[idProducto].cantidad++;
        carrito[idProducto].stock--;
        carrito[idProducto].precioTotal = precio + (precio * cantidad) ;
        
    }
    
}
if (e.target.classList.contains("bx-minus")) {
    carrito[idProducto].cantidad--;
    carrito[idProducto].precioTotal = (precio * cantidad) - precio;

    if (carrito[idProducto].cantidad == 0) {
        delete carrito[idProducto];
    }

}
if(e.target.classList.contains("bx-trash")){
    delete carrito[idProducto];
    
}

printCarrito();

})
