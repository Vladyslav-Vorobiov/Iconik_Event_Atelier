"use strict";

const sectionMembershipEl = document.querySelector(".membership");

sectionMembershipEl.addEventListener("click", grow);

function grow(e) {
  e.stopPropagation();
  if (e.target.classList.contains("note-card__btn-all")) {
    e.target.innerText =
      e.target.innerText.toLowerCase().trim() === "view all features"
        ? "hide all features"
        : "view all features";

    e.target.previousElementSibling.classList.toggle("toggle-card-height");
  }
  return;
}
