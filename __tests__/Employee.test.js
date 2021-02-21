// requires/connects necessary constructor functions/modules.
const Employee = require("../lib/Employee");

// Pulls from __mocks__ folder instead
//jest.mock('../lib/Employee.js');

// tests to returns newly generated employee
test("New Employee generated", () => {
  const emp = new Employee();
  expect (typeof(emp)).toBe("object");
});

// test to return employee email 
test("Get email from getEmail()", () => {
  const testValue = "Thisisnotreal@fake.com";
  const emp = new Employee("Ryan", 1, testValue);
  expect(emp.getEmail()).toBe(testValue);
});

// test to return employee role
test("getRole() works", () => {
  const testValue = "Employee";
  const emp = new Employee("Bryan", 1, "Thisisnotreal@fake.com");
  expect(emp.getRole()).toBe(testValue);
});

// test to set employee name with constructor argument
test("set Employee Name with constructor argument", () => {
  const name = "Bryan";
  const emp = new Employee(name);
  expect(emp.name).toBe(name);
});

// test to set ID with employee
test("Set ID with constructor arguement", () => {
  const testValue = 100;
  const emp = new Employee("Ryan", testValue);
  expect(emp.id).toBe(testValue);
});