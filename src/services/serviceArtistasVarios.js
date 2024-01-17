// export async function obtenerArtistasTop(token){
//     const URL_TOPTRACKS_SERVICE="https://api.spotify.com/v1/artists/2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6"

//     const PETICON_ARTISTAS={
//         method:"GET",
//         headers:{"Authorization":token}
//     }


//     let respuestaServicio=await fetch(URL_TOPTRACKS_SERVICE, PETICON_ARTISTAS)
//     let artistas = await respuestaServicio.json()
//     return artistas



// }
export async function obtenerArtistasTop(token) {
    const a = ",1wGIhYkKWSq4yACtTkCkSX,343DJXR8dV27YepfAS5uGf,3hYtANQYrE6pd2PbtEyTIy,2uyweLa0mvPZH6eRzDddeB,4RXxwBtdt6k1YNyyAyiOng,4wLXwxDeWQ8mtUIRPxGiD6,2exkZbmNqMKnT8LRWuxWgy,0EmeFodog0BfCgMzAIvKQp,790FomKkXshlbRYZFtlgla"
    //const URL_TOPTRACKS_SERVICE = `https://api.spotify.com/v1/artists?ids=2gRP1Ezbtj3qrERnd0XasU`;
     const URL_TOPTRACKS_SERVICE = `https://api.spotify.com/v1/artists?ids=2gRP1Ezbtj3qrERnd0XasU${a}`;


    const PETICION_ARTISTAS = {
        method: "GET",
        headers: { "Authorization": token }
    };

    try {
        let respuestaServicio = await fetch(URL_TOPTRACKS_SERVICE, PETICION_ARTISTAS);
        let artistas = await respuestaServicio.json();
        return artistas;
    } catch (error) {
        console.error("Error al obtener los artistas:", error);
        return null;
    }
}
