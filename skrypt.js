function validateForm(formName) {
    let form = document.forms[formName];
    for (let formElement of form) {
        if (formElement.tagName.toLowerCase() === 'input') {
            if (formElement.value === '') {
                alert(formElement.parentElement.innerText + ' musi zostać wypełnione');
                return false;
            }
        }
    }
}
