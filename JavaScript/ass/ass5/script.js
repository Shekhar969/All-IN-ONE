let inputField = document.getElementById('input');
let resultField = document.getElementById('result');

function display(val) {
    inputField.value += val;
}

function calculate() {
    try {
        resultField.value = eval(inputField.value);
    } catch (e) {
        resultField.value = 'Error';
    }
}

function clearInput() {
    inputField.value = '';
    resultField.value = '';
}

function del() {
    inputField.value = inputField.value.slice(0, -1);
}
