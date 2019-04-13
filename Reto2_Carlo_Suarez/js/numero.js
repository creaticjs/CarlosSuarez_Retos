function calcular() {
    var numero = parseInt(document.getElementById("numero").value);
    var txt  = "";

    if(numero == 0 )
        txt = "El numero es igual a 0";
    if(numero > 0 )
        txt = "El numero es Positivo";    
    if(numero < 0 )
        txt = "El numero es Negativo";

    var res = document.getElementById("res");
    res.innerHTML = txt;

}