import { dataDB } from "./js/data.js"
import { printCatalogo } from "./js/catalogo.js";
import { printCarrito, carrito } from "./js/carrito.js";
import "./js/btn.js";
const contenido = document.querySelector(".productos")
const cartContent = document.querySelector(".fuente")
const TotalCart = document.querySelector(".TotalCart")
let suma1 = 0;
let suma2 = 0;
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
 
    
    
    if (carrito[idProducto] && carrito[idProducto].stock >= 1 ){
        let precio = carrito[idProducto].precio;
        let cantidad = carrito[idProducto].cantidad;
        if (carrito[idProducto].stock == 0) {
            carrito[idProducto].cantidad++;
            carrito[idProducto].stock--;
            carrito[idProducto].precioTotal = precio + (precio * cantidad) ;
            array1.push(carrito[idProducto].precio);
            suma1 += (carrito[idProducto].precio)
            console.log(array1);
            console.log(TotalCart);
            
        }
        
        
    }

    
    else{
        carrito[idProducto] = findProducto ;
        carrito[idProducto].cantidad = 1;
        carrito[idProducto].stock --;
        carrito[idProducto].precioTotal = carrito[idProducto].precio;
        suma1 += (carrito[idProducto].precio)
        console.log("primera suma");
        
    }
 

    console.log("lkimte1");
    printCarrito();
    
}

TotalCart.innerHTML = `<h2>Total ${suma1}</h2> <button class= "reset" id="reset"> Comprar</button>`  

});
let array1 = []
const arrayCart = Object.values(carrito);
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
        array1.push(carrito[idProducto].precio);
        suma1 += (carrito[idProducto].precio)
        console.log(array1);
        console.log(TotalCart);
        
    }
    
}
//TotalCart.innerHTML = `${suma1}` 
if (e.target.classList.contains("bx-minus")) {
    carrito[idProducto].cantidad--;
    carrito[idProducto].precioTotal = (precio * cantidad) - precio;
    array1.push( -1 * (carrito[idProducto].precio));
    suma1 -= (carrito[idProducto].precio)
    console.log(suma1);

    if (carrito[idProducto].cantidad == 0) {
        delete carrito[idProducto];
    }

}
if(e.target.classList.contains("bx-trash")){
    carrito[idProducto].cantidad = 0;
    suma1 -= (carrito[idProducto].precioTotal)
    
    delete carrito[idProducto];
    if (cartContent.innerHTML = "");
    {
        TotalCart.innerHTML = ` Total ${suma2}`
        array1 = 0
    }
}


if (cartContent.innerHTML = "");
    {
        TotalCart.innerHTML = ` Total ${suma2} `
        console.log("vacio");
    }
printCarrito();

TotalCart.innerHTML = ` <h2>Total: $ ${suma1}</h2> <button class= "reset" id="reset"> Comprar</button>` 



})

TotalCart.addEventListener(("click"), (e) =>  {
    console.log(e.target);
    const refreshRate =500;
    if (e.target.classList.contains("reset")) {
        console.log("reset");
        cartContent.innerHTML = "<h2>Gracias por su compra</h2>";
        TotalCart.innerHTML = ` <p>has pagado: $ ${suma1}</h2>`
        setTimeout("location.reload(true);",5000)
    }
})