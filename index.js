const birdImages = document.querySelectorAll('.bird-container img');
const birdSound = document.getElementById('bird-sound');

birdImages.forEach((img) => {
    let isPlaying = false;

    img.addEventListener('click', () => {
        const soundSrc = img.getAttribute('data-sound');
        
        if (isPlaying) {
            birdSound.pause();
            birdSound.currentTime = 0;
            isPlaying = false;
        } else {
            birdSound.src = soundSrc;
            birdSound.play();
            isPlaying = true;
        }
    });
});
