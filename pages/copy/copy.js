const form = document.getElementById("copyForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const employee = {
    name: document.getElementById("name").value,
    id: document.getElementById("employeeId").value,
    position: document.getElementById("employeePosition").value,
    email: document.getElementById("employeeEmail").value,
    mobile: document.getElementById("employeeMobile").value,
  };
  console.log(employee);
});
