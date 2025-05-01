const colorInput = document.getElementById("colorPicker");
const colorCode = document.getElementById("colorCode");

colorInput.addEventListener("input", () => {
  const selectedColor = colorInput.value;
  document.body.style.backgroundColor = selectedColor;
  colorCode.textContent = selectedColor;
});
