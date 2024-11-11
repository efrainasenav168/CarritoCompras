const carrio=[{nombre:"bocina",precio:123},{nombre:"tv",precio:323232}]
const nombre=["efrain","emmanuel","ared","pedro","ricardo"]

/* nombre.forEach((nombre, indice) =>{
     console.log(`${nombre}: ${indice}`)
    /* if(nombre==="jared"){ */
       /*  console.log("el nombre existe") */
/*     } 
}) */

const carrtoTest=carrio.forEach(function(nombre){
    /* return console.log(nombre.nombre) */
    return nombre.nombre
})
console.log(carrtoTest);
const carritoTest2=carrio.map(nombre => nombre.nombre)
console.log(carritoTest2)
