$(function() {
	Reveal.initialize({
		history: false
	});

	var socket = io();
	var presentation = $('.reveal');
	var animationTimeout;

	var ignore = false;
	$(window).on('hashchange', function(){
		if(ignore){
			return;
		}
		console.log(window.location.hash);
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
	$('#1').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/1'
		});
	});
	$('#2').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/2'
		});
	});
	$('#3').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/3'
		});
	});
	$('#4').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/4'
		});
	});
	$('#12').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/1/1'
		});
	});
	$('#13').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/1/2'
		});
	});
	$('#32').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/3/1'
		});
	});
	$('#42').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/4/1'
		});
	});
	$('#43').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/4/2'
		});
	});
	$('#44').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/4/3'
		});
	});
	$('#45').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/4/4'
		});
	});
	$('#46').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/4/5'
		});
	});
	$('#47').on('click', function(){
		socket.emit('slide-changed', {
			hash: '#/4/6'
		});
	});
});