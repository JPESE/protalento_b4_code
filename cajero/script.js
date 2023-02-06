
    let cuentas = [
        {nombre: "Mali", saldo: 200, password: 1},
        {nombre: "Gera", saldo: 290, password: 2},
        {nombre: "Maui", saldo: 67, password: 3}
    ];
    
    let resultadoSaldo
    function pregunta(respuestaUsuario) {
     
      if (respuestaUsuario === 'si') { 
        return "digita tu contraseña";
      }
    }
    
    function ejercicio1(){
      const valorIngresado = document.getElementById("input-respuesta-1").value;
      const resultadoFuncion = pregunta(valorIngresado);
      const newtext = document.createTextNode(resultadoFuncion);
      const elementoResultado = document.getElementById("resultado-1");
      elementoResultado.innerHTML = "";
      elementoResultado.appendChild(newtext);
    }
    
    
    function preguntaContraseña(respuestaUsuario2) {
      if (respuestaUsuario2 === '1') {
        return "contraseña correcta";
      }
      else {
        return "contraseña incorrecta";
      }
    }
    function ejercicio2() {
      const valorIngresado2 = document.getElementById("input-respuesta-2").value;
      const resultadoFuncion2 = preguntaContraseña(valorIngresado2);
      const newtext = document.createTextNode(resultadoFuncion2);
      const elementoResultado2 = document.getElementById("resultado-2");
      elementoResultado2.innerHTML = "";
      elementoResultado2.appendChild(newtext);
    }
     
  
    