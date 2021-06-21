import { addRecord } from "./addRecord";

// Get DOM elements
const table = document.querySelector(".table");
const formInput = document.querySelectorAll(".form__input");
const titleInput = document.querySelector(".title-input");
const authorInput = document.querySelector(".author-input");
const isbnInput = document.querySelector(".isbn-input");

export function validateForm(e) {
  // Prevent default button event
  e.preventDefault();

  // Hold inputs data
  const input = {
    title: titleInput.value,
    author: authorInput.value,
    isbn: isbnInput.value,
  };

  // Create alert element
  const alert = document.createElement("p");
  alert.classList.add("form__alert");

  // If ISBN input isn't number
  if (isNaN(input.isbn)) {
    alert.textContent = "Please enter a valid ISBN number";
    table.before(alert);
  }

  // If any input is empty
  formInput.forEach((input) => {
    if (input.value === "") {
      alert.textContent = "Please fill in all fields";
      table.before(alert);
    }
  });

  // Remove alert element after 3 seconds
  const removeAlert = setTimeout(() => {
    document.body.removeChild(alert);
  }, 3000);

  if (
    input.title !== "" &&
    input.author.value !== "" &&
    input.isbn.value !== "" &&
    Number(input.isbn)
  ) {
    clearTimeout(removeAlert);

    // If all inputs are filled
    addRecord(input.title, input.author, input.isbn);
  }

  // Clear inputs after adding new record
  formInput.forEach((input) => {
    input.value = "";
  });
}
