import React from 'react'
import style from './Artistas.module.css'
import { Link } from "react-router-dom";

export default function Artistas( {artistas} ) {

    // console.log("mira re puerca ------------ artistas");
    // console.log(artistas);
    // console.log(cancion.external_urls.spotify)


  return (
    <div 
      className={style.container__artista}
    >
      {
    artistas && artistas.map(function(cancion) {

      const partesUrl = cancion.external_urls.spotify.split("/");

      // Obtiene el último elemento del array resultante
      const ultimoParametro = partesUrl[partesUrl.length - 1];
      
      console.log(ultimoParametro);


    return (
      <>
      <div>
        <div className='col'  key={cancion.id}>

        <div className={style.card}>           
         
          <h3>{cancion.name}</h3>
           {/* <p>{cancion.artists.followers.total}</p>  */}
           <div className={style.icond}>
                < Link to = { "/manejo/" + ultimoParametro  }>
                          <img src={cancion.images[0].url} className={style.imagen} alt="" /> 
                </Link>
                <img className={style.icon} src="https://img.icons8.com/nolan/64/E090F0/05BDF5/play-button-circled.png" alt="Icond Play" />
           </div>
           <p  className={style.genre}> {cancion.genres[1]}</p>
         



        </div>
        </div>
      </div>
     
      
      
      </>
    );
  })
}

    </div>
  )
}
