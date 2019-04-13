function openSolucion(name) {
    var current = document.getElementsByClassName("active");
    if(current[0])
        current[0].className = current[0].className.replace(" active", "");
    var opcion = document.getElementById(name);
    opcion.classList.add("active");
    var contenedor = document.getElementById("solucion");
    contenedor.innerHTML = '<object class="object_contenedor" type="text/html" data="'+name+'.html" ></object>';

}