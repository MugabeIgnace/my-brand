const form = document.getElementById('form');
const username = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');

//  Error message
function showError(input, message) {
    const control = input.parentElement;
    control.className = 'field error';
    const small = control.querySelector('small');
    small.innerText = message;
}

//success 

function showSuccess(input) {
    const control = input.parentElement;
    control.className = 'field success';
}

// Check email 
function checkEmail(input) {
    const evalid = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (evalid.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Please enter a valid email.');
    }
}

// Check if field is empty
function checkRequired(inputArr) {
    inputArr.forEach(function (input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} can't be empty`);
        } else {
            showSuccess(input);
        }
    });
}




// Field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listeners
form.addEventListener('submit', function (e) {
    e.preventDefault();

    checkRequired([username, email, subject]);
    checkEmail(email);
});
