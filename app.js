const toFahrenheit = document.getElementById('toFahrenheit');
const toCelsius = document.getElementById('toCelsius');
const textbox = document.getElementById('textbox');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

let timer;

btn.addEventListener('click', converting)

function converting(e) {
    e.preventDefault();
    if(toFahrenheit.checked) {
     timer = Number(textbox.value);
     timer =  timer * 9 / 5 + 32
     result.textContent = timer.toFixed(1) + '°F'

    } else if(toCelsius.checked) {
        timer = Number(textbox.value);
        timer = (timer - 32) * (5/9)
        result.textContent = timer.toFixed(1) + '°C'
    }else {
        result.textContent = 'Unit should be selected'
    }
}