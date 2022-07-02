let carrito;



if(localStorage.getItem("carrito")!=null){
    carrito=JSON.parse(localStorage.getItem("carrito"));
    //cargarlos en la tabla-Tarea
}else{
    carrito=[];
}
let card=document.getElementById("milista");

function impresionCards(anillos) {
    for (const anillo of anillos) {
        let card = document.createElement("div");
        card.innerHTML = `
        <div class="card" style="width: 18rem;">
        <img src="${anillo.img}" class="card-img-top" alt="...">
        <div class="card-body">
        <h5 class="card-title">${anillo.nombre}</h5>
        <p class="card-text">${anillo.precio}.</p>
        <button class='btn btn-danger' id='btn${anillo.id}'>Comprar</button>
        </div>
        </div>`;
        contenedor.appendChild(card);}

 anillos.forEach(anillo => {
        //Evento para cada boton
        document.getElementById(`btn${anillo.id}`).addEventListener('click', function() {
            agregarAlCarrito(anillo);
        });
    });

};

impresionCards(anillos);


















