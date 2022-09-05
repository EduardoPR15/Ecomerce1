




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
                    <button class="Sumar"><i class='bx bx-plus'></i></button> 
                    <button class="Restar"><i class='bx bx-minus'></i></button>
                    <button class="Eliminar"><i class='bx bx-trash' ></i></button>
            
    </div>`;

})
cartContent.innerHTML = htmlCart;
}