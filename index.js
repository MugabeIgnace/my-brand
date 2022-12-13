var check_valid = function () {

    var mean;
    const name = document.getElementById("name");
    const form = document.getElementById("form");
    const subject = document.getElementById("subject");
    const message = document.getElementsByClassName("input_message ");
    const email = document.getElementById("email");

    const errorElement = document.getElementById('error-messages');


    form.addEventListener('submit', (e) => {
        let messages = [];
        if (email.value === "" || email == null || name.value === "" || name.value == null || subject.value === "" || subject.value == null || message.value === "" || message.value == null) {
            messages.push('Please Enter all information.');
        }

        else if (!(isValidEmail(email))) {
            messages.push("You have entered invalid email address");

        }


        //check validity of email address
        function isValidEmail(e) {
            mean = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            var email = e.value;
            if (!mean.test(email)) {
                return false;
            }
        }

        if (messages.length > 0) {
            e.preventDefault()
            errorElement.innerText = messages.join(',');
        }
    })
}