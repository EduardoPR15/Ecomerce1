import {dataDB} from "./data.js"
let carrito = {}
const contenido = document.querySelector(".productos")
function printCatalogo(){

    let htmlbody = ``
    dataDB.forEach(({id, name, stock, precio, urlImg}) => {
        htmlbody += `
    
        <div class="boxItem1">
            <div class="animationItem1">
                <div class="item1">
                    <div class="imagenItem1"><img src="${urlImg}" alt=""></div>
                    <div class="descripcionBox">
                        <div class="precioItem1" id="${id}">
                        
                            <p>nombre: ${name}</p>
                            <p>precio: $ ${precio}</p>
                            <p>stock ${stock}</p>
                            <i class='bx bx-cart-add' id = "agregar"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    })
    
    contenido.innerHTML =htmlbody;
    }
    export {printCatalogo};
