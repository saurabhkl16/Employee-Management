import { employees } from "./employee-data.js";

export function getEmployees() {
  return employees;
}

export function deleteEmployee(id) {
  return employees.filter(emp => emp.id !== id);
}