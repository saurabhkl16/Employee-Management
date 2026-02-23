import { employees } from "./employee-data.js";

const tableBody = document.getElementById("employeeTableBody");
const createBtn = document.getElementById("CreateBtn");
const editedEmp = JSON.parse(localStorage.getItem("editedEmployee"));
const createEmploye = JSON.parse(localStorage.getItem("createEmploye"));

// ================  Check if updated data available  ====================
function setEditedTabledata() {
  employees.forEach((emp) => {
    if (editedEmp && emp.id == editedEmp.id) {
      emp.name = editedEmp.name;
      emp.surname = editedEmp.surname;
      emp.email = editedEmp.email;
      emp.position = editedEmp.position;
      emp.mobile = editedEmp.mobile;
    }
  });
}
function createNewEmploye() {
  if (createEmploye) {
    employees.push({
      id: employees.length + 1,
      email: createEmploye.email,
      name: createEmploye.name,
      position: createEmploye.position,
      surname: createEmploye.surname,
      mobile: createEmploye.mobile,
      status: "Active",
    });
  }
}
setEditedTabledata();
createNewEmploye();

// ================  Update table data  ====================
function renderEmployees(data) {
  tableBody.innerHTML = "";

  data.forEach((emp, i) => {
    const row = `
      <tr>
        <th scope="row">${emp.id}</th>
        <td>${emp.email}</td>
        <td>${emp.name}</td>
        <td>24</td>
        <td>${emp.position}</td>
        <td>Active</td>
        <td>
            <span class="material-symbols-outlined edit-btn" data-index="${i}"> edit </span>
            <span class="material-symbols-outlined copy-btn" data-index="${i}"> content_copy </span>
            <span class="material-symbols-outlined del-btn text-danger data-index="${i}""> delete </span>
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

// ============== Handle Edit, copy and delete ==============

tableBody.addEventListener("click", (e) => {
  if (e.target.classList.contains("edit-btn")) {
    const index = e.target.dataset.index;
    const selectedEmployee = employees[index];
    // store data for edit page
    localStorage.setItem("editEmployee", JSON.stringify(selectedEmployee));
    window.location.href = "edit/edit.html";
  }

  // COPY BUTTON
  if (e.target.classList.contains("copy-btn")) {
    const index = e.target.dataset.index;
    const selectedEmployee = employees[index];

    localStorage.setItem("copyEmployee", JSON.stringify(selectedEmployee));
    window.location.href = "copy/copy.html";
  }
});
