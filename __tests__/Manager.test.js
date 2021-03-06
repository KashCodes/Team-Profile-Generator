// requires/connects necessary constructor functions/modules.
const Manager = require("../lib/Manager");
const Employee = require("../lib/Employee");

// returns test for office number w/ fake name, employee number and email.
test("Office Number set by constructor argument", () => {
  const testValue = 59;
  const emp = new Manager("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.officeNumber).toBe(testValue);
});

// returns test for employee role
