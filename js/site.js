var ctrl = new ScrollMagic.Controller();
var $s = document.querySelector('div#buttons').first();

$s.style.opacity = 0;
var scene1 = new ScrollMagic.Scene({
    offset: 10,
    duration: 50
}).addEventListener('enter leave', function(e) {
    TweenMax.to($s, 0.2, { opacity: e.type === 'enter' ? 1 : 0 });
}).addTo(ctrl).addIndicators();