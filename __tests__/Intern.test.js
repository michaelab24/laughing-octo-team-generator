const {TestWatcher} = require("jest")
const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');


// creates intern object 
test('creates an intern object', () => {
    const intern = new Intern("Jim", 6, "@.net", "dartmouth");

    expect(intern.getName()).toEqual(expect.any(String));
    expect(intern.getId()).toEqual(expect.any(Number));
    expect(intern.getEmail()).toEqual(expect.any(String));
    expect(intern.getSchool()).toEqual(expect.any(String));
});

// gets role from getRole()
test('gets role of intern', () => {
    const intern = new Intern();

    expect(intern.getRole()).toEqual("Intern");
}); 