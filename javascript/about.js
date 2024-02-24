window.addEventListener('scroll', () => {
    document.getElementById("header").classList.toggle("sticky", window.scrollY > 0);
});
document.getElementById("copyright_date").innerHTML = new Date().toDateString();
window.addEventListener('load', function() {
    colors = ["var(--main-color)", "#ab4354", "#929203", "var(--purple)"];
    document.querySelectorAll('.company-initials').forEach(function(value, index) {
            value.style.backgroundColor = colors[index];
        });
    });
    document.getElementById('copyright_date').innerHTML = new Date().toDateString();