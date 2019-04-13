function validar(){
    var fecha_text = document.getElementById("fecha_text").value;
    var temp_tex = fecha_text.split(" ");
    temp_tex[0] = temp_tex[0].replace(",","");
    if (isNaN(temp_tex[0]) != false && temp_tex[0] != " ") {
        alert("Dia incorrecto Formato (dd, Mes YYYY)");
        return false;
    }
    if (isNaN(temp_tex[1]) == false && temp_tex[1] != " ") {
        alert("Mes incorrecto Formato (dd, Mes YYYY)");
        return false;
    }
    if (isNaN(temp_tex[2]) != false && temp_tex[2] != " ") {
        alert("Año incorrecto Formato (dd, Mes YYYY)");
        return false;
    }

    if(parseInt(temp_tex[0]) < 0 || parseInt(temp_tex[0]) > 31  ){
        alert("Dia no Valido");
        return false;
    }
    if(parseInt(temp_tex[2]) < 0){
        alert("Año no Valido");
        return false;
    } 

    return true;
}

function formatoFecha(){
    if(validar()){
        var fecha_text = document.getElementById("fecha_text").value;
        var temp_tex = fecha_text.split(" ");
        temp_tex[0] = temp_tex[0].replace(",","");
        var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        var mes = parseInt(months.indexOf(temp_tex[1])) +1
        //fijar resultados
        var res = document.getElementById("formato");
        res.innerHTML = "Fecha Numerica: " +temp_tex[0]+" "+mes+" "+temp_tex[2];

    }    
}