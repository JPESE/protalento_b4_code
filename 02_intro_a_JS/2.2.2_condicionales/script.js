/*a.Solicitar al usuario un número, y determinar si es divisible entre dos o no. Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x núm*/

 //let numeroIngresado  = prompt( "ingresa un numero por favor" )

  //if ( (numeroIngresado % 2) == 0 ) {
  //alert(numeroIngresado + ' número es divisible entre 2')} 
   //else {
  //alert(numeroIngresado + ' número no es divisible entre 2')  }

  //FUNCIONES
  //let numeroIngresado  = prompt( "ingresa un numero por favor" )
  //function numerodivisible(numero){
  //    if ((numeroIngresado % 2) == 0){
  //    alert(numeroIngresado + 'numero es divisible entre 2')      
  //    }
  //    else{
  //          alert(numeroIngresado + 'numero no es divisible entre 2')
  //    }
  //    return mensajeRetorno
      
  //}
  //let mensajeRetorno = numerodivisible (numeroIngresado)
  //alert (mensajeRetorno)

  
/*b.Crear un programa que determine si un número introducido en un Prompt es par o no, la respuesta será mostrada en un Alert. */

  //let numero = prompt("introduce un número entero"); 
  //let resultado = parImpar (numero);
  //alert ('El numero' +numero+ 'es' +resultado );
  //console.log (numero);

//function parImpar (numero) {
  //if (numero % 2 == 0) 
  //{ return ' par ';}
  //else {return ' impar ';}
//}
//c.Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir "Ganaste un premio", en caso contrario mostrar el número y el mensaje “Lo sentimos, sigue participando”.
//
//let ValorCliente =prompt("Ingresa un numero de usuario");
  //if((ValorCliente == 1000))
    //{alert(ValorCliente + ' Ganaste un premio. ')}
  //else{alert(ValorCliente + ' Lo sentimos, sigue participando. ')}
//
//
//*d.Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
//
//    let a =prompt("Ingrese el primer numero");
//    let b =prompt("Ingrese el segundo numero");
          
//            if(a>b)
//           alert("El numero menor es : "+b);
//            if(b>a)
//             alert("El numero menor es : "+a);

 //e.Solicitar al usuario que ingrese tres números y mostrar cuál de los tres es el número mayor. Considerar el caso en que 2 números sean iguales.
 
 //let n1,n2,n3,t,mayor,igual;
//	n1 =(prompt("Número 1"));
//	n2 =(prompt("Número 2"));
//	n3 =(prompt("Número 3"));
//
//	if (n1 > n2) {
//		t = n1;
//	}else{
//		t = n2;
//	}

//	if (t > n3) {
//		mayor = t;
//	}else{
//		mayor = n3;
//	}
//  alert("El mayor es "+mayor);
//  if ( (igual === n1,n2,n3 ) ) {
//    alert( 'Dos numeros son iguales')}
        
 //Adicional: Requerir al usuario que ingrese un día de la semana e imprimir un mensaje si es lunes, otro mensaje diferente si es viernes, otro mensaje diferente si es sábado o domingo. Si el día ingresado no es ninguno de esos, imprimir otro mensaje.
  
   // let DiasDeLaSemana = prompt ( "ingresa un dia de la semana por fabor")

    //    if( DiasDeLaSemana.toLowerCase() === 'lunes'){
    //          alert(DiasDeLaSemana + ' de zapatero');
    //        }
    //        
    //    if( DiasDeLaSemana.toLowerCase() === 'viernes'){
    //          alert(DiasDeLaSemana + ' y el cuerpo lo sabe');
    //          }
//
  //      if( DiasDeLaSemana.toLowerCase() === 'sabado'){
    //          alert(DiasDeLaSemana + ' ¿asadito o que?');
      //        }
//
  //      if( DiasDeLaSemana.toLowerCase() === 'domingo'){
    //          alert(DiasDeLaSemana + ' de desemguayabe');
      //        }   

      //  if( DiasDeLaSemana.toLowerCase() === 'martes'){
        //      alert(DiasDeLaSemana + ' con toda ');
          //    }    

     //   if( DiasDeLaSemana.toLowerCase() === 'miercoles'){
       //       alert(DiasDeLaSemana + ' con toda ');
         //     }   

      //  if( DiasDeLaSemana.toLowerCase() === 'jueves'){
       //       alert(DiasDeLaSemana + ' con toda ');
        //      }  
