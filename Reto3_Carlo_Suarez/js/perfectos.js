function calcular() {
    var c = parseInt(document.getElementById("numero").value);
    var j = 2;
    var numerosPerfectos = [];
    for (; j < c; j++) {
        i = 1;
        var divisores = [];
        while (i < j) {
            if (j % i == 0) {
                divisores.push(i);
            }
            i++;
        }
        suma = 0;
        divisores.forEach(function (item) {
            suma = suma + item;
        });
        if (suma == j) {
            numerosPerfectos.push(j);
        }
    }
    // Fijar resultados
    var res = document.getElementById("perfecto");
    var txt = "";
    numerosPerfectos.forEach(function (item) {
        txt = txt + item + "<br>";
    });
    res.innerHTML = txt;

}