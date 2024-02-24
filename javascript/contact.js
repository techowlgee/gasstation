window.addEventListener('scroll', () => {
    document.getElementById("header").classList.toggle("sticky", window.scrollY > 0);
});

document.getElementById('copyright_date').innerHTML = new Date().toDateString();


function contactMessage() {         
    if(document.forms["contact-form"]["fullname"].value == "" || document.forms["contact-form"]["email"].value == "" || document.forms["contact-form"]["subject"].value == "" || document.forms["contact-form"]["message"].value == "") {
        window.alert("Please fill all form fields!");
        return false;
    } else if(!document.forms["contact-form"]["fullname"].value.match(/^[a-zA-Z0-9. ']+$/) || !document.forms["contact-form"]["subject"].value.match(/^[a-zA-Z0-9. ']+$/) || !document.forms["contact-form"]["message"].value.match(/^[a-zA-Z0-9. ']+$/)) {
        window.alert("Invalid characters, only alphanumerics characters allowed!");
        return false;
    } else if(!document.forms["contact-form"]["email"].value.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9-]+(.[a-zA-Z-]+)*$/)) {
        window.alert("Invalid email address");
            return false;
    } else if(grecaptcha.getResponse().length == 0) {
            alert('Please verify you are human!');
            return false;
        } else {
            document.getElementById("message-button").disabled = true;
            document.getElementById("message-button").innerHTML = "Wait...";
            var contactHttp = new XMLHttpRequest();
            contactHttp.open("POST", "backend/backend-contact.php");
            contactHttp.onload = function() {
                window.alert(this.responseText);
                window.location.reload();
            }
            contactHttp.send(new FormData(document.forms["contact-form"]));
    }
};
document.getElementById('copyright_date').innerHTML = new Date().toDateString();

