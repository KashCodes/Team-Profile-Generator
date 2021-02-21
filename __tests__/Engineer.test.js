// requires/connects necessary constructor functions/modules.
const Engineer = require('../lib/Engineer');

// tests to ensure GitHub profile is being captured
test("GitHub Account via constructor argument", () => {
  const testValue = "GitHubFaker";
  const emp = new Engineer("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.github).toBe(testValue);
});

// Test ensures the employee is being assigned the Engineer role
test("getRole() works!", () => {
  const testValue = "Engineer";
  const emp = new Engineer("Ryan", 1, "Thisisnotreal@fake.com", "GitHubFaker");
  expect(emp.getRole()).toBe(testValue);
});

// test returns GitHub username from capture. 
test("get GitHub username from getGitHub()", () => {
  const testValue = "GitHubFaker";
  const emp = new Engineer("Ryan", 1, "Thisisnotreal@fake.com", testValue);
  expect(emp.getGitHub()).toBe(testValue);
});