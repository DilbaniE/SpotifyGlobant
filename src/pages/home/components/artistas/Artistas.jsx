import React from 'react'
import style from './Artistas.module.css'

export default function Artistas( {artistas} ) {


    // console.log("mira re puerca ------------");
    // console.log(artistas);

  return (
    <div 
        // className={style.container__artista} 
    >
      
        {
            artistas.map(function(cancion){
                return(
                    <div className='col'>
                        <div className='card h-100 shadow'>
                            <h3>{cancion.name}</h3>
                        </div>
                    </div>
                    );

            })
        }

    </div>
  )
}
