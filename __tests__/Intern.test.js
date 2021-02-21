// requires/connects necessary constructor functions/modules.
const Intern = require("../lib/Intern");

// test to ensure we capture the school from the constuctor
test("Provide School from the constructor argument", () => {
  const testValue = "Juliard";
  const emp = new Intern("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.school).toBe(testValue);
});

// ensures the employee role of intern is asigned
test("getRole() worked!", () => {
  const testValue = "Intern";
  const emp = new Intern("Ryan", 1, "Thisisnotreal@fake.com", "Juliard");
  expect(emp.getRole()).toBe(testValue);
});

// test returns the value of the school entered
test("Get School from getSchool()", () => {
  const testValue = "Juliard";
  const emp = new Intern("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.getSchool()).toBe(testValue);
});