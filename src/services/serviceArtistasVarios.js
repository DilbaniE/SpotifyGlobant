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
    const URL_TOPTRACKS_SERVICE = 'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,0EmeFodog0BfCgMzAIvKQp,37i9dQZF1DWZRM5WD7taad';
        // const URL_TOPTRACKS_SERVICE = 'https://api.spotify.com/v1/artists?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6';

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