import Request from './request.js'

export default class Chequear{
    verificarInput(){
        const valorBoton=document.querySelector('.my-input')
        if(valorBoton.value===''){
            console.log("Error en la busqueda ya que la barra de busqueda esta vacia")
            this.getContenedorError("Debe llenar todos los campos");
        }else{
            const request=new Request();
            request.obtenerInfo(valorBoton.value);

            valorBoton.value="";
        }
    }

    getContenedorError(mensaje){
        const fragmento=new DocumentFragment()
        const contenedorError=document.querySelector(".error-container")
        const errorTemplate=document.querySelector(".error-template").content

        const clone=errorTemplate.cloneNode(true)
        fragmento.appendChild(clone)
        contenedorError.appendChild(fragmento)

        document.querySelector(".alert-error").innerText=mensaje;
        this.displayError()
    }

    displayError(error){
        error.style.display="block";

        setTimeout(()=>{
            error.style.display="none";

            while(error.firstChild){
                error.firstChild.remove();
            }
        }, 1500)


    }
}