function convertToCelsius() {
    var fahrenheit = parseFloat(document.getElementById("fahrenheit").value);
    var celsius = (fahrenheit - 32) * (5 / 9);
    document.getElementById("celsius").value = celsius.toFixed(2);
    document.getElementById("result").innerText = celsius.toFixed(2) + " Celsius";
    document.getElementById("calculation").innerText = "(" + fahrenheit.toFixed(2) + " - 32) * (5/9) = " + celsius.toFixed(2) + " Celsius";
}

function convertToFahrenheit() {
    var celsius = parseFloat(document.getElementById("celsius").value);
    var fahrenheit = (celsius * (9 / 5)) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
    document.getElementById("result").innerText = fahrenheit.toFixed(2) + " Fahrenheit";
    document.getElementById("calculation").innerText = "(" + celsius.toFixed(2) + " * (9/5)) + 32 = " + fahrenheit.toFixed(2) + " Fahrenheit";
}

function resetFields() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("result").innerText = "";
    document.getElementById("calculation").innerText = "";
    document.getElementById("user-calculation").innerHTML = "";
}

function reverseValues() {
    var celsiusValue = document.getElementById("celsius").value;
    var fahrenheitValue = document.getElementById("fahrenheit").value;

    document.getElementById("celsius").value = fahrenheitValue;
    document.getElementById("fahrenheit").value = celsiusValue;

    document.getElementById("result").innerText = "";
    document.getElementById("calculation").innerText = "";
    document.getElementById("user-calculation").innerHTML = "";
}