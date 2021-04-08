message_textarea.addEventListener("input", () => {
  messageCharsRemainingCounter_div.innerText = `${
    500 - message_textarea.value.length
  } characters left`;
});

submitForm_input.addEventListener("click", () => {
  alert("Thank you for feedback submission!");
  window.location = "index.html";
});