//TAREA CONDICIONALES CON FUNCIONES
      function pregunta (respuestaUsuario){
//const valorIngresado = prompt ("¿Eres bellisimo/a?") // si - no
        if (respuestaUsuario === 'si') { // si
          //alert('Ciertamente');
        return "Ciertamente";
        } else {
         //alert('No te creo');
        return "No te creo";
         }
        }
  //esta linea no debe ir porque no quiero que se ejecute cuando se carga el archivo
  //pregunta();
            
  function ejercicio1(){
    const valorIngresado = document.getElementById("input-ejercicio-1").value;
    const resultadoFuncion = pregunta(valorIngresado);
    const newtext = document.createTextNode(resultadoFuncion );
    const elementoResultado = document.getElementById("resultado-1");
    elementoResultado.innerHTML = "";
    elementoResultado.appendChild(newtext);
     }
//  2.Solicitar al usuario un número, y determinar si es divisible entre dos o no.
// Mostrando al usuario un mensaje de “x número es divisible entre 2” o “x
// número
    function pregunta2 (respuestaUsuario2){
       if  ( (respuestaUsuario2 % 2) == 0 ) {
          return "número es divisible entre 2";
              }
       else {
          return "número no es divisible entre 2";
              }
          }            
    function ejercicio2(){
    const valorIngresado2 = document.getElementById("input-ejercicio-2").value;
      const resultadoFuncion2 = pregunta2(valorIngresado2);
      const newtext = document.createTextNode(resultadoFuncion2);
      const elementoResultado2 = document.getElementById("resultado-2");
      elementoResultado2.innerHTML = "";
      elementoResultado2.appendChild(newtext);
      }
// 3.Crear un programa que determine si un número introducido en un Prompt
// es par o no, la respuesta será mostrada en un Alert.
    
// funciones
//    function pregunta3 (respuestaUsuario3){
//      if   ( (respuestaUsuario3 % 2) == 0 ) {
//          return "numero es un numero par";
//      }
//      else {
//          return "numero es un numero inpar";
//      }
//  }
//  function ejercicio3(){
//      const valorIngresado3 = document.getElementById("input-ejercicio-3").value;
//      const resultadoFuncion3 = pregunta3(valorIngresado3);
//      const newtext = document.createTextNode(resultadoFuncion3);
//      const elementoResultado3 = document.getElementById("resultado-3");
//      elementoResultado3.innerHTML = "";
//      elementoResultado3.appendChild(newtext);
//  }
//4.Solicitar al usuario un número de cliente. Si el número es el 1000, imprimir
// "Ganaste un premio", en caso contrario mostrar el número y el mensaje
// “Lo sentimos, sigue participando”
     function pregunta4 (respuestaUsuario4){
            if  ( (respuestaUsuario4 == 1000 ) ) {
                return "Ganaste un premio";
            }
            else {
                return "Lo sentimos, sigue participando";
            }
        }
        function ejercicio4(){
            const valorIngresado4 = document.getElementById("input-ejercicio-4").value;
            const resultadoFuncion4 = pregunta4(valorIngresado4);
            const newtext = document.createTextNode(resultadoFuncion4);
            const elementoResultado4 = document.getElementById("resultado-4");
            elementoResultado4.innerHTML = "";
            elementoResultado4.appendChild(newtext);
        }
//5.Solicitar al usuario que ingrese dos números y mostrar cuál de los dos es menor. No considerar el caso en que ambos números son iguales.
       
  //    function pregunta5 (respuestaUsuario5A, respuestaUsuario5B){
  //        if  (respuestaUsuario5A > respuestaUsuario5B) {
  //            return (respuestaUsuario5B +' Es menor' );
  //        }
  //        if (respuestaUsuario5A < respuestaUsuario5B){
  //            return  (respuestaUsuario5A +' Es menor' );
  //        }
  //    }
        
  //      function ejercicio5(){
  //          const valorIngresado5A = document.getElementById("input-ejercicio-A").value;
    //        const valorIngresado5B = document.getElementById("input-ejercicio-B").value;
  //          const resultadoFuncion5 = pregunta5(valorIngresado5A,valorIngresado5B);
  //          const newtext = document.createTextNode(resultadoFuncion5);
  //          const elementoResultado5 = document.getElementById("resultado-5");
  //          elementoResultado5.innerHTML = "";
  //          elementoResultado5.appendChild(newtext);
  //      }
        


                