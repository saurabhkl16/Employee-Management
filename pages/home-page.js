import { employees } from "./employee-data.js";

const tableBody = document.getElementById("employeeTableBody");
const createBtn = document.getElementById("CreateBtn");

function renderEmployees(data) {
  tableBody.innerHTML = "";

  data.forEach((emp) => {
    const row = `
      <tr>
        <th scope="row">${emp.id}</th>
        <td>${emp.email}</td>
        <td>${emp.name}</td>
        <td>24</td>
        <td>${emp.position}</td>
        <td>Active</td>
        <td>
            <span class="material-symbols-outlined" id="editEmployee"> edit </span>
            <span class="material-symbols-outlined" id="copyEmployee"> content_copy </span>
            <span class="material-symbols-outlined text-danger"> delete </span>
        </td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });
}
renderEmployees(employees);

// ============== Open Create page ========

createBtn.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "copy/copy.html";
});

// ============== Handeling Actions ========

const editEmployee = document.getElementById("editEmployee");
const copyEmployee = document.getElementById("copyEmployee");

editEmployee.addEventListener("click", () => {
  window.location.href = "edit/edit.html";
});

copyEmployee.addEventListener("click", () => {
  window.location.href = "copy/copy.html";
});
