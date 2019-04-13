function calcularArea(){
    var a = document.getElementById("a").value;
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;
    a = parseFloat(a); 
    b = parseFloat(b); 
    c = parseFloat(c); 
    
    if(a>0 && b>0 && c>0){
        var p = (a+b+c)/2;
        var res = document.getElementById("area");
        var area = Math.sqrt(p*(p-a)*(p-b)*(p-c));
        res.innerHTML = area;
    }
}