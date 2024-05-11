window.onload = function() {
    document.querySelector('.menuMobile').addEventListener('click', function() {
        if (document.querySelector('.menu-area nav ul').style.display == 'flex') {
            document.querySelector('.menu-area nav ul').style.display = 'none';
        } else {
            document.querySelector('.menu-area nav ul').style.display = 'flex';
        }
    });
}