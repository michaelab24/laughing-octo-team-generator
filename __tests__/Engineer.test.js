// using Employee constructor 
const {TestWatcher} = require("jest")
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');


// creates engineer object 
test('creates an engineer object', () => {
    const engineer = new Engineer("Mike", 8, "@.com", "github");

    expect(engineer.getName()).toEqual(expect.any(String));
    expect(engineer.getId()).toEqual(expect.any(Number));
    expect(engineer.getEmail()).toEqual(expect.any(String));
    expect(engineer.getGithub()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of engineer', () => {
    const engineer = new Engineer();

    expect(engineer.getRole()).toEqual("Engineer");
}); 