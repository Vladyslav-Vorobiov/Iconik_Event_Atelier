const btnPlayEl = document.querySelector("#btn-play");
const videoEl = document.querySelector(".hero__video");

btnPlayEl.addEventListener("click", play);

function play() {
  videoEl.play();
}
