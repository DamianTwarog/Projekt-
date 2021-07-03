const videobutton = document.querySelector('#videobutton')
function playVideo() {
var video = document.getElementById("video");
if (video.paused) {
   video.play();
   videobutton.style.display = 'none'
} else {
   video.pause();
   videobutton.style.display = 'block'
   }
}