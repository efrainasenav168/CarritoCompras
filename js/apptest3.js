document.addEventListener("DOMContentLoaded", ()=>{
    console.log("documens")
  /* variables */
    const carrio=document.querySelector("#carrito");
    const listaCursos=document.querySelector("#lista-cursos");
    const vaciarCarritoBtn=document.querySelector("#vaciar-carrito");
    const contenedorCarrito=document.querySelector("#lista-carrito tbody");
    let articulosCarrito=[];

    cargarEvenListener()

    function cargarEvenListener(){

        listaCursos.addEventListener("click", agregarCurso)
        carrio.addEventListener("click",elimanarCurso)
       /*  carritoHtml.addEventListener("click",aliminatCurso); */
       vaciarCarritoBtn.addEventListener("click",function(e){
        e.preventDefault();
        articulosCarrito=[]
        carritoHtml();
       })


    }
    function agregarCurso(e){
        e.preventDefault();    
        if(e.target.classList.contains("agregar-carrito")){
            /* console.log("agregando") */
            const cursoSeleccionado=e.target.parentElement.parentElement
            /* console.log(cursoSeleccionado) */
            llamarCursoSeleccionado(cursoSeleccionado);
        }
    }
    function elimanarCurso(e){
        e.preventDefault();
        if(e.target.classList.contains("borrar-curso")){
            console.log("borrando")
            const cursoId=e.target.getAttribute("data-id")
            articulosCarrito=articulosCarrito.filter(curso => curso.id!==cursoId)
            carritoHtml()
        }
    }
    function llamarCursoSeleccionado(curso){
            const infoCurso={
                imagen:curso.querySelector("img").src,
                titulo:curso.querySelector("h4").textContent,
                precio:curso.querySelector(".precio span").textContent,
                id:curso.querySelector("a").getAttribute("data-id"),
                cantidad:1
            }

            /* console.log(infoCurso) */
            /* const existecurso=articulosCarrito.some(curso=> curso.id===infoCurso.id ); */
            const existecurso=articulosCarrito.some(function(curso){
                return curso.id===infoCurso.id;
            })
            /* alert(existecurso)  */
            if(existecurso){
                const cursos=articulosCarrito.map(curso =>{
                    if(curso.id===infoCurso.id){
                        curso.cantidad++;
                        return curso;
                    }else{
                        return curso;
                    }
                })
                articulosCarrito=[...cursos]
            }else{
                articulosCarrito=[...articulosCarrito,infoCurso]
            }
            
            /* console.log(articulosCarrito) */

            carritoHtml(); 
    }
     function carritoHtml(){
        limpiarHtml();
        articulosCarrito.forEach(curso =>{
            const{imagen,titulo,precio,id,cantidad}=curso
            console.log(imagen)
            const fila=document.createElement("tr");
            fila.innerHTML= `
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
            <a href='#' data-id='${id}' class='borrar-curso'>x </a>
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


