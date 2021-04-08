const _body = document.documentElement;

// <navbar>
const navbarItems_ul = document.getElementById("navbarItemsList");
const expandNavbarItemsButton_div = document.getElementById(
  "expandNavbarItemsButton"
);
const expandNavbarItemsButtonStrips_spans = document.getElementsByClassName(
  "expand-navbar-items-button-strip"
);
// </navbar>

// <form-section>
const form_section = document.getElementById("formSection");
const form = document.getElementsByTagName("form")[0];
const feedbackType_select = document.getElementById("feedbackTypeSelect");
const name_input = document.getElementById("nameinput");
const fileUpload_input = document.getElementById("fileUpload");
const message_textarea = document.getElementById("messageTextarea");
const messageCharsRemainingCounter_div = document.getElementById(
  "messageCharsRemainingCounterDiv"
);
const submitForm_input = document.getElementById("submitFormInput");
// </form-section>
