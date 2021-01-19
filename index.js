let portada = document.querySelector(".bienvenida");
let boton = document.getElementById('mostrar');
("#btnInformativo");

function change () {
    portada.style.backgroundImage = url('./images/portada2.jpg');
}
function mostrar(){
    boton.style.display = 'block';
}

portada.addEventListener('onclick', change);
boton.addEventListener('onclick', mostrar);


//no funciona ninguna funcion