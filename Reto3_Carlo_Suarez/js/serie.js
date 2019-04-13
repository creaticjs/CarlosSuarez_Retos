function calcular() {
    var n = parseInt(document.getElementById("n").value);
    i = 1 ;
    suma =  0;
    while(i <= n){
        suma = suma +  (1/i);
        i++;
    }
    // Fijar resultados
    var res = document.getElementById("res");
    res.innerHTML = "Suma: "+ suma;
}