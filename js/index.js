import Chequear from './chequear.js'
import Carrusel from './carrusel.js'
import Cards from './cards.js'



window.addEventListener('DOMContentLoaded',()=>{ // este metodo va a permitir ejecutar todo el codigo javascript solo si ya se ha cargado el documento html
    const buscar=document.querySelector('.btn-search')

    const cards=new Cards();
    cards.obtenerPeliculas();
    
    const carrusel=new Carrusel();
    carrusel.showCarruselInfo();

    buscar.addEventListener('click',(e)=>{
        e.preventDefault();
        
        const checker=new Chequear();
        checker.verificarInput();
    })
})