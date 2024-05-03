const btnEls = document.querySelectorAll(".btn"); // Corrected variable name to plural

btnEls.forEach(btnEl => { // Changed to forEach loop to iterate over each element
  btnEl.addEventListener("mouseover", (event) => {
    const x = (event.pageX - btnEl.offsetLeft);
    const y = (event.pageY - btnEl.offsetTop);

    btnEl.style.setProperty("--xPos", x + "px");
    btnEl.style.setProperty("--yPos", y + "px");
  });
});
