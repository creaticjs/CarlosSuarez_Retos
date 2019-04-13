function calcularHipotenusa(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var h = document.getElementById("h").value;
    a = parseFloat(a); 
    b = parseFloat(b); 
    h = parseFloat(h); 
    if(a>0 && b>0 && h>0){
        var res = document.getElementById("hipotenusa");
        var hipo = Math.sqrt(Math.pow(a, 2)+Math.pow(b, 2));
        res.innerHTML = hipo;
    }
}