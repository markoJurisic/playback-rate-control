const speed = document.querySelector('.speed'),
	  bar = speed.querySelector('.speed-bar'),
	  video = document.querySelector('.flex');


function handlePlaybackRate(e) {
	const y = e.pageY - this.offsetTop,
		  percent = y / this.offsetHeight,
		  min = 0.4,
		  max = 2.5,
		  height = Math.round(percent * 100) + '%',
		  playbackRate = percent * (max - min) + min;
	
	bar.style.height = height;
	bar.textContent = playbackRate.toFixed(2) + 'x';
	video.playbackRate = playbackRate;	
}

speed.addEventListener('click', function() {
	this.addEventListener('mousemove', handlePlaybackRate)		   
});

speed.addEventListener('mouseleave', function() {
	this.removeEventListener('mousemove', handlePlaybackRate)		   
});
