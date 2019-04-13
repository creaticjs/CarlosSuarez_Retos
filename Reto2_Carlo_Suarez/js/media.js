/**
 * Calcular Media estudiante
 */
var notas = Array();

//Agregar notas
function addNota(){
    var nota = document.getElementById("nota").value;
    notas.push(parseInt(nota));
    if(notas.length == 4 ){
        var listar = document.getElementById("listarNotas");
        res = "Notas del Estudiante:<br>";
        notas.forEach(function(item){
            res = res + item+"<br>";
        });
        listar.innerHTML = res+"<br>"; 
    }
}

//Calcular nota estudiante
function calcularNota(){
    var sum = 0;
    
    notas.forEach(function(item){
        sum = sum + item;
    });

    var media = sum/notas.length;
    notaFinal = "";
    //comparar y obtener Nota
    if( media >= 0 && media <= 59){
        notaFinal = "E";
    }
    if( media >= 60 && media <= 69){
        notaFinal = "D";
    }
    if( media >= 70 && media <= 79){
        notaFinal = "C";
    }
    if( media >= 80 && media <= 89){
        notaFinal = "B";
    }
    if( media >= 90 && media <= 100){
        notaFinal = "A";
    }

    //fijar resultados
    var res = document.getElementById("notaFinal");
    res.innerHTML = "Nota Final :"+ notaFinal;

    //reiniciar valores
    notas = [];
    document.getElementById("nota").value = 0 ;
    
}
