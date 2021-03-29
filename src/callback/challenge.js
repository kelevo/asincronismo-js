let XMLhttpRequest = require('XMLHttpRequest').XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/';

function fetchData (url_api, callback) {
    //Generamos referencia al objeto que necesitamos
    let xhttp = new XMLhttpRequest();
    //Hacer un llamado a una url
    //El tercer valor es activar el asincronismo dentro de XMLHttp
    xhttp.open('GET', url_api, true);
    //Escuchar lo que nos hara esa conexion
    xhttp.onreadystatechange = function (event) {
        //Haremos una validacion de los estados de esta peticion
        //Son 5 estados, del 0 al 4, y estan en la documentacion
        //en este caso usaremos el 4 que es para ver si se ha completado
        if(xhttp.readyState === 4) {
            //si se cumple hacemos una segunda llamada que nos permitira
            //saber el estatus en el cual se encuentra
            if(xhttp.status === 200) {
                //El primer valor es el error, en el segundo parametro
                //es el resultado, como es json tenemos que parsear
                callback(null, JSON.parse(xhttp.responseText));
            } else {
                //Como buena practica tenemos que crear un error por si se requiere
                const error = new Error('Error ' + url_api);
                return callback(error, null);
            }
        }
    }
    xhttp.send();
}

//Resolvemos el problema: Hacer peticion a la APi, obtener cuantos elementos tiene
//de personajes, despues acceder al primer personaje y obtener la ubicacion en la
//que se encuentra para despues saber en que dimension se encuentra

//Hacemos el llamado a fetchData()
fetchData(API, function (error1, data1) {
    if(error1) return console.error(error1);
    fetchData(API + data1.results[0].id, function (error2, data2) {
        if(error2) return console.error(error2);
        fetchData(data2.origin.url, function (error3, data3) {
            if(error3) return console.error(error3);
            console.log(data1.info.count);
            console.log(data2.name);
            console.log(data3.dimension);
        })
    })
})