var d = new Date();
var fecha_actual = document.getElementById("fecha_actual");
fecha_actual.innerHTML = d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear();

function calcular(){
    var dia = document.getElementById("dia").value;
    var mes = document.getElementById("mes").value;
    var anio = document.getElementById("anio").value;
    var d = new Date();

    let fechaNacimiento = new Date(anio+"/"+mes+"/"+dia);
    let fechaActual = new Date();

    let resta = fechaActual.getTime() - fechaNacimiento.getTime();
    var edad = Math.floor(Math.round(resta/(1000*60*60*24))/360);

    var res = document.getElementById("edad");
    if(edad > 1 ){
        //fijar resultados
        res.innerHTML = (edad-1)+" años";
    }else{
        resta = Math.round(resta/(1000*60*60*24));
        var meses = Math.floor(resta/30);
        resta = resta - (meses*30);
        dias = 0;
        if(resta > 0 ){
            dias = resta;
        }
        //fijar resultados
        res.innerHTML = meses+" meses, "+dias+" dias ";
    }

}
