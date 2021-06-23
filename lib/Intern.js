// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Intern extends Employee {
    constructor (name, id, email, school) {
        // calling employee constructor
        super (name, id, email); 
        
        this.school = school; 
    }

    getSchool () {
        return this.school;
    }

    // override employee role to manager 
    getRole () {
        return "Intern";
    }
}

// to be exported 
module.exports = Intern; 