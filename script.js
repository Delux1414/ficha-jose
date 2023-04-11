function enviar() {
    var nombre = document.getElementById("nombrep").value;
    var linea = document.getElementById("lineap").value;
    var version = document.getElementById("versionp").value;
    var cantidad = document.getElementById("cantidadp").value;
    var valor = document.getElementById("valuep").value;

    cantidad = parseFloat(cantidad);
    valor = parseFloat(valor);

    var resultado = cantidad * valor;

    var datosDiv = document.getElementById("datos");
    datosDiv.innerHTML = "<p style='font-size: 1.2em; font-family: sans-serif; padding: 10px;'>Nombre: " + nombre + "</p><p style='font-size: 1.2em; font-family: sans-serif; padding: 10px;'>Linea: " + linea + "</p><p style='font-size: 1.2em; font-family: sans-serif; padding: 10px;'>Version: " + version + "</p><p style='font-size: 1.2em; font-family: sans-serif; padding: 10px;'>Cantidad: " + cantidad + "</p><p style='font-size: 1.2em; font-family: sans-serif; padding: 10px;'>Valor total: $" + resultado + "</p>"
}
