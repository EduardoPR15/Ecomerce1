
const cartContent = document.querySelector(".fuente")

let carrito = {}

function printCarrito(){

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
            <p>id ${id}</p>
            <p>nombre: ${name}</p>
            <p>precio ${precio}</p>
            <p>precio total : $ ${precioTotal}</p>
            <p>cantidad ${cantidad}</p>
            </div>
        </div>
                    <i class='bx bx-plus'></i>
                    <i class='bx bx-minus'></i>
                    <i class='bx bx-trash' ></i>
            
    </div>`;

})
cartContent.innerHTML = htmlCart;
}
export { printCarrito, carrito}