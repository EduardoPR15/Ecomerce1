const btnCart = document.querySelector(".bolsita")
const btnheart = document.querySelector(".Corazon")
const Carrito = document.querySelector(".Carrito")
const Corazon = document.querySelector(".Favoritos")
console.log(btnheart); 
btnheart.addEventListener("click", function(){
Corazon.classList.toggle("FavoritosShow")

})

console.log(btnCart); 
btnCart.addEventListener("click", function(){
    Carrito.classList.toggle("ShowCart")
    let html = '<h2>ola q paso :v</h2> '
    document.querySelector("#fuente").innerHTML = html;
})