'use strict' //Esto es para evitar errores no controlados

// CLASE 10
// URL 
// http://www.myweb.com.ar:80/path/to/myfile.html/?key1=value1&&key1=value1#APartOfTheDocument
// http --> protocolo
// www.myweb.com.ar --> domino
// :80 --> puerto(para https es :443 pero como ya ponemos el https entonces el navegador lo reconoce)
// /path/to/myfile.html --> la ruta del archivo
// ?key1=value1 --> params
// #APartOfTheDocument --> ancla

// Asicronismo en JS
// Lo sincrónico es secuencial, cada tarea depende de lo anterior
// En javascript es single thread, por lo tanto, la ejecución de tareas entonces es secuencial y sincrónica
// js tiene un mecanismo que es el "event loop", que lo que permite hacer es ejecutar una tarea paralelamente mientras se continua 
// con la ejecución normal de las demás tareas 
// callback: 
// promesa: 


console.log('hola')

//funcion asincrona
// setInterval --> cada cierto tiempo se ejecuta
setInterval(function() {
    console.log('setInterval hola')
}, 1000);

// estp es otra forma de ejecutar un setInterval
function hola(){
    console.log('texto a mostrar')
}
setInterval(hola(), 1000);

//SET TIMEOUT
// ejecuta una función después de tanto tiempo

setTimeout(function(){
    console.log('this is for set timeout')
}
)

// otra forma
chau(){
    console.log('this is for set timeout')
}

setTimeout(chau(), 1000)


//PARA EL TP: se puede usar el timeout para ejecutar una función "loose" o sea que indique que el usuario perdió el juego
// PREGUNTA DE EXAMEN sobre cómo se ejecutaría y en qué orden un setInterval o setTimeout

//EVENT LOOP


// latenflip.com --> loupe // para probar event loop


//PROMESAS

// Es un objeto que almacena la rta del llamado de una fun asincronica 
// tiene dos salidas, una es que se cumpl,a la promesa y otra es que no se cumpla basically 
// 3 estado: pending, fulfilled, rejected --> la promesa siempre se va a resolver, satisfactoriamente o no. 

const pedido = new Promise(function(resolve, reject){
    var ok = true;
    if(ok){
        resolve('success')
    }else{
        reject('failed')
    }
})

console.log('pedido', pedido)

pedido
    .then(function (result){
        console.log('mensaje de exito')

    })
    .catch(function(result){
        console.log('mensaje de exito')
    })
