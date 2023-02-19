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
            alert("error de password");
            
        }
    } else {
        alert("error de usuario");
    }
    
}
function formula1(){
    let CantidadT=parseInt(document.getElementById('cant').value);
    let cantidad1=parseInt(document.getElementById('c1').value);
    document.getElementById('c1').value=(cantidad1+CantidadT);
    
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