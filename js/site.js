var ctrl = new ScrollMagic.Controller();
var $s = document.getElementById('buttons');

$s.style.opacity = 0;
var scene1 = new ScrollMagic.Scene({
    offset: 10,
    duration: 150
}).on("enter leave", function(e) {
    TweenMax.to($s, 0.2, { opacity: e.type === 'enter' ? 1 : 0 });
}).addTo(ctrl).addIndicators();