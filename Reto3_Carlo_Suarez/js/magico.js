n = 0;
var valor_n = prompt("Ingrese el valor N impar");
if (valor_n != null) {
    n = parseInt(valor_n);
}
if (n % 2 == 0) {
    alert("El valor debe ser impar");
} else {
    var matrix = [];
    for (var i = 0; i < n; i++) {
        matrix[i] = new Array();
    }
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            matrix[i][j] = " ";
        }
    }
    
    var i = 0;
    var j = parseInt(n / 2);
    contador = 1;
    matrix[i][j] = 1;
    while(contador < n*n) {
        if((i-1)>=0){
            if((j+1)<(n)){
                if(matrix[i-1][j+1]==" "){
                    i -= 1;
                    j += 1;
                    contador += 1;
                    matrix[i][j] = contador;
                 }
                else{
                    i += 1;
                    contador += 1;
                    matrix[i][j] = contador;
                }
            }
            else{
                if(matrix[i-1][0]==" "){
                    i -= 1;
                    j = 0;
                    contador += 1;
                    matrix[i][j] = contador;
                }
                else{
                    i += 1;
                    contador += 1;
                    matrix[i][j] = contador;
                }
            }
        }
        else{
            if(((j+1)<(n))){
                if (matrix[n-1][j+1]==0){
                    i = n-1;
                    j += 1;
                    contador += 1;
                    matrix[i][j] = contador;
                }
                else{
                    i += 1;
                    contador += 1;
                    matrix[i][j] = contador;
                }
            }
            else{
                i += 1;
                contador += 1;
                matrix[i][j] = contador;
            }
  
        }
  
    }
    var listar = document.getElementById("cuadro");
    res = "";
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            res = res + "   <input style='width: 10%;' type='button' value='" + matrix[i][j] + "' />";
        }
        res = res + " <br>";

    }
    listar.innerHTML = res;

}

