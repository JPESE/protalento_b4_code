function login(form){
    if (form.u.value=="Mali") {
        if (form.c.value=="1") {
            location="principal.html"
        } else {
            alert("error de password");
            
        }
    } else {
        alert("error de usuario");
    }
    
}
function formula(){
    let CantidadT=parseInt(document.getElementById('cant').value);
    let cantidad1=parseInt(document.getElementById('c1').value);
    let cantidad2=parseInt(document.getElementById('c2').value);
    document.getElementById(c1).value=(cantidad1-CantidadT);
    document.getElementById(c2).value=(cantidad2+CantidadT);
}

    
