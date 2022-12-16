
let form = document.getElementById('form');
let username = document.getElementById('username');
let email = document.getElementById('email');
let password = document.getElementById('password');


function addAccount() {
    var Name = username.value;
    var Email = email.value;
    var Password = password.value;

    var user = {
        username: Name,
        email: Email,
        password: Password
    };;
    let accounts = JSON.parse(localStorage.getItem('accounts')) || [];
    let found = accounts.length && JSON.parse(localStorage.getItem('accounts')).some(data => data.Name.toLowerCase() == username.value.toLowerCase() && data.Email.toLowerCase() == email.value.toLowerCase());
    if (!found) {
        localStorage.setItem('user', JSON.stringify(user));
        accounts.push(user);


        //const storeduser = JSON.parse(localStorage.getItem('user'));

    }
    else {
        alert("The Account already exists");
    }



    // var newUser = window.localStorage.getItem("user");
    // console.log(JSON.stringify(user));

}


//  Error message
function showError(input, message) {
    let formControl = input.parentElement;
    formControl.className = 'control error';
    let small = formControl.querySelector('small');
    small.innerText = message;
}

// success 

function showSuccess(input) {
    let formControl = input.parentElement;
    formControl.className = 'control success';
}

// Check email 
function checkEmail(input) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
    }
}

// check length of the password
function passwordLength(password, min, max) {
    if (password.value.length < min) {
        showError(
            password,
            `Password must be at least ${min} characters`
        );
    } else if (password.value.length > max) {
        showError(
            password,
            `Password must be at most ${max} characters`
        );
    } else {
        showSuccess(password);

        alert("Account created successfully");
        window.location.href = "./login.html";
    }
}



//  Field name
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


form.addEventListener('submit', function (e) {
    e.preventDefault();



    checkRequired([username, email, password]);
    checkLength(username, 3, 20);
    checkEmail(email);
    passwordLength(password, 6, 12);
    addAccount();

});