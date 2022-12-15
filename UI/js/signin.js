
const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

//  Error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// success 

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'control success';
}



// Check email 
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Please enter a valid email address');
    }
}

// see if data is given
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} can not be empty`);
        } else {
            showSuccess(input);
        }
    });
}

/// length of the input field
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(
            input,
            `${getFieldName(input)} must be atleast ${min} characters`
        );
    } else if (input.value.length > max) {
        showError(
            input,
            `${getFieldName(input)} must be  less than ${max} characters`
        );
    } else {
        showSuccess(input);
        window.location.href = "../profile/general.html";
    }
}



//  Field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([email, password]);
    checkEmail(email);
    checkLength(password, 6, 12);
});
