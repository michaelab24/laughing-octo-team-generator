// using Employee constructor 
const {TestWatcher} = require("jest")
const Employee = require('../lib/Employee');

// creates employee object 
test('creates an employee object', () => {
    const employee = new Employee("Tim", 7, "@mail");

    expect(employee.getName()).toEqual(expect.any(String));
    expect(employee.getId()).toEqual(expect.any(Number));
    expect(employee.getEmail()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of employee', () => {
    const employee = new Employee();

    expect(employee.getRole()).toEqual("Employee");
}); 