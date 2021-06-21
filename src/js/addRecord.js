import { toggleContentEditable } from "./toggleContentEditable";

export function addRecord(title, author, isbn) {
  const table = document.querySelector(".table__body");

  // Create row element
  const row = document.createElement("tr");
  row.classList.add("table__row");

  row.innerHTML = `
          <tr class="table__row" >
            <td class="table__data table__title">
              ${title}
            </td>
            <td class="table__data table__author">
              ${author}
            </td>
            <td class="table__data table__isbn">
              ${isbn}
            </td>
            <td class="table__btn">
              <button class="btn-edit">
                <i class="fas fa-pen-square"></i>
              </button>
              <button class="btn-delete">
                <i class="fas fa-window-close"></i>
              </button>
            </td>
          </tr>`;

  // Append row element to table
  table.appendChild(row);

  // Remove record from table
  const deleteBtn = document.querySelectorAll(".btn-delete");

  deleteBtn.forEach((btn) =>
    btn.addEventListener("click", (e) => {
      const record = e.target.parentElement.parentElement.parentElement;

      if (record.classList[0] === "table__row") {
        record.remove();
      }
    })
  );

  // Edit record in table
  const editBtn = document.querySelectorAll(".btn-edit");

  // Enable and disable record's content edit on click
  editBtn.forEach((btn) =>
    btn.addEventListener("click", toggleContentEditable)
  );
}
