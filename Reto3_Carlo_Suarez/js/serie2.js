function calcular() {
    var n = parseInt(document.getElementById("n").value);
    i = 1 ;
    suma =  0;
    while(i <= n){
        suma = suma +  (i/Math.pow(2,i));
        i++;
    }
    // Fijar resultados
    var res = document.getElementById("res");
    res.innerHTML = "Suma: "+ suma;
}