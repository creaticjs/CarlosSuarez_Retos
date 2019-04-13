function calcular(){
    var numero = parseInt(document.getElementById("numero").value);
    var res = document.getElementById("res");
    if (primo(numero)) {
        res.innerHTML = "Es Primo !";
    }else{
        res.innerHTML = "No Es Primo !";
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