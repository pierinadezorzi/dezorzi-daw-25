'use strict' //Esto es para evitar errores no controlados
// document // con esto accedo al DOM desde le script

// var headerArray = document.getElementsByTagName("header"); //Esto es demasiado igual a selenium. Como es un getElements --> trae un array

// var header = document.getElementsByTagName("header")[0]; //Esto es demasiado igual a selenium. Como es un getElements pero en la posición 0

// // Es importante que el SCRIPT tiene eque estar abajo del BODY o ponerle defer
// // <script src=2./script.js" defer></script> ---> esto es lo que iria en el html
// var container = document.getElementsByClassName('container')[0];
// var div = document.createElement('div');

// container.append('div'); // con append se puede meter cualquier cosa

// // función para crear multiples objetos
// for(var i= 0; i<10; i++){
//     var cell = document.createElement('div');
//     cell.append(cell);
//     cell.className= 'cell';
//     container.append(cell);
//     cell.setAttribute('id', 'cell'); //asi asigno IDs a todos los elementos
// }

// // en styles.css
// // .cell{
// // backgroundColor: blue
// // }

// // EVENTOS
// // Event listeners --> funciones que se ejecutan cuando se detecta algún elemento especidifciado

// //primero se pasa el evento que quiero detectar y después paso el callback (Es una funcion que se pasa como parametro de otra funcion)
// addEventListener('click', function clickHandler(event){
// console.log(event.target);
// console.log(event.target.value);
// } )


// // target: se usa para saber a que elemento se le aplico el evento

// var button = document.createElement('button');
// button.append('click me');
// container.append('button');

// button.addEventListener('click', function clickHandler(event){
//     event.target.style.backgroundColor = '435f3'
//     var newElement = document.createElement('div');
//     newElement.append('new element');
//     container.append(newElement);
//     } )

// diferencia entre var y let, es el scope del tipo de dato. ---> esto seguro es pregunta de examen


// EJERCICIO 1

var button = document.getElementsByTagName('button')[0];
var checkColor = false;
button.append('White');
button.addEventListener('click', function(){
    if (button.style.backgroundColor === 'black') {
        button.style.backgroundColor = 'white';
        button.style.color = 'black';
        button.textContent='White';
    } else {
        button.style.backgroundColor = 'black';
        button.style.color = 'white';
        button.textContent = 'Black';
    }
    checkColor = !checkColor;
});

