let cardMonth = document.querySelector('.cart__date-month');
let cardYear = document.querySelector('.cart__date-year');
let monthInput = document.querySelector('.form__addition-date-month-select');
let yearInput = document.querySelector('.form__addition-date-year-select');

monthInput.addEventListener('change', changeMonth);
yearInput.addEventListener('change', changeYear);

function changeMonth() {
    cardMonth.innerHTML = monthInput.value;
}

function changeYear() {
    cardYear.innerHTML = yearInput.value;
}