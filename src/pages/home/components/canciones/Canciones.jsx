import React from 'react'
import styleD from './Canciones.module.css'

export default function Canciones( { canciones } ) {
  return (
<>

<h1 className={styleD.container__home}>Hola soy home</h1>
            <section className={styleD.banner}>
            
            </section>

            <section className={styleD.container}>
                
            </section>

            <div className="row row-cols-1 row-cols-md-5">
                {
                    canciones.map(function(cancion){
                        return(
                            <div className='col'>
                                <div className='card h-100 shadow'>
                                <img src={cancion.album.images[0].url} alt={cancion.name} />
                                    <h3>{cancion.name}</h3>
                                    <audio src={cancion.preview_url} controls className='w-100'></audio>
                                </div>
                            </div>
                            );

                    })
                }
            </div>

</>
  )
}
