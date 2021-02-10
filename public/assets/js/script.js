$(function() {
	Reveal.initialize({
		controls: false,
		progress: false,
		loop: true,
		history: true
	});

	var socket = io();

	var ignore = false;
	$(window).on('hashchange', function(){
		if(ignore){
			return;
		}
		var hash = window.location.hash;
		socket.emit('slide-changed', {
			hash: hash
		});
	});
	socket.on('navigate', function(data){
		window.location.hash = data.hash;
		ignore = true;
		setInterval(function () {
			ignore = false;
		},100);
	});
});