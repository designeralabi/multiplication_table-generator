const form = document.querySelector(".form-wrapper");
const genOutput = document.querySelector(".output");
const userNum = document.querySelector("#num");
const resetBtn = document.querySelector("#reset-btn");
const genValue = document.querySelector("#gen_value");

form.addEventListener(
  "submit",
  (evt) => {
    evt.preventDefault();

    let msg = "";
    let userInput = Number(userNum.value);
    let by = 1;

    let genMultiply = Number(genValue.value);

    if (!userInput) return;
    if (!genMultiply) return;

    while (true) {
      if (by > genMultiply) break;
      msg += userInput + ` x ${by} = ` + (userInput * by + "<br />");
      by++;
    }

    genOutput.innerHTML = msg;

    resetBtn.addEventListener("click", () => {
      genOutput.innerHTML = "";
    });
  },
  false
);
