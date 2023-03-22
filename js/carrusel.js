export default class Carrusel{
    constructor(){
        this.carruselCont=document.querySelectorAll(".carousel-info")
        this.template=document.querySelector(".carousel-template").content
        this.fragmento=new DocumentFragment();
    }

    showCarruselInfo(){
        this.carruselCont.forEach(x=>{
            this.clone=this.template.cloneNode(true);
            this.fragmento.appendChild(this.clone);
            x.appendChild(this.fragmento);
        })
    }
}