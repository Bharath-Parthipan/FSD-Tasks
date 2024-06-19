document.addEventListener("DOMContentLoaded", () => {
  const display = document.getElementById("result");
  const buttons = document.querySelectorAll(".calculator button");
  let memory = parseFloat(localStorage.getItem("memory")) || 0;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const value = button.id;
      switch (value) {
        case "clear":
          display.value = "";
          break;
        case "equal":
          try {
            display.value = eval(display.value);
          } catch {
            display.value = "Error";
          }
          break;
        case "m-plus":
          memory += parseFloat(display.value) || 0;
          localStorage.setItem("memory", memory);
          break;
        case "m-minus":
          memory -= parseFloat(display.value) || 0;
          localStorage.setItem("memory", memory);
          break;
        case "mc":
          memory = 0;
          localStorage.setItem("memory", memory);
          break;
        case "add":
          display.value += "+";
          break;
        case "subtract":
          display.value += "-";
          break;
        case "multiply":
          display.value += "*";
          break;
        case "divide":
          display.value += "/";
          break;
        case "modulus":
          display.value += "%";
          break;
        default:
          display.value += value;
          break;
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    const validKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "+",
      "-",
      "*",
      "/",
      "%",
      "Enter",
      "Escape",
    ];
    if (validKeys.includes(event.key)) {
      if (event.key === "Enter") {
        try {
          display.value = eval(display.value);
        } catch {
          display.value = "Error";
        }
      } else if (event.key === "Escape") {
        display.value = "";
      } else {
        display.value += event.key;
      }
    } else {
    //   alert("Only numbers are allowed");
    //   event.preventDefault();
    }
  });
});
