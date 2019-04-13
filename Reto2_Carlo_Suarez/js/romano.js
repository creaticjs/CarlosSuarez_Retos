function calcular(){
    var numero = parseInt(document.getElementById("numero").value);
    var romano = [];
    var values = [1, 5, 10, 50, 100, 500, 1000];
    var letras = ['I', 'V', 'X', 'L', 'C', 'D', 'M'];
    var num;
    var letra;
    var val;
    var pos;
    var insert;
    
    for(var i = 6; num = values[i], letra = letras[i]; i--) {
            // Suficientemente grande
            if(numero >= num) {
                // Número de letras repetidas
                var r = Math.floor(numero / num); 
                // Restamos el valor actual de cada letra
                numero -= r * num; 
    
                if(r < 4){
                    // Metemos las letras para sumar al lado derecho
                    while(r--){
                        romano.push(letra);
                    }
                } else {
                    // No se pueden repetir 4+ veces
                    val = romano.pop(); // Última letra
    
                    // Si es el string vacío o letra == "M" (no hay anterior)
                    // usamos la letra anterior a esta
                    pos = (val ? letras.indexOf(val) : i) + 1; 
    
                    // Y si letra == "M" -> letras[pos] no existirá y usamos M
                    insert = letra + (letras[pos] || 'M'); 
    
                    // Insertamos el string
                    romano.push(insert);
                }
            } else {
                // Si no vamos a poner letra usamos un ""
                // para que no afecte pop
                romano.push('');
            }
    }
    
    romano.join('');
    var respuesta = "";
    romano.forEach(item => {
        respuesta = respuesta + item;
    });
    //fijar resultados
    var res = document.getElementById("romano");
    res.innerHTML = respuesta;
    
}