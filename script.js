const playBtn = document.querySelector('.play');
const pauseBtn = document.querySelector('.pause');
const video = document.querySelector('#background-video');

const playVid = () => {
  video.play();
}

const pauseVid = () => {
  video.pause();
}

playBtn.addEventListener('click', playVid);
pauseBtn.addEventListener('click', pauseVid);


// preloader
const preloader = document.querySelector('.preloader');

window.addEventListener('load', () => {
  preloader.classList.add('hide-preloader');
});