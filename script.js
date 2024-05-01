window.addEventListener("DOMContentLoaded", (event) => {

    var burger = document.getElementById('burger');
    var menuD = document.getElementById('menuD');
    var menuG = document.getElementById('menuG');

    window.onload = function() {
        var largeur = window.innerWidth;

        if (largeur < 768) {
            burger.classList.remove('hidden');
            menuD.classList.add('hidden');
            menuG.classList.add('hidden');
        }
    }

    window.onresize = function() {
        var largeur = window.innerWidth;
        
        if (largeur < 768) {
            burger.classList.remove('hidden');
            menuD.classList.add('hidden');
            menuG.classList.add('hidden');
        } else {
            burger.classList.add('hidden');
            menuD.classList.remove('hidden');
            menuG.classList.remove('hidden');
        }
    }
})