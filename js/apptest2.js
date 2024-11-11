document.addEventListener("DOMContentLoaded",()=>{
    console.log("Documento listo")
    const carrito=document.querySelector("#carrito");
    const listaCursos=document.querySelector("#lista-cursos");
    const vaciarCarritoBtn=document.querySelector("#vaciar-carrito");
    const conetenedorCarrito=document.querySelector("#lista-carrito tbody");
    let articulosCarrito=[];

    cargarEventListener();

    function cargarEventListener(){
        listaCursos.addEventListener("click",agregarCurso)
        carrito.addEventListener("click",elimanarCurso);
        vaciarCarritoBtn.addEventListener("click", vaciarCarrito)
        
        function vaciarCarrito(){
            articulosCarrito=[]
            limpiarHtml();
        }

    }

    function agregarCurso(e){
        e.preventDefault()
        
        if(e.target.classList.contains('agregar-carrito')){
            const cursoSeleccionado=e.target.parentElement.parentElement
            /* console.log(cursoSeleccionado) */
            leerCursoSeleccionado(cursoSeleccionado);
        }
    }
    function elimanarCurso(e){
        e.preventDefault()
        
        if(e.target.classList.contains("borrar-curso")){
            /* console.log("eliminando curso") */
            const cursoId=e.target.getAttribute("data-id")
            /* console.log(cursoId) */
            articulosCarrito=articulosCarrito.filter(function (curso){
                
                return curso.id!== cursoId
                
            })
            carritoHtml();
        }
    }

    function leerCursoSeleccionado(curso){
        const infoCurso={
            imagen:curso.querySelector("img").src,
            nombreCurso:curso.querySelector("h4").textContent,
            precio:curso.querySelector(".precio span").textContent,
            id:curso.querySelector("a").getAttribute("data-id"),
            cantidad:1

        }
        /* console.log(infoCurso) */
        const existecurso=articulosCarrito.some(curso => curso.id=== infoCurso.id)
        
       /*  console.log(existecurso) */
       if(existecurso){
           const cursos= articulosCarrito.map(curso =>{
                if(curso.id===infoCurso.id){
                    curso.cantidad++
                    return curso;
                }else{
                    return curso;
                }
            });
            articulosCarrito=[...cursos]
        }else{
        articulosCarrito=[...articulosCarrito, infoCurso];
        }
        
       /*  console.log(articulosCarrito); */
        carritoHtml();
    }

    function carritoHtml(){
        /* console.log(articulosCarrito) */
        limpiarHtml();
        articulosCarrito.forEach(curso =>{
            const {imagen,nombreCurso,precio,id,cantidad}=curso;

            const fila=document.createElement("tr");
            fila.innerHTML=`
            <td>
            <img src=${imagen}>
            </td>
            <td>
                ${nombreCurso}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
            <a href='#' class='borrar-curso' data-id='${id}'>x</a>
            </td>
            
            `
           /*  console.log(fila) */
            conetenedorCarrito.appendChild(fila)
        })
    }

    function limpiarHtml(){
        while(conetenedorCarrito.firstChild){
            conetenedorCarrito.removeChild(conetenedorCarrito.firstChild)
        }
    }


})