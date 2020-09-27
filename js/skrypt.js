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
    if (document.getElementById('warning') === null) {
        let warning =
            '<div id="warning" class="w-25 mx-auto align-middle alert alert-danger alert-dismissible fade show" role="alert">\n' +
            '    Zaznaczone pola muszą zostać wypełnione!\n' +
            '    <button type="button" class="close" data-dismiss="alert" aria-label="Close">\n' +
            '        <span aria-hidden="true">&times;</span>\n' +
            '    </button>\n' +
            '</div>';
        document.body.insertAdjacentHTML('beforeend', warning);
    }
}

function hideWarning() {
    document.getElementById('warning')
        .remove();
}
