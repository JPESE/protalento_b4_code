// EJERCICIOS DE PETICIONES
//1.- Hacer una funcion que haga una petición 
//     (Ejemplo: peticionLibro(“i robot”);
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot) 

      //SIEMPRE EN CADA PROYECTO
//- se debe en la terminal ubicarse en la carpeta en la cual se desea trabajar con el comando cd se entra a las carpetas desde la terminal, con ls sabe donde esta ubicado.
//- se deben poner npm init en la terminal para crear el archivo package.json.
//- se debe poner npm install en la terminal para crear el archivo package-lock.json.
//- se debe crear el archivo .gitignore y poder dentro del archivo node_modules/
// - se debe colocar en la terminal npm install recuest para crear las dependencias en el package.json. 
// - para ver el resultado en la consola debo poner node index.js en la terminal. 
                    //SOLUCIÓN EJERCICIO 1
   //B: se utiliza el request
const request = require('request');
   //C:Se hace la petición con request get de la url y siempre lleva una funcion con error, response y body entre parentesis. 
request.get("http://openlibrary.org/search.json?q=i+robot", function (error, response, body){
if (response.statusCode === 200){
   //D.JSON.parse: es una función que sirve para cambiar al json que viene de la pertición a un objeto de js
const json = JSON.parse (body);
console.log(json)
} else {
    console.log('error, algo esta mal en la petición', error)
}  
})
//E.Se realiza la petición.
const getLibroByTitulo = (libroTitulo) => {
   request.get(`http://openlibrary.org/search.json?q=i+robot${libroTitulo}` )
}

// 2.- Hacer una petición por autor y devolver la lista de 
//     sus libros
//     http://openlibrary.org/search.json?author=asimov


// 3.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse


// 4.- Hacer una petición a la swapi a un personaje y obtener 
//     sus películas.
//     https://swapi.co/


// 5.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//     https://api.nasa.gov/


// 6.- Traer los primeros 151 pokemon de la primera generacion y 
//     devolver un arreglo de objetos con el nombre, sus moves, tipos, tamaño 
//     y peso.
//     /https://pokeapi.co