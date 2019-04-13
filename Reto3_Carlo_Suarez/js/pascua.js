var listar = document.getElementById("listarResultado");

var annio = 1990;
var res = "";
var semana = ["Domingo","Lunes","Martes","Miercoles","Jueves","Viernes","Sabado"];
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
while(annio <= 2000){
    var a = annio % 19;
    var b = annio % 4;
    var c = annio % 7;
    var d = ((19*a) +24) % 30;
    var e = ((2*b) + (4*c) + (6*d) + 5) % 7;
    var n = 22 + d + e;

    //validar mes
    var dia = "";
    if(n > 31){
        dia = new Date("04-"+(n-31)+"-"+annio);
    }else{
        dia = new Date("03-"+n+"-"+annio);
    }
    res = res+" "+semana[dia.getDay()]+" "+ dia.getDate()+" "+meses[dia.getMonth()] +" "+annio+ " <br>";
    annio = annio +1;
}
listar.innerHTML = res+"<br>";