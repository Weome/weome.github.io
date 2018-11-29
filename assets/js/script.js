var building_timeline = anime.timeline();
var cloud_timeline = anime.timeline({
    loop: true,
});

var window_timeline = anime.timeline({
    loop: true,
});

var desk_on = anime.timeline({
    autoplay: false,
});

desk_on
    .add({
        targets: '#power-button',
        fill: [{value: '#27ae60'}]
    })
    .add({
        targets: '#light',
        fill: [
            {value:'#fff', duration: 0},
            {value:'#f1c40f', duration: 200},
            {value:'#fff', duration: 200},
            {value:'#f1c40f', duration: 100},
            {value:'#fff', duration: 100},
            {value:'#f1c40f', duration: 100},
        ],
        easing: 'easeInOutQuart',
    })
    .add({
        targets: '#screen-2',
        fill: [
            {value:'#fff', duration: 100}
        ],
    })
    .add({
        targets: '#screen',
        fill: [
            {value:'#ecf0f1', duration: 100},
        ]
    })
    .add({
        targets: '#light-spray',
        fill: [{value:'#f1c40f4d'}],
        easing: 'easeInOutQuart',
    });

var toggle = false;

document.getElementById("power-button").onclick = function() {
    if (!toggle) {
        desk_on.play();
    } else {
        document.getElementById("light").setAttribute("fill", "#fff");
        document.getElementById("light-spray").style.fill = "transparent";
        document.getElementById("power-button").setAttribute("fill", "#030104");
        document.getElementById("screen").setAttribute("fill", "#192e33");
        document.getElementById("screen-2").setAttribute("fill", "#243e44");
    }
    toggle = !toggle;
}

window_timeline
    .add({
        targets: '#window',
        fill: [
            {value: '#f1c40f', duration: 0, delay: function(el, i, l) {
                if (i % 2 == 0) {
                    return i * 1600;
                } else {
                    return i * 900;
                }
            }},
            {value: '#fff', duration: 1000, delay: function(el, i, l) { return i * 1600;}}
        ],
        easing: 'linear',
        offset: 200
    })

cloud_timeline
    .add({
        targets: '#cloud-one',
        translateX: [
            {value: -300, duration: 0},
            {value: 350, duration: 16000}
        ],
        scale: {value: 1.4, duration: 1},
        easing: 'linear',
        offset: 0
    })

    .add({
        targets: '#cloud-two',
        translateX: [
            {value: -350, duration: 0},
            {value: 350, duration: 16000}
        ],
        easing: 'linear',
        offset: 0
    })

    .add({
        targets: '#cloud-three',
        translateX: [
            {value: -400, duration: 0},
            {value: 350, duration: 16000}
        ],
        easing: 'linear',
        offset: 0
    })

    .add({
        targets: '#cloud-four',
        translateX: [
            {value: -300, duration: 0},
            {value: 350, duration: 16000}
        ],
        scale: {value: 1.8, duration: 1},
        easing: 'linear',
        offset: 0,
    });

building_timeline
    .add({
        targets: '.building',
        scaleY: [
            { value: 0, duration: 0, delay: 0 },
            { value: 1, duration: 1700, delay: function(el, i, l) { return i * 160;} }
        ],
        translateY: [
            { value: 0, duration: 0, delay: 0 },
            { value: -10, duration: 600, easing: 'easeInOutCubic', delay: function(el, i, l) { return i * 160;} },
            { value: 0, duration: 300, easing: 'easeInOutCubic' }
        ],
        offset: 0
    })
    .add({
        targets: '.filler-item',
        translateY: [
            { value: -180, duration: 0 , delay: 0 },
            { value: 0, 
                duration: 900, 
                delay: function(el, i, l) {
                        return 1400 + (i * 190);
                    } 
            },
        ],
        easing: 'easeInOutQuart',
        delay: function(el, i, l) {
            return i * 190;
        },
        offset: 0
    })
    .add({
        targets: '#lightpost polygon',
        fill: [
            {value:'#fff', duration: 0},
            {value:'#f1c40f', duration: 200},
            {value:'#fff', duration: 200},
            {value:'#f1c40f', duration: 100},
            {value:'#fff', duration: 100},
            {value:'#f1c40f', duration: 100},
        ],
        easing: 'easeInOutQuart',
    })



