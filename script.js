function celsiusToFahrenheit(celsius) {
    var fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

// Input temperature in Celsius
var celsius = parseFloat(prompt("Enter temperature in Celsius:"));

// Convert Celsius to Fahrenheit
var fahrenheit = celsiusToFahrenheit(celsius);

// Display the result in a prompt dialog
alert(celsius + "°C is equal to " + fahrenheit + "°F");
