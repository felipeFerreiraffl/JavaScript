var celsius;
var fahre;
var kelvin;

function fahren() {
    celsius = Number(document.getElementById('graus1').value);
    fahre = (celsius * 1.8) + 32;
    
    document.getElementById('resultado1').value = fahre;
}
function kel() {
    celsius = Number(document.getElementById('graus2').value);
    kelvin = celsius + 273;

    document.getElementById('resultado2').value = kelvin;
}