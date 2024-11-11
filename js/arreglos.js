const contenedorCarrito=document.querySelector("#lista-carrito tbody")
let articulosCarrito=[
    {imagen:"cocinaMexicana",titulo:"curso de cocina",precio:23},
    {imagen:"css",titulo:"curso de css3",precio:234},
]
infoCurso={
    imagen:"html",
    titulo:"introduccion a html",
    precio:45,

}
articulosCarrito=[...articulosCarrito,infoCurso]

articulosCarrito.forEach(curso =>{
    const {imagen,titulo,precio}=curso;

    console.log({imagen,titulo,precio})
    const fila=document.createElement("tr");
    fila.innerHTML=`
        <td>
        ${imagen}
        </td>
        <td>
        ${titulo}
        </td>
        <td>
        ${precio}
        </td>
        
    `

    contenedorCarrito.appendChild(fila)
})