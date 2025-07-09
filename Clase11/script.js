'use strict' //Esto es para evitar errores no controlados

// ------------------------------------------- CLASE 11 --------------------------------------------
// API: se usa para manejar endpoints
// Tipos de API:
// - REST: usan json, todas las rutas están predefinidas
// - SOAP: usan xml (más viejo)
// - GRPHQL: a diferencia de api rest, son más dinámicas, te permite definir sólo lo que se necesita específicamente de cada recurso

// rickandmorty api

// es una función asincrponica, una promesa. El primer parámetro es la url de la api, el segundo es para la información. 
// con el result.json lo que hacemos es parsear la respuesta para que sea de tipo json


function fetchData(){
    fetch("https://rickandmortyapi.com/api",{
        method: "GET"
    }).then(function(result){
        return result.json() // NO OLVIDAR AGREGAR EL GENERADOR DEL JSON
    }).then(function (result){
        console.log(result);
    }).catch(function(error){
        console.log(error)
    })

}

fetchData();

// LOCAL STORAGE
// es una almacenamiento que perdura en el tiempo en el navegador. Además, la diferencia es que se puede ver la misma info en diferentes pestañas
// en el SESSION STORAGE 


localStorage.setItem("key", "value");

// guardamos la info para mostrarlo en el comsolo o para consumirlo
var info = localStorage.getItem("key");
console.log(info);

// esto se puede usar para guardar los puntajes del TP Final

var object = {
    name: "Fernando",
    age: 27
}

var array = [0,1,2,3,4]

console.log(object.name);
localStorage.setItem("user", json.stringfy(object)) // lo transforma a un string
localStorage.setItem("array", json.stringfy(array)) // lo transforma a un string


console.log(localStorage.getItem("user"))
var localUser = JSON.parse(localStorage.getItem("user")) // definir para qué es este JSON.parse, se guarda directo y es sincrónico
var localUser = JSON.parse(localStorage.getItem("array"))

console.log(localUser.name);
console.log(localStorage.getItem("array"))
console.log(localArray[2]); // esto también funciona porque todos parten de object


// Trabajo Práctico para el 