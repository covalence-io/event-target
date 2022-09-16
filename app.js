(function () {
    var btn = document.getElementById('btn');

    if (!btn) {
        console.log('No button :(');
        return;
    }

    btn.addEventListener('click', function (e) {
        e.currentTarget.classList.add('clicked');
    }, false);
})();