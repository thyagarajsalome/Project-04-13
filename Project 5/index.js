const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");

btnEl.addEventListener("click", () => {
  addEventListener(); // Call the function to add event listener
});

function addEventListener() {
  const newImgEl = document.createElement("img");
  newImgEl.src = `https://picsum.photos/300/300?random=${Math.floor(
    Math.random() * 2000
  ) * 2000}`;
  imageContainerEl.appendChild(newImgEl); // Append the new image to the container
  
  imageContainerEl.appendChild(newImgEl)
}
