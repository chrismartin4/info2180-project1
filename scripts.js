/* Add your JavaScript to this file */
window.onload = function () {
    var subscriptionbtn = document.getElementsByClassName("btn")[1];
    subscriptionbtn.addEventListener("click", function (i) {
        var email = document.getElementById("email").value;
        var displaymsg = document.getElementsByClassName("message")[0];
        if (email.length == 0) {
            displaymsg.innerHTML = "Please enter a valid email address";
        }
        else if (email.length > 0) {
            displaymsg.innerHTML = "Thank you! Your email address " + email + " has been added to our mailing list!";
        }
        i.preventDefault();
    });
}