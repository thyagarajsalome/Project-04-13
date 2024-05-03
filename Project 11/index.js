document.querySelectorAll(".color-container").forEach(container => {
  const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
  container.style.backgroundColor = randomColor;
  container.textContent = randomColor;
});

