import Request from "./request.js";

export default class Cards{
    async obtenerPeliculas(){ // en esta funcion estoy obtniendo las peliculas del archivo json de forma aleatoria
        const response = await fetch("/baseDatos.json");
        const json=await response.json();
        
        this.obtenerImagenes(json);
    }

    obtenerImagenes(json){
        const valores=Object.values(json)
        const peliculas=[];

        while(peliculas.length<=11){
            let item=this.newItem(valores);
            peliculas.push(item)
        }

        console.log(peliculas); // aqui muestro en consola el listado de peliculas mi mi archivo json

        const request=new Request();
        request.getMultipleInfo(peliculas)
    }

    newItem(valores){
        const item=valores[Math.floor(Math.random()*valores.length)];
        return item
    }
}