message_textarea.addEventListener("input", () => {
  messageCharsRemainingCounter_div.innerText = `${
    500 - message_textarea.value.length
  } characters left`;
});

// const feedbackFormSubmitEventHandler = () => {
//   alert("Thank you for feedback submission!");
//   window.location = "index.html";
// }

submitForm_input.onsubmit = () => {
  alert("Thank you for feedback submission!");
  window.location = "index.html";
}