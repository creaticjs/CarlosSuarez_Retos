function unidades(cadena){

    switch(cadena)
    {
        case "uno": return 1;
        case "dos": return 2;
        case "tres": return 3;
        case "cuatro": return 4;
        case "cinco": return 5;
        case "seis": return 6;
        case "siete": return 7;
        case "ocho": return 8;
        case "nueve": return 9;
    }
    return "";
}
function decenas(cadena){

    switch(cadena)
    {
        case "uno": return 1;
        case "dos": return 2;
        case "tres": return 3;
        case "cuatro": return 4;
        case "cinco": return 5;
        case "seis": return 6;
        case "siete": return 7;
        case "ocho": return 8;
        case "nueve": return 9;
        case "diez": return 10;
        case "once": return 11;
        case "doce": return 12;
        case "trece": return 13;
        case "catorce": return 14;
        case "quince": return 15;
        case "viente": return 20;
        case "treinta": return 30;
        case "cuarenta": return 40;
        case "cincuenta": return 50;
        case "sesenta": return 60;
        case "setenta": return 70;
        case "ochenta": return 80;
        case "noventa": return 90;
        
    }
    for (let index = 6; index < 10; index++) {
        if(cadena.search("diesi") != -1){
            cadena = cadena.replace("diesi","")
            return unidades(cadena) + 10;
        }
        if(cadena.search("veinti") != -1){
            cadena = cadena.replace("veinti","")
            return unidades(cadena) + 20;
        }
        if(cadena.search("treintai") != -1){
            cadena = cadena.replace("treintai","")
            return unidades(cadena) + 30;
        }
        if(cadena.search("cuarentai") != -1){
            cadena = cadena.replace("cuarentai","")
            return unidades(cadena) + 40;
        }
        if(cadena.search("cincuentai") != -1){
            cadena = cadena.replace("cincuentai","")
            return unidades(cadena) + 50;
        }
        if(cadena.search("sesentai") != -1){
            cadena = cadena.replace("sesentai","")
            return unidades(cadena) + 60;
        }
        if(cadena.search("setentai") != -1){
            cadena = cadena.replace("setentai","")
            return unidades(cadena) + 70;
        }
        if(cadena.search("ochentai") != -1){
            cadena = cadena.replace("ochentai","")
            return unidades(cadena) + 80;
        }
        if(cadena.search("noventai") != -1){
            cadena = cadena.replace("noventai","")
            return unidades(cadena) + 90;
        }
    }

    return "";
}
function centenas(cadena){

    switch(cadena)
    {
        case "ciento": return 100;
        case "doscientos": return 200;
        case "trescientos": return 300;
        case "cuatrocientos": return 400;
        case "quinientos": return 500;
        case "seiscientos": return 600;
        case "setecientos": return 700;
        case "ochocientos": return 800;
        case "novecientos": return 900;
    }

    return "";
}

function calcular(){
    var cadena = document.getElementById("cadena").value;
    var cadena_temp = cadena.split(" ");
    var centena = centenas(cadena_temp[0]);
    var uni_dec = decenas(cadena_temp[1]);

    // fijar resultado
    var res = document.getElementById("numero");
    res.innerHTML = centena+uni_dec;
}