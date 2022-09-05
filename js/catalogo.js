import {dataDB} from "./data.js"
let carrito = {}
const contenido = document.querySelector(".productos")
function printCatalogo(){

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
    }
    export {printCatalogo};
    