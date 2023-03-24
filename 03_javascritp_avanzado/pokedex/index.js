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

fetch('https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json')
.then(response => response.json())
.then(data => {
  
data.results.map((elemento) => {
    personajesDiv.appendChild(crearElemento(elemento.name, elemento.image
        ));
    console.log('elemento, elemento.name');
})
})
.catch(error => {
    console.error(error);
});