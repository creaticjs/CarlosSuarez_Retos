function validar(){
    var ch = document.getElementById("hora24").value;
    for (i = 0; i < ch.length; i++) {
        if(i <= 1){
            if (isNaN(ch.charAt(i)) != false && ch.charAt(i) != " ") {
                alert("Recuerda el Formato HH:MM");
                return false;
            }
        }
        if(i === 2){
            if (ch.charAt(i) != ":") {
                alert("Recuerda el Formato HH:MM");
                return false;
            }
        }
        if(i <= 4 && i > 2 ){
            if (isNaN(ch.charAt(i)) != false && ch.charAt(i) != " ") {
                alert("Recuerda el Formato HH:MM");
                return false;
            }
        }
    }
    var hora24 = document.getElementById("hora24").value;
    var temp = hora24.split(":");
    if(parseInt(temp[0]) > 23){
        alert("Hora no Valida");
        return false;
    } 
    if(parseInt(temp[1]) > 59){
        alert("Minutos no validos");
        return false;
    }
    return true;
}

function formatoHora(){
    if(validar()){
        var hora24 = document.getElementById("hora24").value;
        var temp = hora24.split(":");
        var hora12 = "";
        var txt = "";
        // horas
        if(parseInt(temp[0]) > 0 && parseInt(temp[0]) <= 12){
            hora12 = hora12 + parseInt(temp[0]);
            txt = " AM"
        }
        if(parseInt(temp[0]) > 12 && parseInt(temp[0]) <= 23){
            hora12 = hora12 + parseInt(temp[0])-12;
            txt = " PM"
        }
        hora12 = hora12 + ":";
        // minutos
        hora12 = hora12 + parseInt(temp[1]);
        hora12 = hora12 + txt;
        //fijar resultados
        var res = document.getElementById("formato");
        res.innerHTML = "Hora en formato 12Hrs "+ hora12;

    }    
}