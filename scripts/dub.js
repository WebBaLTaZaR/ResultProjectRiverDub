const shortVideo = document.querySelector('.shortVideo');
const buttonPlayPause = document.querySelector('.buttonPlayPause');
const buttonFullscreen = document.querySelector('.buttonFullscreen');
buttonPlayPause.addEventListener('click', function (e) {
	if (buttonPlayPause.src.endsWith('play.svg')) {
		buttonPlayPause.src = 'img/pause.svg'
		shortVideo.play();
	}else{
		buttonPlayPause.src = 'img/play.svg';
		shortVideo.pause();
	}
});
buttonFullscreen.addEventListener('click', function (e) {
	if (!document.fullscreenElement) {
		shortVideo.requestFullscreen().catch(err => {
      console.log(`Ошибка при попытке включить полноэкранный режим: ${err.message}`);
    });
	}else{
		document.exitFullscreen();
	}
});