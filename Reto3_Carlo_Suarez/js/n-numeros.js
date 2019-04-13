var numeros = [];
var n = 0 ;

var valor_n = prompt("Ingrese la cantidad de numros");
if (valor_n != null) {
    n = parseInt(valor_n);
}

//Agregar numeros
function addNumero(){
    var numero = document.getElementById("numero").value;
    numeros.push(parseInt(numero));
    if(numeros.length == n ){
        var listar = document.getElementById("listarNumeros");
        res = "Numeros :<br>";
        numeros.forEach(function(item){
            res = res + item+"<br>";
        });
        listar.innerHTML = res+"<br>"; 
        calcular();
    }
    document.getElementById("numero").value = "" ;
}

//Calcular nota estudiante
function calcular(){
    var sum = 0;
    
    numeros.forEach(function(item){
        sum = sum + item;
    });

    var media = sum/numeros.length;
    
    numeros.sort(function(a, b) {
        return a - b;
      });
    
    //fijar resultados
    var res = document.getElementById("res");
    res.innerHTML = "Media :"+ media+ "<br>Mayor :"+ numeros.pop()+ "<br>Menor :"+ numeros[0];

    //reiniciar valores
    notas = [];
    document.getElementById("numero").value = 0 ;
    
}
