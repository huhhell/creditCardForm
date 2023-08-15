let numberInput = document.querySelector('.form__number-input');
let cartNumbers = document.querySelectorAll('.cart__number-group-item');
let numbersString = document.querySelectorAll('.cart__number-group-item-show');
let oldValue = numberInput.value.length;

numberInput.addEventListener('input', changeNumber)

function changeNumber() {
    let currentValue = numberInput.value;

    if ( oldValue < currentValue) {
        for (let i = 0; i < currentValue.length; i++) {
            if (i <= 4) numbersString[i].innerHTML = currentValue[i];
            if (i >= 12) numbersString[i-8].innerHTML = currentValue[i];

            cartNumbers[i].style.transform = 'translateY(-50px)';
        }
    }

    if (oldValue >= currentValue) {
        for (let i = currentValue.length; i < 16; i++) {
            cartNumbers[i].style.transform = 'translateY(0px)';
        }
    }

    oldValue = currentValue;
}