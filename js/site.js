var controller = new ScrollMagic.Controller();

var pinIntroScene = new ScrollMagic.Scene({
        triggerElement: '.trigger',
        triggerHook: 0.2,
        duration: '150%'
    })
    .setPin('.trigger')
    .addTo(controller);

//GSap animation
var scene = new ScrollMagic.Scene({
    triggerElement: ".trigger"
})

.setTween('#buttons', 1, { opacity: 0 }).addIndicators({ name: '1 (duration: 0)' }).addTo(controller);