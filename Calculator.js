const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const clear = document.getElementById("clear");
const equals = document.getElementById("equals");

let expression = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value) {
      expression += value;
      display.value = expression;
    }
  });
});

clear.addEventListener("click", () => {
  expression = "";
  display.value = "";
});

equals.addEventListener("click", () => {
  try {
    expression = eval(expression).toString();  // ⚠️ For learning use only!
    display.value = expression;
  } catch {
    display.value = "Error";
    expression = "";
  }
});
