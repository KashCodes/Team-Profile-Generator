// requires/connects necessary constructor functions/modules.
const Employee = require("../lib/Employee");

// returns newly generated employee
test("New Employee generated", () => {
  const emp = new Employee();
  expect (typeof(emp)).toBe("object");
});