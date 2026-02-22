const tableBody = document.getElementById("employeeTableBody");
const employees = [];

const positions = ["Developer", "HR", "Manager", "Tester", "Designer"];

// create 50 employee objects
for (let i = 1; i <= 50; i++) {
  employees.push({
    id: i,
    email: `employee${i}@company.com`,
    name: `Employee ${i}`,
    position: positions[i % positions.length],
  });
}

function renderEmployees(data) {
  tableBody.innerHTML = "";

  data.forEach((emp) => {
    const row = `
      <tr>
        <th scope="row">${emp.id}</th>
        <td>${emp.email}</td>
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>
            <span class="material-symbols-outlined"> edit </span>
            <span class="material-symbols-outlined"> content_copy </span>
            <span class="material-symbols-outlined"> delete </span>
        </td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });
}
renderEmployees(employees);
