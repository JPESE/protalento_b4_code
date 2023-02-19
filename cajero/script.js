
    const cuentas = [
        {nombre: "Mali", numeroCuenta: "1", saldo: 200, password: 1},
        {nombre: "Gera", numeroCuenta: "2", saldo: 290, password: 2},
        {nombre: "Maui", numeroCuenta: "3", saldo: 67, password: 3}
    ];
    
    function validarPIN(numeroCuenta, pin) {
      for (let i = 0; i < usuarios.length; i++) {
        if (usuarios[i].numeroCuenta === numeroCuenta && usuarios[i].pin === pin) {
          return i;
        }
      }
      return -1; // devolver -1 si el PIN no es correcto
    }
    //let Contraseña
    //function pregunta(respuestaUsuario) 
     
  
    //function preguntaContraseña(respuestaUsuario) {
    //  if (respuestaUsuario === '1') {
    //    return "contraseña correcta";
    //  }
    //  else {
    //    return "contraseña incorrecta";
    //  }
    //}
    //function cuenta1() {
    //  const valorIngresado = document.getElementById("input-contraseña-1").value;
    //  const resultadoFuncion = preguntaContraseña(valorIngresado);
    //  const newtext = document.createTextNode(resultadoFuncion);
    //  const elementoResultado = document.getElementById("resultado");
    //  elementoResultado.innerHTML = "";
    //  elementoResultado.appendChild(newtext);
    //}
     
  
    