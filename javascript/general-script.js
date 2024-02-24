
window.addEventListener("load", function() {
setTimeout(function() {
    let checkCookie = document.cookie.indexOf("cookieByTOWGEE=Techowlgeofficial");
    if(checkCookie != -1) {
        document.getElementById("set-cookie-container").classList.add("hide-display");
    } else {
        document.getElementById("set-cookie-container").classList.remove("hide-display");
    }
}, 20000);
});
function acceptCookie() {
    document.cookie ="cookieByTOWGEE=Techowlgeofficial; expires=Thu, 18 Dec 2024 12:00:00 UTC; SameSite=lax; secure; path=spotlessregalia.techowlgee.com/index.html";
    if(document.cookie) {
        document.getElementById("set-cookie-container").classList.add("hide-display");
    } else {
        window.alert("Cookie can't be set. Try later");
    }
};
document.getElementById("copyright_date").innerHTML = new Date().toDateString();

function hideCookie() {
    document.getElementById('set-cookie-container').classList.add('hide-display');
}