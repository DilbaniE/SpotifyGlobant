import { useEffect, useState } from 'react'
import ObtenerTokenSpotify from '../../services/serviciosSpotify'
import ObtenerCancionesTop, { obtenerCancionesTop } from '../../services/servicioCanciones'
// import styleD from './Home.module.css'
import Canciones from './components/canciones/Canciones';
import { obtenerArtistasTop } from '../../services/serviceArtistasVarios';
import Artistas from './components/artistas/Artistas';


function Home(){
    const[carga, setCarga] = useState(true);
    // Estado para cancoines
    const[canciones, setCanciones]= useState(null);
    // Estado para artistas
    const[artistas, setArtistas]= useState(null);
    




// Canciones
    useEffect(function(){
        ObtenerTokenSpotify()
        .then(function(tokenrespuesta){
            obtenerCancionesTop(tokenrespuesta)
            .then(function(respuestaCanciones){
                console.log("mira repuerca canciones*****");
                console.log(respuestaCanciones)
                setCarga(false)
                setCanciones(respuestaCanciones.tracks)
            })
        })
    },[])

// Artista

    useEffect(function(){
        ObtenerTokenSpotify()
        .then(function(tokenrespuesta){
            obtenerArtistasTop(tokenrespuesta)
            .then(function(respuestaArtistas){
                console.log("mira repuerca*****");
                console.log(respuestaArtistas)
                setCarga(false)
                setArtistas(respuestaArtistas.artists)
            })
        })
    },[])
    
    if(carga){
        return(
            <>
             <h1>Cargando....</h1>
            
            </>
        )
    }
    return(
        <>
            <Canciones canciones= {canciones} />

            <hr />
            <hr />

            <Artistas artistas={artistas} />


        </>
    )

}

export default Home 