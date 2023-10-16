var ciudad = document.getElementById('selector-ciudad');
var tarjeta = document.getElementById('card');
var tarjeta2 = document.getElementById('card2');
var htmlCard;

var loader = document.getElementById('loader');



async function consultarCiudad() {
    if (ciudad.value == 0) {
        alert('Seleccione una ciudad');
        return false;
    } else {
        //CONSTANTES
        const api_key = '28aabcc16cb9cd75304a7cbeba35362a';
        const ciudadElegida = ciudad.value;
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadElegida}&appid=${api_key}&units=metric&lang=es`;

        //tarjeta.innerHTML = url;

        try {
            //CODIFICACION
            loader.style.display = 'block';

            const respuesta = await fetch(url);


            if (respuesta.ok) {
                //FUNCIONÓ
                loader.style.display = 'none';

                const data = await respuesta.json();

                console.log(data);

                //SIMPLE
                htmlCard = '';
                htmlCard = `
                <h3>${data.name}</h3>
                <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
                <p>Temperatura: ${data.main.temp}</p>
                <p>Viento: ${data.wind.speed}</p>
                `;
                tarjeta.innerHTML = htmlCard;

                //COMPLEJA
                tarjeta2.innerHTML = mostrarTarjeta(data);

            } else {
                console.log('Error 404');
            }
        }
        catch (err) {
            console.log(err);
        }
    }
}

var mostrarTarjeta = function (data) {
    const { name, weather: [arr], main: { temp, feels_like }, wind: { speed } } = data;

    htmlCard = '';
    htmlCard = `
    <h3>${name}</h3>
    <img src="http://openweathermap.org/img/wn/${arr.icon}@2x.png">
    <p>Temperatura: ${temp}</p>
    <p>Viento: ${speed}</p>
    <p>Sensación térmica: ${feels_like}</p>
    `;

    return htmlCard;
}


var intervalo; // Declara la variable del intervalo fuera de la función para que pueda ser accedida globalmente

function cambiarColorFondo() {
    // Iniciar el intervalo y almacenar su ID en la variable intervalo
    intervalo = setInterval(function() {
        var colores = ['color1', 'color2', 'color3'];
        var colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
        var cabecera = document.querySelector('.mi-cabecera');
        
        // Remover todas las clases existentes de la cabecera
        cabecera.classList.remove('color1', 'color2', 'color3');
        
        // Agregar la clase de color aleatorio a la cabecera
        cabecera.classList.add(colorAleatorio);
    }, 3000);
}

// Llamar a la función cuando la página se carga completamente
document.addEventListener("DOMContentLoaded", function() {
    cambiarColorFondo();
});


