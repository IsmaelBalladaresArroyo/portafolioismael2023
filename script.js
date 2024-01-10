//Función que me aplica el estilo a la opciòn seleccionada y quita la previamente seleccionada
function seleccionar(link) {
    var opciones = document.querySelectorAll('#links  a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //Hacemos desaparecer el menu una vez que se ha seleccionado una opcion
    //en modo responsive
    var x = document.getElementById("nav");
    x.className = "";
}

//función que muestra el menu responsive
function responsiveMenu() {
    var x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";
    } else {
        x.className = "";
    }
}

//detecto el scrolling para aplicar la animación del la barra de habilidades
window.onscroll = function() { efectoHabilidades() };

//funcion que aplica la animación de la barra de habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("sq").classList.add("barra-progreso3");
        document.getElementById("rt").classList.add("barra-progreso4");
        document.getElementById("py").classList.add("barra-progreso5");
        document.getElementById("bc").classList.add("barra-progreso6");
        document.getElementById("mv").classList.add("barra-progreso7");
        document.getElementById("wp").classList.add("barra-progreso8");
        document.getElementById("se").classList.add("barra-progreso9");
        document.getElementById("dj").classList.add("barra-progreso10");
        document.getElementById("sb").classList.add("barra-progreso11");
        document.getElementById("nt").classList.add("barra-progreso12");
        document.getElementById("ag").classList.add("barra-progreso13");
        document.getElementById("ph").classList.add("barra-progreso14");
        document.getElementById("st").classList.add("barra-progreso15");
        document.getElementById("kt").classList.add("barra-progreso16");
        document.getElementById("jv").classList.add("barra-progreso17");
        document.getElementById("ft").classList.add("barra-progreso18");
        document.getElementById("bs").classList.add("barra-progreso19");
        document.getElementById("ms").classList.add("barra-progreso20");
        document.getElementById("md").classList.add("barra-progreso21");
        document.getElementById("or").classList.add("barra-progreso22");
        document.getElementById("aw").classList.add("barra-progreso23");
        document.getElementById("mo").classList.add("barra-progreso24");
        document.getElementById("pb").classList.add("barra-progreso25");
        document.getElementById("me").classList.add("barra-progreso26");
        document.getElementById("gi").classList.add("barra-progreso27");
        document.getElementById("pt").classList.add("barra-progreso28");
        document.getElementById("do").classList.add("barra-progreso29");
        document.getElementById("fg").classList.add("barra-progreso30");
        document.getElementById("cb").classList.add("barra-progreso31");
        document.getElementById("ct").classList.add("barra-progreso32");
        document.getElementById("cv").classList.add("barra-progreso33");
        document.getElementById("c").classList.add("barra-progreso34");
        document.getElementById("dt").classList.add("barra-progreso35");
    }

}
//Funcion para actualizar el año
function actualizarAño() {
    const añoActual = new Date().getFullYear();
    document.getElementById('derechos-reservados').textContent = `Todos los derechos reservados - ${añoActual}`;
}

// Llama a la función inicialmente
actualizarAño();

// Configura un temporizador para actualizar el año cada segundo
setInterval(actualizarAño, 1000);