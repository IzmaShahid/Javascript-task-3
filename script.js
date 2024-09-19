
function start() {
    let value = document.getElementById("value").value;
    let from = document.getElementById("from").value;
    let to = document.getElementById("to").value;
    let Text = document.getElementById("Text");

    if (value == "") {
        Text.innerText = `Enter a value to convert`;
    }
    else if (from === "fahrenheit" && to === "celsius") {
        let calc = (tempValue - 32) * (5 / 9);
        Text.innerText = `Converted Temperature: ${calc.toFixed(2)} Celsius`;
    }
    else if (from === "celsius" && to === "fahrenheit") {
        let calc2 = value * (9 / 5) + 32;
        Text.innerText =  `Converted Temperature: ${calc2.toFixed(2)} Fahrenheit`;
    } 
    else {
        Text.innerText = `Invalid conversion`;
    }
}
function refreshPage() {
    location.reload(); // This reloads the page
}