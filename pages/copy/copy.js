import { employees } from "../employee-data.js";

const employeeName = document.getElementById("name");
const employeeSurname = document.getElementById("surname");
const employeeId = document.getElementById("employeeId");
const employeePosition = document.getElementById("employeePosition");
const employeeEmail = document.getElementById("employeeEmail");
const employeeMobile = document.getElementById("employeeMobile");
const copyForm = document.getElementById("copyForm");
const copyEmp = JSON.parse(localStorage.getItem("copyEmployee"));

// ============ Set input values of copy employee =============
employeeName.value = copyEmp.name;
employeeSurname.value = copyEmp.surname;
employeeId.value = copyEmp.id;
employeePosition.value = copyEmp.position;
employeeEmail.value = copyEmp.email;
employeeMobile.value = copyEmp.mobile;

// ============ Update employee data =============
copyForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const createEmploye = {
    id: employeeId.value,
    email: employeeEmail.value,
    name: employeeName.value,
    position: employeePosition.value,
    surname: employeeSurname.value,
    mobile: employeeMobile.value,
    status: "Active",
  };
  localStorage.setItem("createEmploye", JSON.stringify(createEmploye));

  // const employee = {
  //   name: document.getElementById("name").value,
  //   id: document.getElementById("employeeId").value,
  //   position: document.getElementById("employeePosition").value,
  //   email: document.getElementById("employeeEmail").value,
  //   mobile: document.getElementById("employeeMobile").value,
  // };
  window.location.href = "../home-page.html";
});
