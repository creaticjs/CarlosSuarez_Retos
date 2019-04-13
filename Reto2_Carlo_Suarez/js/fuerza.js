const g = 6.672 * Math.pow(10, -8);

function calcularFuerzaG(){
    var m1 = document.getElementById("m1").value;
    var m2 = document.getElementById("m2").value;
    var d = document.getElementById("d").value;
    m1 = parseFloat(m1); 
    m2 = parseFloat(m2); 
    d = parseFloat(d); 
    if(d>0){
        var res = document.getElementById("fuerza");
        var fuerza = (g*m1*m2)/Math.pow(d, 2);
        //fuerza = fuerza.toFixed(5);
        res.innerHTML = fuerza;
    }
    

    
}