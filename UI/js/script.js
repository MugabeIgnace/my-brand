/*
function drop() {
    document.getElementById("dropdown_content").classList.toggle("show");

    window.onload = function (event) {
        if (!event.target.matches('.dropdown_btn')) {
            var dropall = document.getElementsById("dropdown-content");
            var i;
            for (i = 0; i < dropall.length; i++) {
                var opendrop = dropall[i];
                if (opendrop.classList.contains('show')) {
                    opendrop.classList.remove('show');
                    opendrop.classList.add('show');
                }
            }
        }
    }
}
*/

var check_valid = function () {

    var means;
    const user = document.getElementById("user").value;
    const form = document.getElementById("form").value;
    const password = document.getElementById("password").value;

    const errorElement = document.getElementById('error-messages').value;


    form.addEventListener("submit", (e) => {

        e.preventDefault();
        let messages = [];
        if (user === "" || user == null || password === "" || password == null) {
            messages.push('Username or Password.');
        }

        else if (!(isValidEmail(email))) {
            messages.push("You have entered invalid email address");

        }


        //check validity of email address
        function isValidEmail(e) {
            means = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = e.value;
            if (!means.test(email)) {
                return false;
            } else {
                return true;
            }
        }

        errorElement.innerText = messages.join(',');

    })
}