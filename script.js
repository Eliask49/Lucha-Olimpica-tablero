let tiempoRestante = 180;
let tiempoPausado = false;
let intervalo;

function agregarPuntaje(id) {
    const puntuacionElement = document.getElementById(id);
    let puntuacion = parseInt(puntuacionElement.textContent);
    puntuacion++;
    puntuacionElement.textContent = puntuacion;
}

function actualizarTiempo() {
    const minutos = Math.floor(tiempoRestante / 60);
    const segundos = tiempoRestante % 60;
    document.getElementById('tiempo').textContent = `${String(minutos).padStart(2, '0')}:${String(segundos).padStart(2, '0')}`;
}

function iniciarTiempo() {
    if (!tiempoPausado) {
        intervalo = setInterval(function () {
            if (tiempoRestante > 0) {
                tiempoRestante--;
                actualizarTiempo();
            } else {
                clearInterval(intervalo);
                alert('¡Tiempo finalizado!');
            }
        }, 1000);
    }
    tiempoPausado = false;
}

function pausarTiempo() {
    clearInterval(intervalo);
    tiempoPausado = true;
}

function reiniciarTiempo() {
    tiempoRestante = 180;
    actualizarTiempo();
}

document.getElementById('nombreLuchadorRojo').addEventListener('input', function () {
    document.getElementById('nombreLuchadorRojoTitulo').textContent = this.value;
});

document.getElementById('nombreLuchadorAzul').addEventListener('input', function () {
    document.getElementById('nombreLuchadorAzulTitulo').textContent = this.value;
});
