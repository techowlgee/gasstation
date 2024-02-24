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
    if(document.forms["register-form"]['fullname'].value == "") {
        document.querySelectorAll(".echo")[0].innerHTML = " *Enter fullname";
        document.querySelectorAll(".input")[0].style.borderColor = "red";
        return false;
    } else if(!document.forms["register-form"]['fullname'].value.match(/^[a-zA-Z ]*$/)) {
        document.querySelectorAll(".echo")[0].innerHTML = " *Invalid fullname";
        document.querySelectorAll(".input")[0].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo")[0].innerHTML = "";
        document.querySelectorAll(".input")[0].style.borderColor = "";
    };
    if(document.forms["register-form"]['email'].value == "") {
        document.querySelectorAll(".echo")[1].innerHTML = " *Enter email";
        document.querySelectorAll(".input")[1].style.borderColor = "red";
        return false;
    } else if(!document.forms["register-form"]['email'].value.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(.[a-zA-Z-]+)*$/)) {
        document.querySelectorAll(".echo")[1].innerHTML = " *Invalid email";
        document.querySelectorAll(".input")[1].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo")[1].innerHTML = "";
        document.querySelectorAll(".input")[1].style.borderColor = "";
    };
    if(document.forms["register-form"]['password'].value == "") {
        document.querySelectorAll(".echo")[2].innerHTML = " *Enter password";
        document.querySelectorAll(".input")[2].style.borderColor = "red";
        return false;
    } else if(!document.forms["register-form"]['password'].value.match(/^[a-zA-Z0-9_]*$/)) {
        document.querySelectorAll(".echo")[2].innerHTML = " *Invalid password";
        document.querySelectorAll(".input")[2].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo")[2].innerHTML = "";
        document.querySelectorAll(".input")[2].style.borderColor = "";
    };
    if(document.forms["register-form"]['service'].value == "") {
        document.querySelectorAll(".echo")[3].innerHTML = "Select a service";
        document.querySelectorAll(".input")[3].style.borderColor = "red";
        return false;
    } else {
        document.querySelectorAll(".echo")[3].innerHTML = "";
        document.querySelectorAll(".input")[3].style.borderColor = "";
    };
    if(document.forms["register-form"]['gender'].value == "") {
        document.querySelectorAll(".echo")[4].innerHTML  = " *Your gender";
        return false;
    } else if(grecaptcha.getResponse().length == 0){
        window.alert("Verify you're human");
        return false;
    } else {
        document.querySelectorAll(".submit-input").classList.add("hide-display");
        document.querySelectorAll(".spinner-button").classList.remove("hide-display");
        return true;
    }
}