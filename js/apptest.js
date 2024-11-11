window.addEventListener("DOMContentLoaded",function(){
    /* console.log("listo") */
    const listacursos=document.querySelector("#lista-cursos");
    const carrito=document.querySelector("#carrito");
    const vaciarCarrtioBtn=document.querySelector("#vaciar-carrito");
    const contenedorCarrito=document.querySelector("#lista-carrito tbody");
    let articulosCarrito=[];

    cargarEventListener();

    function cargarEventListener(){
        listacursos.addEventListener("click", agregarCurso)
        carrito.addEventListener("click", elimanarCurso)
        vaciarCarrtioBtn.addEventListener("click", vaciarCarrtio);

        function vaciarCarrtio(){
            articulosCarrito=[];
            limpiarHtml();
        }
    }

    function agregarCurso(e){
        e.preventDefault();
        const btnCurso=e.target.classList
        if(btnCurso.contains("agregar-carrito")){
            //console.log("agregnado curso al carrio")
            const cursoSeleccionado=e.target.parentElement.parentElement;
            //console.log(cursoSeleccionado);
            leerCusroSeleccionado(cursoSeleccionado);
        }
    }
     function elimanarCurso(e){
        e.preventDefault();
        console.log(e.target.classList)
        if(e.target.classList.contains("borrar-curso")){
            const cursoId=e.target.getAttribute("data-id");

            articulosCarrito=articulosCarrito.filter(curso => curso.id!== cursoId)
            carritoHtml();
            
        }

     }
    function leerCusroSeleccionado(curso){

        const infoCurso={
                imagen:curso.querySelector("img").src,
                nombreCurso:curso.querySelector("h4").textContent,
                precio:curso.querySelector(".precio span").textContent,
                id:curso.querySelector("a").getAttribute("data-id"),
                cantidad:1

        }
        /* console.log(infoCurso) */
        const existe= articulosCarrito.some(curso => curso.id===infoCurso.id)
        console.log(existe)
       
        if(existe){
            const cursos=articulosCarrito.map(curso => {
                if(curso.id===infoCurso.id){
                    curso.cantidad++;
                   
                    return curso
                }else{
                    
                    return curso;
                }
            });
            articulosCarrito=[...cursos]
        }
        else{
            articulosCarrito=[...articulosCarrito,infoCurso];
        }
        
        
        carritoHtml();
    }
    function carritoHtml(){
            limpiarHtml();

        articulosCarrito.forEach(curso=>{
            const {imagen,nombreCurso,precio,id,cantidad}=curso
            const fila=document.createElement("tr");

            fila.innerHTML=`
            <td>
            <img src="${imagen}">
            
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
            <a href="#" class="borrar-curso" data-id="${id}">x
            </>
            </td>
            `;
            contenedorCarrito.appendChild(fila);          
        } )


    }

    function limpiarHtml(){
        while(contenedorCarrito.firstChild){
            contenedorCarrito.removeChild(contenedorCarrito.firstChild)
        }
    }



})