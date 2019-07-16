function init() {
  anime({
    targets: '#cloud-1, #cloud-2',
    translateY: -20,
    direction: 'alternate',
    duration: 10000,
    loop: true,
    delay: function(_, i, _) {
      return (i * 850) + 500;
    },
  });
}
document.addEventListener("DOMContentLoaded", init);
