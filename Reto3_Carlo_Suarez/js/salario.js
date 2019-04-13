function calcularAumento() {
    var salario = parseFloat(document.getElementById("salario").value);
    var aumento = "";
    //Calcular aumento
    if(salario > 0 && salario <= 9000 ){
        salario = salario + parseFloat(salario*0.2); 
        aumento = "20%";
    }
    if(salario > 9000 && salario <= 15000 ){
        salario = salario + parseFloat(salario*0.1); 
        aumento = "10%";
    }
    if(salario > 15000 && salario <= 20000 ){
        salario = salario + parseFloat(salario*0.05); 
        aumento = "5%";
    }
    if(salario > 20000){
        salario = salario;
        aumento = "0%";
    }


    // Fijar resultados
    var res = document.getElementById("res");
    res.innerHTML = "Nuevo Salario: $"+ salario+"<br> Aumento: "+aumento;
}