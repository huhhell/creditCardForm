let ownerInput = document.querySelector('.form__owner-input');
let cartOwner = document.querySelector('.cart__owner-name');

ownerInput.addEventListener('input', changeName);
ownerInput.addEventListener('focus', deleteDefault)

function changeName () {
    cartOwner.innerHTML = ownerInput.value;
    if (ownerInput.value === '') cartOwner.innerHTML = 'full name';
}

function deleteDefault () {
}