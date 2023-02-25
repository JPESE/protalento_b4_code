const cuentas = [
    {nombre: "Mali", numeroCuenta: "1", saldo: 200, password: 1},
    {nombre: "Gera", numeroCuenta: "2", saldo: 290, password: 2},
    {nombre: "Maui", numeroCuenta: "3", saldo: 67, password: 3}
];

function mali(form){
    if (form.u.value=="Mali") {
        if (form.c.value=="1") {
            location="principal.html"
        } else {
            alert("error de password, intentelo de nuevo.");
        //solamente puede haber 1 returno por función    
        }
    } else {
        alert("error de usuario, intentelo de nuevo");
    }
    
}
function formula1(){
    let CantidadT=parseInt(document.getElementById('cant').value);
    let cantidad1=parseInt(document.getElementById('c1').value);
     //if = document.getElementById('c1').value=(cantidad1+CantidadT);
     let cantidadTotal=cantidad1+CantidadT
     if (cantidadTotal<=990 && cantidadTotal>=10){
        document.getElementById('c1').value=(cantidad1+CantidadT);
     } else {
alert("la cantidad no es valida");
     } 
    //hacer esto con gera y maui
    }
    

function formula2(){
    let CantidadT=parseInt(document.getElementById('cant').value);
    let cantidad1=parseInt(document.getElementById('c1').value);
    document.getElementById('c1').value=(cantidad1-CantidadT);
}

function gera(form){
    if (form.uGera.value=="Gera") {
        if (form.cGera.value=="2") {
            location="gera.html"
        } else {
            alert("error de password");
            
        }
    } else {
        alert("error de usuario");
    }
    
}    
function formula3(){
    let CantidadT=parseInt(document.getElementById('cant2').value);
    let cantidad2=parseInt(document.getElementById('cGera').value);
    document.getElementById('cGera').value=(cantidad2+CantidadT);
    
}

function formula4(){
    let CantidadT=parseInt(document.getElementById('cant2').value);
    let cantidad2=parseInt(document.getElementById('cGera').value);
    document.getElementById('cGera').value=(cantidad2-CantidadT);
}
function maui(form){
    if (form.uMaui.value=="Maui") {
        if (form.cMaui.value=="3") {
            location="maui.html"
        } else {
            alert("error de password");
            
        }
    } else {
        alert("error de usuario");
    }
    
}    
function formula5(){
    let CantidadT=parseInt(document.getElementById('cant3').value);
    let cantidad3=parseInt(document.getElementById('cMaui').value);
    document.getElementById('cMaui').value=(cantidad3+CantidadT);
    
}

function formula6(){
    let CantidadT=parseInt(document.getElementById('cant3').value);
    let cantidad3=parseInt(document.getElementById('cMaui').value);
    document.getElementById('cMaui').value=(cantidad3-CantidadT);
}