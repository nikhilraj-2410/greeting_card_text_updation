const editText = document.getElementById('editable-text');
const fontFamilySelect = document.getElementById('font-style');
const fontSizeSelect = document.getElementById('font-size');
const fontColorInput = document.getElementById('font-color');
const addTextInput = document.getElementById('add-text');
const updateButton = document.getElementById('update-text');
const resetButton = document.getElementById('reset-text'); // Add reference for reset button

updateButton.addEventListener('click', function() {
  editText.style.fontFamily= fontFamilySelect.value;
  editText.style.fontSize = fontSizeSelect.value + 'px';
  editText.style.color = fontColorInput.value;
  editText.textContent += addTextInput.value;
  addTextInput.value = ''; // Clear input field completely
});

// Reset text functionality
if (resetButton) {
  resetButton.addEventListener('click', function() {
    editText.textContent = ''; // Clear text content
    fontFamilySelect.value ='Arial';
    fontSizeSelect.value = '25'; // Reset font size to default (optional)
    fontColorInput.value = '#000'; // Reset font color to black (optional)
    addTextInput.value = ''; // Clear add text input
  });
}
