
const cartContent = document.querySelector(".fuente")
const TotalCart = document.querySelector(".total")
let carrito = {}

function printCarrito(){
let htmlTotal =""
    let htmlCart ="";
    const arrayCart = Object.values(carrito);

arrayCart.forEach(({id, name, stock, precio, cantidad, urlImg, precioTotal})=> {
    htmlCart += `
    <div class="itemcart1" id="${id}">
        <div class="imagenCart">
                    <img src="${urlImg}" alt="">
        </div>
        <div class="precioBox">
            <div class="precioCart">
            <p>${name}</p>
            <p>precio: $ ${precio}</p>
            <p>total : $ ${precioTotal}</p>
            <p>cantidad ${cantidad}</p>
            </div>
        </div>
                    <i class='bx bx-plus'></i>
                    <i class='bx bx-minus'></i>
                    <i class='bx bx-trash' ></i>
            
    </div>

    `;

})
cartContent.innerHTML = htmlCart;

}
console.log(TotalCart);
export { printCarrito, carrito}