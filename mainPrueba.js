import { dataDB } from "./js/data.js"
import { printCatalogo } from "./js/catalogo.js";
import { printCarrito, carrito } from "./js/carrito.js";
import "./js/btn.js";
const contenido = document.querySelector(".productos")
const cartContent = document.querySelector(".fuente")
//let carrito = {}
printCatalogo();





contenido.addEventListener(('click'), (e) => {
if (e.target.classList.contains("btnAgregar")) {
    const idProducto = +e.target.parentElement.id;
    const findProducto = dataDB.find((item) => item.id == idProducto);


    if (carrito[idProducto] && carrito[idProducto].stock >= 1){
        carrito[idProducto].cantidad++;
        carrito[idProducto].stock--;
        console.log(carrito[idProducto].stock);
    }
    else{
        carrito[idProducto] = findProducto ;
        carrito[idProducto].cantidad = 1;
        carrito[idProducto].stock --;
    }
    printCarrito();
}

});


cartContent.addEventListener("click", (e) => {
    const idProducto = +e.target.parentElement.id;
if (e.target.classList.contains("Sumar")) {
    //carrito[idProducto].stock--;
    if (carrito[idProducto].stock == 0 ) {
        console.log("ya no hay");
    }
    if (carrito[idProducto].stock > 0) {
        carrito[idProducto].cantidad++;
        carrito[idProducto].stock--;
        
    }
    
}
if (e.target.classList.contains("Restar")) {
    carrito[idProducto].cantidad--;
    if (carrito[idProducto].cantidad == 0) {
        delete carrito[idProducto];
    }

}
if(e.target.classList.contains("Eliminar")){
    delete carrito[idProducto];
    
}
printCarrito();
})