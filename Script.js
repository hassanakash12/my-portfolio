document.addEventListener("DOMContentLoaded", function () {

    const btn = document.getElementById("darkModeBtn");

    btn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
    });

});
document.getElementById("darkModeBtn").onclick = function(){
    alert("Button Working");
};
