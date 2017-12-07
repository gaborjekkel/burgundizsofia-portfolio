window.addEventListener('scroll', function(){

    var nav = document.querySelector("nav");

    if(window.scrollY > 0) {
        nav.classList.add('active');

    }
    else {
        nav.classList.remove('active');
    }

});

window.onload = function() {
    var cards = document.querySelector(".cards");
    if(cards) {
        cards.classList.add('active');
    }
    return
};