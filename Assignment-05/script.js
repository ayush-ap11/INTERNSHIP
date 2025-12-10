const button = document.getElementById("btn");
const body = document.body;

button.addEventListener("click", function() {
    body.classList.toggle("dark-mode");
});