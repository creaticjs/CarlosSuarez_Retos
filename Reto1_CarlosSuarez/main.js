// var entrada de datos
var num1="";
var num2="";
var operador=true;
var signo_op = "";

 

function inNumero(valor){
    const v = parseInt(valor);
    pantalla = document.getElementById("pantalla");
    if(operador){
        num1 = num1+v;
        pantalla.value = num1;
    }else{
      num2 = num2+v;
      pantalla.value = num2;
    }

}

function operacion(signo){
    pantalla = document.getElementById("pantalla");
    operador=false;
    signo_op = signo;
    pantalla.value = signo;
}

function operar(){
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    switch(signo_op) {
        case "*": 
          pantalla.value = (num1*num2);
          break;
        case "-":
          pantalla.value = (num1-num2);
          break;
        case "+":
          pantalla.value = (num1+num2);
          break;
        case "/":
          pantalla.value = (num1/num2);
          break;  
        default:
          // code block
      }
         
}