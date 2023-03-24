/*const request = require('request');

request({
    method: "GET",
    url: "https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json"
}, function ( error, response, body) {
    console.log(body);
    const bodyJSON = JSON.parse(body);
    console.log(bodyJSON);
})*/
const crearElemento = (nombre, image) => {
    const personajeElement = document.createElement("div");
    const imagenElement = document.createElement("img");
    imagenElement.src = image;
const nombrePersonaje = document.createTextNode(nombre);
personajeElement.appendChild(nombrePersonaje);
personajeElement.appendChild(imagenElement);
return personajeElement;
}

fetch('https://pokeapi.co/api/v2/pokemon')
.then(response => response.json())
.then(data => {
console.log(data);
data.results.map((elemento) => {

   fetch(elemento.url)
   .then(response => response.json())
   .then(dataIndividual => {
    console.log(dataIndividual);
   })
    console.log('elemento', elemento.url);
})
})
.catch(error => {
    console.error(error);
});
function mostrarPokemones (name1){
console.log(name1)}

