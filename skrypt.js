function validateForm(formName) {
    let isValid = true;
    let form = document.forms[formName];
    for (let formElement of form) {
        if (formElement.tagName.toLowerCase() === 'input') {
            if (formElement.value === '') {
                changeStaleToWarning(formElement);
                isValid = false;
            } else {
                formElement.style = "";
            }
        }
    }
    if (!isValid) {
        showWarning();
    } else {
        hideWarning();
    }
    return isValid;
}

function changeStaleToWarning(formElement) {
    formElement.style = 'background-color:  #ffb3b3; border-color: red';
}

function showWarning() {
    document.getElementById('warning')
        .removeAttribute('hidden');
}

function hideWarning() {
    document.getElementById('warning')
        .setAttribute('hidden', '');
}
