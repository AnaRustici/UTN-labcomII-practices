
var tam = ["128", "256", "512"];

function calculatePrice() {
    var color = document.getElementById('select-color').value;
    var cantidad = document.getElementById('cantidad').value;
    var tamElegido = document.getElementById("select-tam");
    var precio = 0;

    if (cantidad < 1 || cantidad > 10) {
        document.getElementById('result').innerHTML = "Error. La cantidad elegida no puede ser menor a 0 o mayor a 10";
    } else {
        if (tamElegido.value === tam[0]) {
            precio = cantidad * 150000;
        } else if (tamElegido.value === tam[1]) {
            precio = cantidad * 165000;
        } else {
            precio = cantidad * 180000;
        }
        document.getElementById('result').innerHTML = "Color elegido: " + color + "<br>" + "Cotización: $" + precio;
    }
}

