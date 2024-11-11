window.addEventListener("DOMContentLoaded",()=>{
    console.log("documento listo")
    const carrito=document.querySelector("#carrito");
    const contenedorCarrito=document.querySelector("#lista-carrito tbody")
    const btnVaciarCarrito=document.querySelector("#vaciar-carrito")
    const listaCursos=document.querySelector("#lista-cursos");
    let articulosCarrito=[]

    cargarEventListener()

    function cargarEventListener(){
            listaCursos.addEventListener("click",agregarCurso)
            carrito.addEventListener("click",eliminarCurso);
            btnVaciarCarrito.addEventListener("click", (e)=>{
                e.preventDefault();
                articulosCarrito=[]
                carritoHtml();
            })

    }

    function agregarCurso(e){
        e.preventDefault()
        if(e.target.classList.contains("agregar-carrito")){
            const cursoSeleccionado=e.target.parentElement.parentElement;
            console.log(cursoSeleccionado)
            llamarCursoSelecionado(cursoSeleccionado)
        }

    }
    function eliminarCurso(e){
        e.preventDefault();
        if(e.target.classList.contains("borrar-curso")){
            const cursoId=e.target.getAttribute("data-id")
            console.log(cursoId)
            articulosCarrito=articulosCarrito.filter(curso => curso.id !== cursoId)
            carritoHtml();
        }
    }
    function llamarCursoSelecionado(curso){
            const infoCurso={
                imagen:curso.querySelector("img").src,
                nombre:curso.querySelector("h4").textContent, 
                precio:curso.querySelector(".precio span").textContent,
                id:curso.querySelector("a").getAttribute("data-id"),
                cantidad:1
            }
            const existeCurso=articulosCarrito.some(curos =>{
                return curos.id=== infoCurso.id;
            })
            if(existeCurso){
                const cursos=articulosCarrito.map(curso=>{
                    if(curso.id===infoCurso.id){
                        curso.cantidad ++
                        return curso
                    }else{
                        return curso
                    }
                    
                })
                articulosCarrito=[...cursos]
            }else{
                articulosCarrito=[...articulosCarrito,infoCurso]
            }
            
            carritoHtml();
         }
        function carritoHtml(){
            /* console.log(articulosCarrito) */
            limpiarHtml()
            articulosCarrito.forEach(curso =>{
                const {imagen,nombre,precio,id,cantidad}=curso
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
                <a href="#" class="borrar-curso" data-id="${id}">x </a>
                </td>

                `
            contenedorCarrito.appendChild(fila)    
            })
            
        }
        function limpiarHtml(){
            while(contenedorCarrito.firstChild){
                contenedorCarrito.removeChild(contenedorCarrito.firstChild)
            }
        } 

})