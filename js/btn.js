const btnCart = document.querySelector(".bolsita");
const Carrito = document.querySelector(".Carrito");
const btnheart = document.querySelector(".Corazon");
const Corazon = document.querySelector(".Favoritos");



btnCart.addEventListener("click", function(){
    Carrito.classList.toggle("ShowCart")
})
btnheart.addEventListener("click", function(){
    Corazon.classList.toggle("FavoritosShow")
})

