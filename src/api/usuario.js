const dummyID = '5fcac6d4c0549154953906dc';

const getPostagens = async (callback, idUsuario) => {

    const cabecalho = {
        method: "GET",
        headers:{
            'Content-Type': "application/json",
            'app-id': dummyID
        }
    }

    const feedHTTP = await(fetch(`https://dummyapi.io/data/api/user/${idUsuario}`, cabecalho));
    const respostaJson = await feedHTTP.json();
    //console.log(respostaJson)
    callback(respostaJson);

}

export default getPostagens;