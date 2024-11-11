document.addEventListener("DOMContentLoaded",function(){

    // variables

    const carrtio=document.querySelector("#carrtio")
    const listaCursos=document.querySelector("#lista-cursos")
    const vaciarCarritoBtn=document.querySelector("#vaciarCarrito")
    const contenedorCarrito=document.querySelector("#lista-carrito tbody")
    let articulosCarrito=[];
    cargarEventListener()
    function cargarEventListener(){
        listaCursos.addEventListener('click',agregarCurso);
    }

    //Funciones

    function agregarCurso(e){
        e.preventDefault();
        if(e.target.classList.contains("agregar-carrito")){
            console.log("Agregado al carrito");
            const cursoSeleccionado=e.target.parentElement.parentElement
            leeDatosCurso(cursoSeleccionado);
        }
        
        
    }
    // leer los datos del curos
     function leeDatosCurso(curso){
        console.log(curso);
        // crear un objeto con la info del curso
        const infoCurso={
            imagen:curso.querySelector("img").src,
            tituloCurso:curso.querySelector('h4').textContent,
            precio:curso.querySelector(".precio span").textContent,
            id:curso.querySelector("a").getAttribute("data-id"),
            cantidad:1,
        }
        console.log(infoCurso)
        articulosCarrito=[...articulosCarrito,infoCurso]
        console.log(articulosCarrito)
        carritoHtml();

     }
     function carritoHtml(){
        //limpiar el html
            limpiarHtml();
        //recorrer el carrito y generar el html

        articulosCarrito.forEach(curso=>{
            const fila=document.createElement("tr");
            fila.innerHtml=`
                            <td>
                                
                               
                            <img src="${curso.imagen}">
                            </td>
                            <td>
                            ${curso.tituloCurso}
                           
                             </td>
                             <td>
                             ${curso.precio}
                            
                              </td>
                              <td>
                              ${curso.cantidad}
                             
                               </td>
                               <td>
                               <a href="#" class="borrar-curso" data-id="${curso.id}">x </a>
                               </td>
                               
                           
                           
            `;
            // agregar el html del carrito al tbody
            contenedorCarrito.appendChild(fila);
        })
    }
    function limpiarHtml(){
        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    }

})