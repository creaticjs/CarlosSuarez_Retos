
var c = 7;
var j = 2;
var numerosPrimos = [];

for (; j < c; j++) {

    if (primo(j)) {
        numerosPrimos.push(j);
    }

}

function primo(numero) {

    for (var i = 2; i < numero; i++) {

        if (numero % i === 0) {
            return false;
        }

    }

    return numero !== 1;
}

numerosPerfectos = [];

numerosPrimos.forEach(function(item) {
    p = Math.pow(2,item-1)*(Math.pow(2,item)-1);
    numerosPerfectos.push(p);
});

// Fijar resultados
var res = document.getElementById("perfecto");
var txt = "";
numerosPerfectos.forEach(function(item) {
    txt = txt + item + "<br>";  
});
res.innerHTML = txt;
