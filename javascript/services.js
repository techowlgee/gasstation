window.addEventListener('scroll', () => {
    document.getElementById("header").classList.toggle("sticky", window.scrollY > 0);
});
document.getElementById("copyright_date").innerHTML = new Date().toDateString();