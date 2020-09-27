function validateForm() {
    let formElement = document.forms['contactForm']['firstname'].value;
    if (formElement === '') {
        alert('Name must be filled out.');
        return false;
    }
}
