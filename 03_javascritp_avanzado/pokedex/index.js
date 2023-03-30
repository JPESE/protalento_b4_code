const listaPokemon = document.querySelector("#listaPokemon");
let URL = "https://pokeapi.co/api/v2/pokemon/";

for (let i = 1; i <= 24; i++) {
    fetch(URL + i)
    .then((response) => response.json())
    .then(data => mostrarPokemon(data))
}
function mostrarPokemon(poke){

    let tipos = poke.types.map((type) => `<p class="${type.type.name}tipo">${type.type.name}</p>`);
    tipos = tipos.join('');

    const div = document.createElement("div");
div.classList.add("pokemon");
div.innerHTML = `
<p class="pokemon-id-back">${poke.id}</p>
<div class="pokemon-imagen">
    <img src="${poke.sprites.other["official-artwork"].front_default}" alt="${poke.name}">
</div>
<div class="pokemon-info">
    <div class="nombre-contenedor">
<p class="pokemon-id">${poke.id}</p>
<h2 class="pokemon-nombre">${poke.name}</h2>
    </div>
    <div class="pokemon-tipos">
    ${tipos}
</div>   
</div>`;  
listaPokemon.append(div);
}
















// const request = require('request');

// request({
//     method: "GET",
//     url: "https://storage.googleapis.com/campus-cvs/00000000000-images-lectures/pokemons.json"
// }, function ( error, response, body) {
//     console.log(body);
//     const bodyJSON = JSON.parse(body);
//     console.log(bodyJSON);
// })
//  const crearElemento = (nombre, image) => {
//     constrsonajeElement = document.createElement("div");
//     const imagenElement = document.createElement("img");
//     imagenElement.src = image;
// const nombrePersonaje = document.createTextNode(nombre);
// personajeElement.appendChild(nombrePersonaje);
// personajeElement.appendChild(imagenElement);
// return personajeElement;
// }

//fetch('https://storage.googleapis.com/campus-cvs/000//00000000-images-lectures/pokemons.json')
//.then(response => console.log(response))
// .then(data => {
// console.log();
//  data.results.map((elemento) => {
// console.log(elemento.name)
//    fetch(elemento.url)
//    .then(response => response.json())
//    .then(dataIndividual => {
//     console.log(dataIndividual);
//    })
   
 //})
//})
//.catch(error => {
//   console.error(error);
//});
//function mostrarPokemones (name1){
//console.log(name1)}

