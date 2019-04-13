function calcular(){
    var fecha = document.getElementById("dias_mes").value;
    var tmp_fecha = fecha.split(" ");
    var dias = new Date(tmp_fecha[1], tmp_fecha[0] , 0).getDate();

    // Fijar resultados
    var res = document.getElementById("dias");
    res.innerHTML = dias+" Dias";
}