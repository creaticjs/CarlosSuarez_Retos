function calcular(){
    var n = parseInt(document.getElementById("n").value);
    i = 1 ;
    text =  "";
    while(i <= n){
        text = text +caracter(i)+ "<br>";
        i++;
    }
    // Fijar resultados
    var res = document.getElementById("res");
    res.innerHTML = text;

}
function caracter(n){
    var element = "";
    for (let index = 0; index < n; index++) {
         element = element+"*";
        
    }
    return element;
}