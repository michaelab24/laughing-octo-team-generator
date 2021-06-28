const {TestWatcher} = require("jest")
const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');


// creates manager object 
test('creates an manager object', () => {
    const manager = new Manager("Tom", 1, "@.org", "12345");

    expect(manager.getName()).toEqual(expect.any(String));
    expect(manager.getId()).toEqual(expect.any(Number));
    expect(manager.getEmail()).toEqual(expect.any(String));
    expect(manager.getOfficeNumber()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of manager', () => {
    const manager = new Manager();

    expect(manager.getRole()).toEqual("Manager");
}); 