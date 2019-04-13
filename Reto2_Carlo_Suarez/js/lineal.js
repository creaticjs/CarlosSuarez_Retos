function resolver(){
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);
    var c = parseInt(document.getElementById("c").value);
    var d = parseInt(document.getElementById("d").value);
    var e = parseInt(document.getElementById("e").value);
    var f = parseInt(document.getElementById("f").value);
    var div = (a*e) - (b*d);
    if(div != 0){
        var x =parseFloat( ((c*e) - (b*f))/div );
        var y =parseFloat( ((a*f) - (c*d))/div );
    }else{
        alert("No tiene solucion");
    }
    

    //Fijar respuesta
    var res = document.getElementById("solucion");
    res.innerHTML = "X = "+x+", Y = "+y;

}