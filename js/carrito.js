
const cartContent = document.querySelector(".fuente")

let carrito = {}

function printCarrito(){

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
                    <i class='bx bx-plus'></i>
                    <i class='bx bx-minus'></i>
                    <i class='bx bx-trash' ></i>
            
    </div>`;

})
cartContent.innerHTML = htmlCart;
}
export { printCarrito, carrito}