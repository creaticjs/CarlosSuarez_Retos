function calcularCambio(){
    var dinero = parseInt(document.getElementById("dinero").value);
    var billetes = [100000, 50000, 20000,10000,5000,2000,1000];
    var monedas = [500, 200, 100, 50];
    var respuesta_b = [];
    var respuesta_m = [];

    // Restamos el valor actual de cada billete
    billetes.forEach(function(item){
        if(dinero >= item){
            var r = Math.floor(dinero/item); 
            dinero -= r * item;
            respuesta_b.push(r+" de $"+item+" ");
        }
         
    });

    // Restamos el valor actual de cada billete
    monedas.forEach(function(item){
        if(dinero >= item){
            var r = Math.floor(dinero/item); 
            dinero -= r * item;
            respuesta_m.push(r+" de $"+item+" ");
        }
         
    });

    // Fijar resultados
    var res = document.getElementById("cambio");
    res.innerHTML = "Billetes: "+respuesta_b.toString();
    res.innerHTML =res.innerHTML + "<br> Monedas : "+respuesta_m.toString();
}