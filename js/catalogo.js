const contenido = document.querySelector(".container")
let html = ""
console.log(dataDB);
dataDB.forEach((cosas) =>{
    console.log(cosas);
})
function printCatalogo (data)
dataDB.forEach(({id, name, stock, precio}) => {
    html += `

    <div class="boxItem1">
        <div class="animationItem1">
            <div class="item1">
                <div class="imagenItem1"><img src="" alt=""></div>
                <div class="precioItem1">
                    <p>id ${id}</p>
                    <p>nombre: ${name}</p>
                    <p>precio ${precio}</p>
                    <p>stock ${stock}</p>
                </div>
            </div>
        </div>
    </div>`;
})
contenido.innerHTML = html;