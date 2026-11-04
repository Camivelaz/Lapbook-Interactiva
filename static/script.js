function comenzar() {
    document.getElementById('portada').style.display = 'none';
    document.getElementById('lapbook').style.display = 'block';
    window.scrollTo(0,0);
}

function volverMenu() {
    document.getElementById('portada').style.display = 'block';
    document.getElementById('lapbook').style.display = 'none';
    // cierra todos los paneles de info
    let paneles = document.querySelectorAll('.panel-informacion');
    paneles.forEach(p => p.classList.remove('activa'));
}

function mostrarInfo(id) {
    // oculta todos
    let paneles = document.querySelectorAll('.panel-informacion');
    paneles.forEach(p => p.classList.remove('activa'));
    // muestra el que tocaste
    document.getElementById(id).classList.add('activa');
}
