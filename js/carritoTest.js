window.addEventListener("DOMContentLoaded",()=>{
    console.log("documento listo")
    const carrito=document.querySelector("#carrito")
    const listaCarrito=document.querySelector("#lista-carrtio");
    const contenedorCarrito=document.querySelector("#lista-carrito tbody")
    const btnVaciarCarrito=document.querySelector("#vaciar.carrito")
    const listaCursos=document.querySelector("#lista-cursos")
    let articulosCarrito=[]
    
    cargarEventListeners();

    function cargarEventListeners(){
        listaCursos.addEventListener("click",agregarCurso);
        carrito.addEventListener("click",eliminarCurso)
    }
    function agregarCurso(e){
        e.preventDefault();
        if(e.target.classList.contains("agregar-carrito")){
           /*  console.log("agregandocurso") */
           const cursoSeleccionado=e.target.parentElement.parentElement;
           console.log(cursoSeleccionado)
           llamarCursoSeleccionado(cursoSeleccionado);
        }
    }
    function eliminarCurso(e){
        e.preventDefault();
        if(e.target.classList.contains("borrar-curso")){
            console.log("elinando curos")
            const cursoId=e.target.getAttribute("data-id")
            console.log(cursoId)
            articulosCarrito=articulosCarrito.filter(curso => curso.id!==cursoId)
            carritoHtml();
        }

    }

    function llamarCursoSeleccionado(curso){
        const infoCurso={
            imagen:curso.querySelector("img").src,
            nombre:curso.querySelector("h4").textContent,
            precio:curso.querySelector(".precio span").textContent,
            id:curso.querySelector("a").getAttribute("data-id"),
            cantidad:1
        }
        
        console.log(infoCurso)
        const existeCurso=articulosCarrito.some(curso => { return curso.id===infoCurso.id})
        console.log(`Existe curso? ${existeCurso}`)
        articulosCarrito=[...articulosCarrito,infoCurso]
        /* console.log(articulosCarrito) */
        carritoHtml();
    }
    function carritoHtml(){
        limpiarHtml();
        articulosCarrito.forEach(curso =>{
            const {imagen,nombre,precio,id,cantidad}=curso;
            const fila=document.createElement("tr");
            fila.innerHTML=`
                <td>
                    <img src="${imagen}">
                </td>
                <td>
                    ${nombre}
                </td>
                <td>
                    ${precio}
                </td>
                <td>
                    ${cantidad}
                </td>
                <td>
                    <a href="#" class="borrar-curso" data-id="${id}">x</a>
                </td>
            `
            contenedorCarrito.appendChild(fila);

        })
    }
    function limpiarHtml(){
        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    }

})