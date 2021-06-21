let editable = false;

export function toggleContentEditable(e) {
  editable = !editable;

  // An edited row element
  const record = e.target.parentElement.parentElement.parentElement;

  // A row's button element
  const btn = e.target.parentElement.parentElement;

  record.contentEditable = editable;
  btn.contentEditable = false;

  if (editable == true && e.target.classList[0] === "fas") {
    record.focus();
    e.target.parentElement.innerHTML = `<i class="fas fa-check-square edited"></i>`;
  } else if (editable == false && e.target.classList[0] === "fas") {
    e.target.parentElement.innerHTML = `<i class="fas fa-pen-square"></i>`;
  }
}
