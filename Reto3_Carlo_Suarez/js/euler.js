function factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * factorial(n - 1);
}
function calcular() {
    var valor_x = parseInt(document.getElementById("valor_x").value);
    text = "<div style='width: 8%;float: left;'>"+"1 + "+"</div><div style='width: 8%;float: left;'>"+valor_x+" + </div>";
    for (let index = 2; index <= 100; index++) {
        if(index == 100){
            text = text + "<div style='width: 12%;float: left;'><span class='denominador'>"+ valor_x +"</span><span style='float:left;font-size: 10px;vertical-align: super;'>"+ index +"</span><span class='divisor'>" + index + "!</span> </div>";
        }else{
            text = text + "<div style='width: 12%;float: left;'><span class='denominador'>"+ valor_x +"</span><span style='float:left;font-size: 10px;vertical-align: super;'>"+ index +"</span><span class='divisor'>" + index + "!</span>  + </div>";
        }
        

    }

    var listar = document.getElementById("listar");
    listar.innerHTML = text;

}
