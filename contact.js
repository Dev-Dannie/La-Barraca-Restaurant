let form = document.querySelector('.form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    let phoneNumberInput = document.getElementById('phone');
    let phoneNumber = phoneNumberInput.value.trim();

    let phonePattern = /^\d{10}$/;

    if (!phonePattern.test(phoneNumber)){
        let error = document.querySelector('.error-text');
        error.textContent = 'Please enter a valid 10 digit phone number';

    }

    const successMessage = document.createElement('div')
    successMessage.textContent = 'Thank you for submitting'

    form.innerHTML = successMessage 
})