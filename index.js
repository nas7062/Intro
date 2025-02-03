document.addEventListener("DOMContentLoaded", () => {
  const modal = document.querySelector(".modal");
  const modalPopups = document.querySelectorAll(".modal_popup");

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("modal_btn")) {
      const targetModal = event.target.dataset.modal;
      modalPopups.forEach((popup) => {
        popup.style.display = "none";
      });

      modal.style.display = "block";
      document.querySelector(`.modal_popup.${targetModal}`).style.display =
        "block";
    }
  });

  document.addEventListener("click", (event) => {
    if (event.target.classList.contains("close_btn")) {
      modal.style.display = "none";
      modalPopups.forEach((popup) => (popup.style.display = "none"));
    }
  });

  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      modalPopups.forEach((popup) => (popup.style.display = "none"));
    }
  });
});
const cursor = document.getElementById("customCursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.pageX}px`;
  cursor.style.top = `${e.pageY}px`;
});

const sliderWrap = document.querySelector("#slider-wrap");
const sliderContainer = document.querySelector("#slider-items");
const slidesCount = document.querySelectorAll(".slide").length;
let currentIdx = 1;
function movingSlider(index) {
  sliderContainer.style.transition = "transform 0.5s ease";
  sliderContainer.style.transform = `translateX(-${400 * index}px)`;
  console.log("moving");
}

document.addEventListener("click", (e) => {
  let index = currentIdx;
  e.preventDefault();
  if (e.target.classList.contains("left")) {
    currentIdx = currentIdx - 1 >= 0 ? currentIdx - 1 : slidesCount - 1;
  } else if (e.target.classList.contains("right")) {
    currentIdx = currentIdx + 1 >= slidesCount ? 0 : currentIdx + 1;
  }
  console.log(currentIdx);
  movingSlider(index);
});
