function salario() {
    var horas = parseFloat(document.getElementById("horas").value);
    var tasa = parseFloat(document.getElementById("tasa").value);
    
    //Calcular salario
    var salario = 0;
    if(horas < 38 ){
        salario = salario + parseFloat(horas*tasa); 
    }
    if(horas == 38 )
    {
        salario = salario + parseFloat((tasa+(tasa*0.5))); 
        salario = salario + parseFloat((horas-1)*tasa); 

    }
    if(horas > 38 )
    {
        horas = horas - 37;
        salario = salario + parseFloat(horas*(tasa+(tasa*0.5))); 
        salario = salario + parseFloat(37*tasa); 

    }

    //Calcular Impuestos
    var impuesto = 0;
    if(salario > 50000){
        impuesto = salario*0.10;
    }

    // Fijar resultados
    var res = document.getElementById("salario");
    res.innerHTML = "Salario Neto: $"+ salario+"<br> Impuestos: $"+impuesto;
}