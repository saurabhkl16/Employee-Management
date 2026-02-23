import { employees } from "../employee-data.js";

const employeeName = document.getElementById("name");
const employeeSurname = document.getElementById("surname");
const employeeId = document.getElementById("employeeId");
const employeePosition = document.getElementById("employeePosition");
const employeeEmail = document.getElementById("employeeEmail");
const employeeMobile = document.getElementById("employeeMobile");
const editForm = document.getElementById("editForm");
const editEmp = JSON.parse(localStorage.getItem("editEmployee"));

// ============ Set input values of edit employee =============
employeeName.value = editEmp.name;
employeeSurname.value = editEmp.surname;
employeeId.value = editEmp.id;
employeePosition.value = editEmp.position;
employeeEmail.value = editEmp.email;
employeeMobile.value = editEmp.mobile;

// ============ Store form data =============
editForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const editedEmploye = {
    id: employeeId.value,
    email: employeeEmail.value,
    name: employeeName.value,
    position: employeePosition.value,
    surname: employeeSurname.value,
    mobile: employeeMobile.value,
    status: "Active",
  };
  localStorage.setItem("editedEmployee", JSON.stringify(editedEmploye));
  // employees.forEach((emp) => {
  //   if (emp.id == employeeId.value) {
  //     emp.name = employeeName.value;
  //     emp.surname = employeeSurname.value;
  //     emp.email = employeeEmail.value;
  //     emp.position = employeePosition.value;
  //     emp.mobile = employeeMobile.value;
  //   }
  // });
  window.location.href = "../home-page.html";
});
