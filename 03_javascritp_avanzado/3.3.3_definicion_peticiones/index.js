//CONCEPTOS CLASE MONSET // JSON (JavaScript Object Notation)
/* 
Formato de intercambio de datos ligero y facil de leer y escribir, 
Formato de texto que se utiliza para transmitir datos estructurados, 
como objetos y matrices, entre diferentes aplicaciones y plataformas
A menudo se utiliza en aplicaciones web para transmitir datos entre un servidor y un cliente.
Por ejemplo, cuando un usuario hace una solicitud a un servidor web para obtener información
*/

// package.json
/* 
archivo que se utiliza en proyectos de Node.js, para definir las dependencias del proyecto y otras configuraciones
*/

//HTTP (Hypertext Transfer Protocol)
/* 
Protocolo de comunicación que se utiliza para la transmision de información en la World Wide Web
Protocolo utilizado principalmente para la comunicación entre el navegador web de un usuario y un servidor web
*/

// Diferencia entre HTTP y HTTPS
/* 
HTTPS, es la versión segura de HTTP que utiliza el cifrado SSL/TLS con el fin 
de proteger la información transmitida entre el navegador del usuario y el servidor web
*/

//Diferencia entre PATCH y PUT
/* 
->PUT: actualiza completamente un recurso
->PATCH: actualiza parcialmente un recurso
*/

//Peticion API
/* 
Solicitud que se realiza a una API utilizando el protocolo de comunicacion HTTP para obtener o enviar
informacion entre diferentes aplicaciones
Cuando se realiza una peticion, el navegador web envia una solicitud HTTP
al servidor y espera una respuesta. La respuesta puede ser en formato JSON, XML, HTML u otro formato
Las peticiones api se realizan generalmente mediante HTTP utilizando los métodos HTTP
como GET, POST, PUT, DELETE, PATCH
*/

//API (Application Programming Interface)
/* 
Conjunto de reglas, protocolos y herramientas que permiten que diferentes aplicaciones interactuen entre si.
Permiten a las aplicaciones enviar y recibir datos y realizar acciones en otras aplicaciones

*/
//EJEMPLO MONSET
// 1 instalar request ---> npm install request
// 2 utilizar request 
const request = require('request');

// 3 Peticion con request 
request.get("https://pokeapi.co/api/v2/pokemon/pikachu", function (error, response, body) {
  if(response.statusCode === 200) {
//         // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
        const json = JSON.parse(body);
         console.log(json)
     } else {
         console.log('Erro, algo esta mal en la peticion')
     }
 })

// 4 Reutilizar la petición 
const getPokemonByName = (pokemonName) => {
    request.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}` , function (error, response, body) {
    if(response.statusCode === 200) {
        // JSON.parse() --> funcion de JS que se utiliza para convertir el JSON que viene de la petición a un objeto JS
        const json = JSON.parse(body);
        // console.log(Object.keys(json), json.name)
        console.log(json.name)
    } else {
        console.log('Error, something went worng', error)
    }
})
}

getPokemonByName('Montse');
getPokemonByName('persian');
                        // CONCEPTOS MIOS 
 //SIEMPRE EN CADA PROYECTO
//- se debe en la terminal ubicarse en la carpeta en la cual se desea trabajar con el comando cd se entra a las carpetas desde la terminal, con ls sabe donde esta ubicado.
//- se deben poner npm init en la terminal para crear el archivo package.json.
//- se debe poner npm install en la terminal para crear el archivo package-lock.json.
//- se debe crear el archivo .gitignore y poder dentro del archivo node_modules/
// - se debe colocar en la terminal npm install recuest para crear las dependencias en el package.json. 
// - para ver el resultado en la consola debo poner node index.js en la terminal. 

/* NOTA: get:obtener
         post: crear
         put/patch:actualizar
         delete:borrar*/
        