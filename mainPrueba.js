import { dataDB } from "./js/data.js"
const btnCart = document.querySelector(".bolsita")
const btnheart = document.querySelector(".Corazon")
const Carrito = document.querySelector(".Carrito")
const Corazon = document.querySelector(".Favoritos")
const contenido = document.querySelector(".productos")
btnheart.addEventListener("click", function(){
Corazon.classList.toggle("FavoritosShow")

})

console.log(btnCart); 
btnCart.addEventListener("click", function(){
    Carrito.classList.toggle("ShowCart")
    let html = ``
    document.querySelector("fuente").innerHTML = html;
})
console.log(dataDB);
let html = ""
console.log(dataDB);
dataDB.forEach((cosas) =>{
    console.log(cosas);
})
dataDB.forEach(({id, name, stock, precio}) => {
    html += `

    <div class="boxItem1">
        <div class="animationItem1">
            <div class="item1">
                <div class="imagenItem1"><img src="" alt=""></div>
                <div class="descripcionBox">
                    <div class="precioItem1">
                        <p>id ${id}</p>
                        <p>nombre: ${name}</p>
                        <p>precio ${precio}</p>
                        <p>stock ${stock}</p>
                    </div>
                    <div class= "botonBox">
                        <button class="btnAgregar"><i class='bx bx-cart-add'></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
})
contenido.innerHTML = html;