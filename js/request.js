import Chequear from "./chequear.js";
import Display from "./display.js";


export default class Request{
    constructor(){
        this.template=document.querySelector(".card-template").content;    
    }

    async obtenerInfo(botonValor){
        try {
            const url=`https://www.omdbapi.com/?s=${botonValor}&apikey=f7954355`
            const response=await fetch(url);
            const json=await response.json();
            
            const contenedor=document.querySelector(".new-row");

            const display=new Display(json.Search,this.template,contenedor);
            display.displayUserCards();  
        } catch (error) {
            const checker = new Chequear();
            checker.getContenedorError("Pelicula no Encontrada!");
        }
    }


    getMultipleInfo(nombrePeliculas){
        const moviesInfo=[[],[]];
        const resultado=nombrePeliculas.map((item)=>{
            return new Promise(async (resolve)=>{
                try { // aqui obtenemos la infromacion de la api de las peliculas
                    const url=`https://www.omdbapi.com/?i=${item}&apikey=f7954355`
                    const response=await fetch(url);
                    const json=await response.json(); // en esta variable json se esta guardadon la infromacion que viene de la api

                    moviesInfo[0].push(json.Poster)
                    moviesInfo[1].push(json.Title)

                    console.log(moviesInfo)
                    resolve();
                } catch (error) {
                    console.log(error)
                }
            })
        })

        Promise.all(resultado).then(()=>{
            const contenedor=document.querySelectorAll(".default-row")
            const display=new Display(moviesInfo,this.template,contenedor);
            display.displayDefaultCards();
        })
    }
}