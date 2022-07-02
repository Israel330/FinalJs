

//Esta pagina fue modificafa con capturas del Dom demostrando los conocimientos adquiridos

let lista = document.getElementById("texH3");
lista.innerText = "hola soy la pagina de contactos"
lista.style.color = "yellow"

//se modifica el backgrund//

let cuerpo = document.getElementById("cambiodeB");
cuerpo.style.background = "grey";

//creacion de un texto dentro de un div en html contactos//

let texto = document.getElementById("div");

texto.innerHTML = "<h2>Hola Profe Laura <b> Aprobame, Gracias!!! </b> </h2>";

//creacion de tabla para contactos//

const contactos = [
    { id: "1", sucursal: "1", telefono: "4204152", ciudad: "Avellaneda" },
    { id: "2", sucursal: "2", telefono: "4038660", ciudad: "Lanus" },
    { id: "3", sucursal: "3", telefono: "4901338", ciudad: "Monte Grande" }
];


let tabla = document.createElement("table");
let tablaBody = document.createElement("tbody");
tabla.className = "table table-dark table-borderless";
for (let contacto of contactos) {  
    let fila = document.createElement("tr");
    fila.innerHTML = `
        <td>${contacto.id}</td>
        <td>sucursal: ${contacto.sucursal}</td>
        <td>telefono: ${contacto.telefono}</td>
        <td>ciudad:${contacto.ciudad}</td>`;
    tablaBody.appendChild(fila);
}
tabla.appendChild(tablaBody);

let lugarTablas = document.getElementById("tb");
lugarTablas.appendChild(tabla);



