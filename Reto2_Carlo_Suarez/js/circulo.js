function calcular(){
    const pi = 3.14159;
    var radio = parseFloat(document.getElementById("radio").value);
    var diametro = radio*2;
    var area = pi*Math.pow(radio,2);
    var circunferencia = diametro*pi;

    //fijar resultados
    var res = document.getElementById("circunferencia");
    res.innerHTML = circunferencia.toFixed(2);
    var res = document.getElementById("diametro");
    res.innerHTML = diametro;
    var res = document.getElementById("area");
    res.innerHTML = area.toFixed(2);

}