function fijarNum(){
    var numero = document.getElementById("numero");
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    var d = document.getElementById("d").value;
    numero.innerHTML = a+b+c+d;
    numero.value = a+b+c+d;
}

function calcular(){
    var numero = parseInt(document.getElementById("numero").value);
    numero = parseFloat(numero/100);
    numero = Math.round(numero);
    numero = numero * 100;
    // Fijar resultado
    var res = document.getElementById("aprox");
    res.innerHTML = numero.toString();
    
}