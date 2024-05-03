const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.getElementById("prev");
const nextEl = document.getElementById("next");

let x = 0;

function updateGallery() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
}

prevEl.addEventListener("click", () => {
  x += 45;
  clearTimeout(timer);
  updateGallery();
});

nextEl.addEventListener("click", () => {
  x -= 45;
  clearTimeout(timer);
  updateGallery();
});

let timer = setInterval(() => {
  x -= 45;
  updateGallery();
}, 3000);
