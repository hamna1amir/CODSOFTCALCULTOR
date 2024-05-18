let memory = 0;
let history = [];

function clearDisplay() {
    document.getElementById('display').textContent = '0';
}

function appendToDisplay(value) {
    let display = document.getElementById('display');
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value;
    } else {
        display.textContent += value;
    }
}

function calculate() {
    let expression = document.getElementById('display').textContent;
    try {
        let result = eval(expression);
        document.getElementById('display').textContent = result;
        history.push(expression + ' = ' + result);
        updateHistory();
    } catch (error) {
        document.getElementById('display').textContent = 'Error';
    }
}

function updateHistory() {
    let historyDiv = document.getElementById('history');
    historyDiv.innerHTML = '';
    history.forEach(item => {
        let p = document.createElement('p');
        p.textContent = item;
        historyDiv.appendChild(p);
    });
}

function memoryClear() {
    memory = 0;
}

function memoryRecall() {
    document.getElementById('display').textContent = memory;
}

function memoryAdd() {
    memory += parseFloat(document.getElementById('display').textContent);
}

function memorySubtract() {
    memory -= parseFloat(document.getElementById('display').textContent);
}

function squareRoot() {
    let number = parseFloat(document.getElementById('display').textContent);
    if (number >= 0) {
        document.getElementById('display').textContent = Math.sqrt(number);
    } else {
        document.getElementById('display').textContent = 'Error';
    }
}

function power() {
    let base = parseFloat(document.getElementById('display').textContent);
    let exponent = parseFloat(prompt('Enter exponent'));
    if (!isNaN(exponent)) {
        document.getElementById('display').textContent = Math.pow(base, exponent);
    } else {
        document.getElementById('display').textContent = 'Error';
    }
}

function sin() {
    let angle = parseFloat(document.getElementById('display').textContent);
    document.getElementById('display').textContent = Math.sin(angle);
}

function cos() {
    let angle = parseFloat(document.getElementById('display').textContent);
    document.getElementById('display').textContent = Math.cos(angle);
}

function tan() {
    let angle = parseFloat(document.getElementById('display').textContent);
    document.getElementById('display').textContent = Math.tan(angle);
}

function convertUnit(unit) {
    let value = parseFloat(document.getElementById('display').textContent);
    if (unit === 'cm') {
        document.getElementById('display').textContent = value * 0.393701;
    } else if (unit === 'inch') {
        document.getElementById('display').textContent = value * 2.54;
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('change', () => {
        if (darkModeToggle.checked) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    });
});

