import React from 'react'
import styleD from './Canciones.module.css'

export default function Canciones( { canciones } ) {
  return (
<>

            <section className={styleD.banner}>
            
            </section>

            <section className={styleD.container}>
                <img className={styleD.gif} src='https://i.pinimg.com/originals/ec/8d/da/ec8dda885688ef35203135cc247e2259.gif' alt="" />
            </section>


            {/* <div className="row row-cols-1 row-cols-md-5">
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
            </div> */}

</>
  )
}
