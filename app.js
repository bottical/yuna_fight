var audio = document.getElementById("audio");
var playButton = document.getElementById("playButton");

playButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    playButton.innerHTML = "音声を停止";
  } else {
    audio.pause();
    playButton.innerHTML = "音声を再生";
  }
});
