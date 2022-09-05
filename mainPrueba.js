import { dataDB } from "./js/data.js"
const btnCart = document.querySelector(".bolsita")
const btnheart = document.querySelector(".Corazon")
const Carrito = document.querySelector(".Carrito")
const Corazon = document.querySelector(".Favoritos")
const contenido = document.querySelector(".productos")
let carrito = {}
btnheart.addEventListener("click", function(){
Corazon.classList.toggle("FavoritosShow")

})

console.log(btnCart); 
btnCart.addEventListener("click", function(){
    Carrito.classList.toggle("ShowCart")
    let html = ``
    //document.querySelector("fuente").innerHTML = html;
})
console.log(dataDB);
let htmlbody = ``
dataDB.forEach(({id, name, stock, precio,}) => {
    htmlbody += `

    <div class="boxItem1">
        <div class="animationItem1">
            <div class="item1">
                <div class="imagenItem1"><img src="" alt=""></div>
                <div class="descripcionBox">
                    <div class="precioItem1" id="${id}">
                        <p>id ${id}</p>
                        <p>nombre: ${name}</p>
                        <p>precio ${precio}</p>
                        <p>stock ${stock}</p>
                        <button class="btnAgregar" ><i class='bx bx-cart-add' id = "agregar"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
})

contenido.innerHTML =htmlbody;


//          funcion imprimir en carrito//


function printCarrito(){
    const cartContent = document.querySelector(".fuente")
    let htmlCart ="";
    const arrayCart = Object.values(carrito);

arrayCart.forEach(({id, name, stock, precio, cantidad})=> {
    htmlCart += `
    <div class="itemcart1" id="${id}">
        <div class="imagenCart">
                    <img src="./Imagenes/280252846_554723679341548_6935970933134506652_n.jpg" alt="">
        </div>
        <div class="precioBox">
            <div class="precioCart">
            <p>id ${id}</p>
            <p>nombre: ${name}</p>
            <p>precio ${precio}</p>
            <p>cantidad ${cantidad}</p>
            </div>
        </div>
            <div class="btnBox">
                    <button class="Sumar"><i class='bx bx-plus'></i></button> 
                    <button class="Restar"><i class='bx bx-minus'></i></button>
                    <button class="Eliminar"><i class='bx bx-trash' ></i></button>
            </div> 
    </div>`;

})
cartContent.innerHTML = htmlCart;
}






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
    console.log(Object.values(carrito));
}

})