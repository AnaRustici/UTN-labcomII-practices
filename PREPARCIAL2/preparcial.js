function agregarMoneda() {
    var nuevaMoneda = "";
    var costoMoneda = 0;
    nuevaMoneda = document.getElementById('nombreMoneda').value;
    costoMoneda = document.getElementById('costoMoneda').value;
    var resultado = document.getElementById('resultado2');
    var mensaje = "";

    if (nuevaMoneda == "" || costoMoneda == 0) {
        mensaje = "Debe completar todos los campos para poder realizar la operación.";
        resultado.style.color = "red";
        resultado.innerText = mensaje;
    } else {
        cambioMoneda(nuevaMoneda, costoMoneda);
    }
}

function cambioMoneda(nuevaMoneda, costoMoneda) {
    var pesosAR = 0;
    var monedaX = 0;
    pesosAR = document.getElementById('campoTexto').value;
    monedaX = document.getElementById('seleccionable').value;
    var resultado = document.getElementById('resultado');
    var mensaje = "";
    var moneda = 0;

    var nuevaOpcion = document.createElement("option");
    nuevaOpcion.value = nuevaMoneda;
    nuevaOpcion.text = nuevaMoneda;

    var seleccion = document.getElementById('seleccionable');
    seleccion.add(nuevaOpcion);

    if (pesosAR == 0 || monedaX == 0) {
        mensaje = "Debe completar todos los campos para poder realizar la operación.";
        resultado.style.color = "red";
        resultado.innerText = mensaje;
    } else if(monedaX == "dolar") {
        moneda = pesosAR / 800;
        mensaje = "El total a cambiar: $" + pesosAR + ", equivale a: " + moneda + " dólar(es)";
        resultado.style.color = "blue";
        resultado.style.fontWeight = "bold";
        resultado.innerText = mensaje;
    } else if(monedaX == "euro"){
        moneda = pesosAR / 900;
        mensaje = "El total a cambiar: $" + pesosAR + ", equivale a: " + moneda + " euro(s)";
        resultado.style.color = "blue";
        resultado.style.fontWeight = "bold";
        resultado.innerText = mensaje;
    }
}
