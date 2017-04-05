const speed = document.querySelector('.speed'),
	  bar = speed.querySelector('.speed-bar'),
	  video = document.querySelector('.flex');


function handlePlaybackRate(e) {
	const y = e.pageY - this.offsetTop,
		  percent = y / this.offsetHeight,
		  min = 0.4,
		  max = 2.5,
		  height = Math.round(percent * 100) + '%',
		  // percent * range + min
		  playbackRate = percent * (max - min) + min;
	
	// set the bar's height according to the cursor position and update the rate
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
