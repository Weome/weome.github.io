function init() {
	var canvas = document.querySelector('canvas');
	var buffer = document.createElement('canvas');
	var canvasCBR = canvas.getBoundingClientRect();
	canvas.width = canvasCBR.width;
	canvas.height = document.getElementById('city').getBoundingClientRect().top + document.getElementById('city').getBoundingClientRect().height / 1.333;
	buffer.width = canvas.width;
	buffer.height = canvas.height;
	var ctx = canvas.getContext('2d');
	var bufferCtx = buffer.getContext('2d');
	var numberOfDrops = 200;
	var createDrop = function (snow) {
		var drop = {};
		drop.color = '#2d3436';
		var cloud = [
			document.getElementById('cloud-one'),
			document.getElementById('cloud-two'),
			document.getElementById('cloud-three'),
			document.getElementById('cloud-four'),
		][Math.floor(Math.random() * Math.floor(4))];
		var cloud_offset = (cloud.getBoundingClientRect().width / 4) | 0;
		drop.y = anime.random((cloud.getBoundingClientRect().top + cloud.getBoundingClientRect().height) | 0, canvas.height);
		drop.draw = function (context) {
			context.globalAlpha = drop.alpha;
			context.beginPath();
			context.clearRect(drop.x - 5, drop.y - 5, drop.width + 5, drop.height + 5);
			if (drop.y > canvas.height) {
				drop.y = (cloud.getBoundingClientRect().top + cloud.getBoundingClientRect().height) | 0;
				drop.update();
			} else {
				drop.y += drop.speed;
				drop.x += 2;
			}
			if (!snow) {
				context.rect(drop.x, drop.y, drop.width, drop.height);
			} else {
				context.arc(drop.x, drop.y, drop.width, 0, Math.PI * 2, true);
			}
			context.fillStyle = drop.color;
			context.fill();
			context.globalAlpha = 1;
		}
		drop.update = function () {
			drop.x = anime.random((cloud.getBoundingClientRect().left | 0) + cloud_offset, ((cloud.getBoundingClientRect().left + cloud.getBoundingClientRect().width) | 0) - cloud_offset);
			drop.width = anime.random(1, 2);
			drop.height = anime.random(5, 10);
			drop.alpha = anime.random(0.25, 1);
			drop.speed = snow ? anime.random(1, 3) : anime.random(3, 5);
		}
		drop.update();
		return drop;
	};
	var getRainDrops = function () {
		var drops = [];
		var snow = (Math.random() * 100 | 0) % 2 == 0;
		for (var i = 0; i < numberOfDrops; i++) {
			drops.push(createDrop(snow));
		}
		return drops;
	};
	var building_timeline = anime.timeline();
	var loop_timeline = anime.timeline({
		loop: true,
		begin: function (anim) {
			if (!anim.began) return;
			if ((Math.random() * 100 | 0) % 4 == 0) {
				var rainDrops = getRainDrops();
				anime({
					targets: rainDrops,
					duration: Infinity,
					easing: 'linear',
					update: function () {
						rainDrops.forEach(function (drop) {
							drop.draw(bufferCtx);
						});
						ctx.clearRect(0, 0, canvas.width, canvas.height);
						ctx.drawImage(buffer, 0, 0);
					}
				});
			}
		}
	});
	var desk_timeline = anime.timeline({
		loop: true,
		direction: 'alternate'
	});
	var desk_on = anime.timeline({
		autoplay: false
	});
	desk_timeline.add({
		targets: '#power-button',
		fill: [{
			value: '#030104',
			duration: 0
		}, {
			value: '#27ae60',
			duration: 1000
		}, ],
		easing: 'easeInOutQuart',
	});
	desk_on.add({
		targets: '#power-button',
		fill: [{
			value: '#27ae60'
		}]
	}).add({
		targets: '#light',
		fill: [{
			value: '#fff',
			duration: 0
		}, {
			value: '#f1c40f',
			duration: 200
		}, {
			value: '#fff',
			duration: 200
		}, {
			value: '#f1c40f',
			duration: 100
		}, {
			value: '#fff',
			duration: 100
		}, {
			value: '#f1c40f',
			duration: 100
		}, ],
		easing: 'easeInOutQuart',
	}).add({
		targets: '#screen-2',
		fill: [{
			value: '#fff',
			duration: 100
		}],
	}).add({
		targets: '#screen',
		fill: [{
			value: '#ecf0f1',
			duration: 100
		}, ]
	}).add({
		targets: '#light-spray',
		fill: [
			{ value: '#f1c40f4d', duration: 1 }
		],
		easing: 'easeInOutQuart',
	});
	var toggle = false;
	document.getElementById("phone").onclick = function () {
		desk_timeline.pause();
		if (!toggle) {
			desk_on.play();
		} else {
			document.getElementById("light").setAttribute("fill", "#fff");
			document.getElementById("light-spray").style.fill = "#f1c40f00";
			document.getElementById("power-button").setAttribute("fill", "#030104");
			document.getElementById("screen").setAttribute("fill", "#192e33");
			document.getElementById("screen-2").setAttribute("fill", "#243e44");
		}
		toggle = !toggle;
	}
	loop_timeline.add({
		targets: '#plane-group',
		translateX: {
			value: 285,
			duration: 1
		},
		scaleX: {
			value: 0.1,
			duration: 1
		},
		scaleY: {
			value: -0.1,
			duration: 1
		},
		rotate: [{
			value: "0deg",
			duration: 0
		}, {
			value: "3deg",
			duration: 1000
		}, {
			value: "-3deg",
			duration: 1000
		}, {
			value: "3deg",
			duration: 1000
		}, {
			value: "-3deg",
			duration: 1000
		}, {
			value: "3deg",
			duration: 1000
		}, {
			value: "-3deg",
			duration: 1000
		}, {
			value: "3deg",
			duration: 1000
		}, {
			value: "-3deg",
			duration: 1000
		}, {
			value: "3deg",
			duration: 1000
		}, {
			value: "-3deg",
			duration: 1000
		}, ],
		easing: 'linear',
		offset: 0,
	}).add({
		targets: '#plane',
		translateX: [{
			value: -400,
			duration: 0
		}, {
			value: 450,
			duration: 15000
		}],
		scale: {
			value: 0.35,
			duration: 1
		},
		translateY: {
			value: 70,
			duration: 1
		},
		easing: 'linear',
		offset: 0,
	}).add({
		targets: '#window',
		fill: [{
			value: '#f1c40f',
			duration: 0,
			delay: function (el, i, l) {
				if (i % 2 == 0) {
					return i * 1600;
				} else {
					return i * 900;
				}
			}
		}, {
			value: '#fff',
			duration: 1000,
			delay: function (el, i, l) {
				return i * 1600;
			}
		}],
		easing: 'linear',
		offset: 200
	}).add({
		targets: '#cloud-one',
		translateX: [{
			value: 0,
			duration: 0
		}, {
			value: 750,
			duration: 16000
		}],
		scale: {
			value: 1.4,
			duration: 1
		},
		easing: 'linear',
		offset: 0
	}).add({
		targets: '#cloud-two',
		translateX: [{
			value: 0,
			duration: 0
		}, {
			value: 750,
			duration: 16000
		}],
		easing: 'linear',
		offset: 0
	}).add({
		targets: '#cloud-three',
		translateX: [{
			value: 0,
			duration: 0
		}, {
			value: 750,
			duration: 16000
		}],
		easing: 'linear',
		offset: 0
	}).add({
		targets: '#cloud-four',
		translateX: [{
			value: 0,
			duration: 0
		}, {
			value: 850,
			duration: 16000
		}],
		scale: {
			value: 1.8,
			duration: 1
		},
		easing: 'linear',
		offset: 0,
	});
	building_timeline.add({
		targets: '.building',
		scaleY: [{
			value: 0,
			duration: 0,
			delay: 0
		}, {
			value: 1,
			duration: 1700,
			delay: function (el, i, l) {
				return i * 160;
			}
		}],
		translateY: [{
			value: 0,
			duration: 0,
			delay: 0
		}, {
			value: -10,
			duration: 600,
			easing: 'easeInOutCubic',
			delay: function (el, i, l) {
				return i * 160;
			}
		}, {
			value: 0,
			duration: 300,
			easing: 'easeInOutCubic'
		}],
		offset: 0
	}).add({
		targets: '.filler-item',
		translateY: [{
			value: -180,
			duration: 0,
			delay: 0
		}, {
			value: 0,
			duration: 900,
			delay: function (el, i, l) {
				return 1400 + (i * 190);
			}
		}, ],
		easing: 'easeInOutQuart',
		delay: function (el, i, l) {
			return i * 190;
		},
		offset: 0
	}).add({
		targets: '#lightpost polygon',
		fill: [{
			value: '#fff',
			duration: 0
		}, {
			value: '#f1c40f',
			duration: 200
		}, {
			value: '#fff',
			duration: 200
		}, {
			value: '#f1c40f',
			duration: 100
		}, {
			value: '#fff',
			duration: 100
		}, {
			value: '#f1c40f',
			duration: 100
		}, ],
		easing: 'easeInOutQuart',
	})
}
document.addEventListener('DOMContentLoaded', init);