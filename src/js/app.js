import { validateForm } from "./validateForm";
import { getDataFromJSON } from "./getDataFromJSON";
import { getDataFromAPI } from "./getDataFromAPI";

const addBtn = document.querySelector(".form__btn");

addBtn.addEventListener("click", validateForm);

getDataFromJSON();
getDataFromAPI();
