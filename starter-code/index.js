const email = document.querySelector(".content_input");
const btn = document.querySelector(".content_input_btn");
const form = document.getElementById("form");
const text = document.getElementById("text");

const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

email.addEventListener("input", validation);

function validation() {
  if (email.value === "") {
    text.innerHTML = "Oops! Please add your email";
    text.style.color = "#FB3E3E";
  } else if (email.value.match(pattern)) {
    email.classList.add("valid");
    email.classList.remove("invalid");
    text.innerHTML = "Oh yeah! You email is  valid!";
    text.style.color = "#54E6AF";
  } else {
    email.classList.remove("valid");
    email.classList.add("invalid");
    text.innerHTML = "Oops! Please check your email";
    text.style.color = "#FB3E3E";
  }
}
