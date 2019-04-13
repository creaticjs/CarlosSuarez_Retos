const c = 2.997925 * Math.pow(10, 10);

function calcularEnergia(){
    var m1 = document.getElementById("m1").value;
    m1 = parseFloat(m1); 
    if(m1>0){
        var res = document.getElementById("energia");
        var energia = c*Math.pow(m1, 2);
        res.innerHTML = energia;
    }
    

    
}