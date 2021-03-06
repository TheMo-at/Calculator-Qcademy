const display = $('#display .inner');
const digitButtons = $('td[data-digit]');


function clickDigit() {
    const digit = $(this).data('digit');

    if (display.html() === '0') {
        display.text(digit);
    } else {
        display.append(digit);
    }
}

digitButtons.click(clickDigit);

function reset() {
    display.text('0');
}

function backspace() {
    const text = display.text();
    if (text.length > 1) {
        display.text(text.slice(0, -1));
    } else {
        display.text('0');
    }
}

function plus(a, b) {
    const numberA = Number(a);
    const numberB = Number(b);
    return numberA + numberB;
}

function minus(a, b) {
    const numberA = Number(a);
    const numberB = Number(b);
    return numberA - numberB;
}

function multiply(a, b) {
    const numberA = Number(a);
    const numberB = Number(b);
    return numberA * numberB;
}

function divide(a, b) {
    const numberA = Number(a);
    const numberB = Number(b);
    return numberA / numberB;
}

function calculate() {
    const text = display.text();
    const numbers = text.split(' ');
    const operator = text.slice(-1);
    const result = eval(numbers.join(operator));
    display.text(result);
}