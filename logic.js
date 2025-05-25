document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const prevInput = document.getElementById('previous-input');
  const buttons = document.querySelectorAll('.btn');

  let input = "";

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.dataset.value;

      if (button.id === 'clear') {
        input = "";
        display.value = "";
        prevInput.textContent = "";
      } else if (button.id === 'equals') {
        try {
          const result = eval(input);
          prevInput.textContent = input;
          display.value = result;
          input = result.toString(); 
        } catch {
          display.value = "Error";
          prevInput.textContent = "";
          input = "";
        }
      } else {
        input += value;
        display.value = input;
      }
    });
  });
});
