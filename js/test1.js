document.addEventListener("DOMContentLoaded",()=>{
    console.log("documento listo")

    const carrito=document.querySelector("#carrito");
    const listaCursos=document.querySelector("#lista-cursos")
    const vaciarCarritoBtn=document.querySelector("#vaciar-carrito");
    const contenedorCarrito=document.querySelector("#lista-carrito tbody");
    let articulosCarrito=[];
    cargarEventListener();

    function cargarEventListener(e){
        listaCursos.addEventListener("click", cargarCurso)
        carrito.addEventListener("click",eliminarCurso);
        vaciarCarritoBtn.addEventListener("click",()=>{
            articulosCarrito=[]
            carritoHtml();
        })        
        

    }

    function cargarCurso(e){
        e.preventDefault();
        if (e.target.classList.contains("agregar-carrito")){
            console.log("agregando...")
            const cursoSeleccionado=e.target.parentElement.parentElement;
            /* console.log(cursoSeleccionado) */
            llamarCursoSeleccionado(cursoSeleccionado);
        }


    }

    function eliminarCurso(e){
        e.preventDefault();
        if(e.target.classList.contains("borrar-curso")){
            const cursoId= e.target.getAttribute("data-id")
            articulosCarrito=articulosCarrito.filter(curso => curso.id !== cursoId)
            carritoHtml();
        }
    }
    function llamarCursoSeleccionado(curso){
            const infoCurso={
                imagen:curso.querySelector('img').src,
                titulo:curso.querySelector('h4').innerText,
                precio:curso.querySelector('span').textContent,
                id:curso.querySelector('a').getAttribute('data-id'),
                cantidad:1,
            }
            // verificar si el curso existe en aticulos carrito
            const cursoExiste=articulosCarrito.some(function (curso){
                return curso.id===infoCurso.id
            });
            if(cursoExiste){
                const cursos=articulosCarrito.map(curso =>{
                    if(curso.id===infoCurso.id){
                        curso.cantidad++
                        return curso;
                    }else{
                        return curso;
                    }

                })
                articulosCarrito=[...cursos] 
                
            }else{
                articulosCarrito=[...articulosCarrito,infoCurso]    
            }

            /* console.log(infoCurso) */
            //articulosCarrito=[...articulosCarrito,infoCurso]
            //console.log(articulosCarrito)
            carritoHtml();
    }

    function carritoHtml(){
        limpiarHtml();
        articulosCarrito.forEach(curso =>{
            const {imagen,titulo,precio,id,cantidad}=curso;
            const fila=document.createElement('tr');
            fila.innerHTML=`
                <td>
                <img src="${imagen}">
                </td>
                <td>
                ${titulo}
                </td>
                <td>
                ${precio}
                </td>
                <td>
                ${cantidad}
                </td>
                <td>
                <a href="#"  data-id="${id}" class="borrar-curso"> X</a>
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