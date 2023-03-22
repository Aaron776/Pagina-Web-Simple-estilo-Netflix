export default class Display{
    constructor(moviesInfo,template,contenedor){
        this.moviesInfo=moviesInfo;
        this.template=template;
        this.contenedor=contenedor;
        this.fragment=new DocumentFragment();
        this.clone=this.template.cloneNode(true);
        this.card=this.template.querySelector(".card");
    }

    displayDefaultCards(){
        let postersPeliculas=this.moviesInfo[0];
        let titulosPeliculas=this.moviesInfo[1];

        const arregloPosters=this.getNewArray(postersPeliculas);
        const arregloTitulos=this.getNewArray(titulosPeliculas);

        this.contenedor.forEach((fila,i)=>{
            i===0? (titulosPeliculas=arregloTitulos[0]) : (titulosPeliculas=arregloTitulos[1])
            arregloPosters[i].forEach((pelicula,i)=>{
                this.card.children[0].setAttribute("src",`${pelicula}`)
                this.card.children[1].children[0].innerText=titulosPeliculas[i]

                this.clone=this.template.cloneNode(true);
                this.fragment.appendChild(this.clone);
            })

            fila.appendChild(this.fragment)

        })
    }

    getNewArray(peliculas){
        const left=peliculas;
        const rigth=left.splice(0, Math.ceil(left.length/2));
        return [left,rigth]

    }

    
    displayUserCards(){
        this.limpiarPeliculas();
        this.filtroUsersCards();

    }


    filtroUsersCards(){
        const slicePeliculas=this.moviesInfo.slice(0,6)
        slicePeliculas.forEach(elemento => {
           this.asignarInformacion(elemento)

           this.clone=this.template.cloneNode(true)
           this.fragment.appendChild(this.clone)
        });

        this.contenedor.appendChild(this.fragment)
        this.contenedor.style.display="flex"
    }


    asignarInformacion(pelicula){
       const nuevaImagenCarta=this.card.children[0] 
       const cuerpoCarta=this.card.children[1]

       nuevaImagenCarta.setAttribute("src",`${pelicula.Poster}`)
       cuerpoCarta.children[0].innerText=pelicula.Title
    }


    limpiarPeliculas(){
        while (this.contenedor.firstChild) {
            this.contenedor.firstChild.remove();
        }
    }

}