document.querySelectorAll(".show-pass").forEach(e => {
    e.addEventListener('click', () => {
        if(document.getElementById("password").getAttribute('type') === "password") {
            document.getElementById("password").setAttribute('type', 'text');
            document.querySelectorAll(".show-pass")[0].classList.add("hide-display");
            document.querySelectorAll(".show-pass")[1].classList.remove("hide-display");
        } else {
            document.getElementById("password").setAttribute('type', 'password');
            document.querySelectorAll(".show-pass")[0].classList.remove("hide-display");
            document.querySelectorAll(".show-pass")[1].classList.add("hide-display");
        }
    });
});

function validateForm() {
    if(document.forms["login-form"]["email"].value == "") {
        document.querySelectorAll(".echo-error")[0].innerHTML = "*Empty email";
        document.querySelectorAll(".input-error")[0].style.borderColor = "red";
        return false;
    } else if(!document.forms["login-form"]["email"].value.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(.[a-zA-Z-]+)*$/)) {
        document.querySelectorAll(".echo-error")[0].innerHTML = "*Invalid email";
        document.querySelectorAll(".input-error")[0].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo-error")[0].innerHTML = "";
        document.querySelectorAll(".input-error")[0].style.borderColor = "";
    };
    if(document.forms["login-form"]["password"].value  == "") {
        document.querySelectorAll(".echo-error")[1].innerHTML = "*Empty password";
        document.querySelectorAll(".input-error")[1].style.borderColor = "red";
        return false;
    } else if(!document.forms["login-form"]["password"].value.match(/^[a-zA-Z0-9_]*$/)) {
        document.querySelectorAll(".echo-error")[1].innerHTML = "Invalid characters";
        document.querySelectorAll(".input-error")[1].style.borderColor = "red";
        return false;
    } else if(grecaptcha.getResponse().length == 0) {
        alert('Please verify you are human!');
        document.querySelectorAll(".echo-error")[0].innerHTML = "*Please verify you are human!";
        document.querySelectorAll(".input-error")[0].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo-error")[0].innerHTML = "";
        document.querySelectorAll(".input-error")[0].style.borderColor = "";
        document.querySelectorAll(".echo-error")[1].innerHTML = "";
        document.querySelectorAll(".input-error")[1].style.borderColor = "";
        document.querySelectorAll(".submit-input").classList.add("hide-display");
        document.querySelectorAll(".spinner-button").classList.remove("hide-display");
        return true;
    };
};