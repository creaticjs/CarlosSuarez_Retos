function calcularPi() {
    var n = parseInt(document.getElementById("n").value);
    var n2 = n;
    var piMedios = 1 ;
    while(n > 0){
        p1 = parseFloat((2*n)/((2*n) -1));
        p2 = parseFloat((2*n)/((2*n) +1));
        piMedios = piMedios*(p1*p2);
        n = n - 1;
    }
    // Fijar resultados
    var res = document.getElementById("res");
    res.innerHTML = "Valor Pi: "+ (piMedios*2)+"<br> n = "+n2;
}