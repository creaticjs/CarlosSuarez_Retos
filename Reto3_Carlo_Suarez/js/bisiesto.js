function esBisiesto() {
    var anio = document.getElementById("anio").value;
    var esBisiesto =anio+ " NO es Bisiesto!!!"
    // multiplo de 100 y 400
    if((anio % 100) != 0 && (anio % 400) != 0 ){
        if((anio % 4) == 0 ){
            esBisiesto =anio+ " es Bisiesto!!!"
        }
    }else{
        if((anio % 4) == 0 && (anio % 100) == 0 && (anio % 400) == 0 ){
            esBisiesto =anio+ " es Bisiesto!!!"
        }
    }
    // Fijar resultados
    var res = document.getElementById("bisiesto");
    res.innerHTML = esBisiesto;
}