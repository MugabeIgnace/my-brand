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