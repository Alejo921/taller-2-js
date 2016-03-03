function conversionGalones(){
  var galones = document.getElementById("galones").value;
  var litros=galones*3.7854;
  alert("Numero de litros: " +litros);
}
//Dos
function centigradosFahrenheit(){
  var centigrados = document.getElementById("centigradosF").value;
  var fahrenheit = (centigrados * 9/5) + 32;
  alert("Grados fahrenheit: " + fahrenheit);
}
function centigradosKelvin(){
  var centigrados = document.getElementById("centigradosK").value;
  var kelvin = parseFloat(centigrados) + 273.15;
  alert("Grados kelvin: " + kelvin);
}
function fahrenheitCentigrados(){
  var fahrenheit = document.getElementById("fahrenheitC").value;
  var centigrados = (fahrenheit - 32) * 5/9;
  alert("Grados centigrados: " + centigrados);
}
function fahrenheitKelvin(){
  var fahrenheit = document.getElementById("fahrenheitK").value;
  var kelvin = (fahrenheit - 32) * 5/9 + 273.15;
  alert("Grados kelvin: " + kelvin);
}
function KelvinFahrenheit(){
  var kelvin = document.getElementById("kelvinF").value;
  var fahrenheit = (kelvin - 273.15) * 9/5 + 32;
  alert("Grados fahrenheit: " + fahrenheit);
}
function KelvinCentigrados(){
  var kelvin = document.getElementById("kelvinC").value;
  var centigrados=kelvin - 273.15;
  alert("Grados centigrados: " + centigrados);
}
//Tres
function pesoLuna(){
  var pesoT = document.getElementById("peso").value;
  var pesoL=pesoT*0.17;
  alert("Peso efectivo en la luna es: " +pesoL + " kg");
}
