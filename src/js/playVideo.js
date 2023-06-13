"use strict";

const heroSectionEl = document.querySelector(".hero");
const eventsSectionEl = document.querySelector(".events");

heroSectionEl.addEventListener("click", play);
eventsSectionEl.addEventListener("click", play);

function play(e) {
  if (e.target.matches(".btn-play")) {
    e.target.previousElementSibling.play();
  }
  return;
}
