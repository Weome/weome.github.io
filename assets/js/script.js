var timeline = anime.timeline();

timeline
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
        targets: '#cloud-one',
        translateX: [
            {value: -100, duration: 0},
            {value: 200, duration: 6000}
        ],
        scale: {value: 1.4, duration: 1},
        easing: 'linear',
        offset: 0
    })

    .add({
        targets: '#cloud-two',
        translateX: [
            {value: -100, duration: 0},
            {value: 0, duration: 6000}
        ],
        easing: 'linear',
        offset: 0
    })

    .add({
        targets: '#cloud-three',
        translateX: [
            {value: -100, duration: 0},
            {value: 0, duration: 6000}
        ],
        easing: 'linear',
        offset: 0
    })

    .add({
        targets: '#cloud-four',
        translateX: [
            {value: -100, duration: 0},
            {value: 300, duration: 6000}
        ],
        scale: {value: 1.8, duration: 1},
        easing: 'linear',
        offset: 0,
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
    });



