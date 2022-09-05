const contenedeor = document.querySelector(".container")
const masCarrito = document.querySelector(".AgregarCart")

masCarrito.addEventListener(('click'), (e) =>{
console.log(e.target.parentElement.addEventListener);


})




html +=`
<div class="fuente" id="fuente">
<div class="imagenCart">
    <img src="./Imagenes/280252846_554723679341548_6935970933134506652_n.jpg" alt="">
</div>
<div class="precioBox">
    <div class="precioCart"><h2>eee</h2>
        </div>
    </div>
<div class="btnBox">
    <button class="Sumar"><i class='bx bx-plus'></i></button> 
    <button class="Restar"><i class='bx bx-minus'></i></button>
    <button class="Eliminar"><i class='bx bx-trash' ></i></button>
</div>
</div>
`