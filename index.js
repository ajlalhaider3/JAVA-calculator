let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
const handleError = (value) => {
  try {
    return eval(value);
  } catch (err) {
    return "Syntax Error";
  }
};
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    let result = handleError(screen.value);
    if (buttonText =="X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.value = screenValue
    } else if (buttonText === "C") {
      screen.value = "";
    }else if (buttonText === "CE") {
      screen.value = screen.value.substring(0, screen.value.length - 1);
    }else {
      if (screen.value !== "Syntax Error") {
        if (buttonText === "=" && screen.value !== "") {
          screen.value = result;
        } else if (buttonText !== "=") {
          screen.value += buttonText;
        }
      }
    }
  });
}
