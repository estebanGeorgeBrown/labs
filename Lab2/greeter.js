var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastname) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastname = lastname;
        this.fullname = firstName + " " + middleInitial + " " + lastname;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastname;
}
var user = new Student("Jane", "M.", "User");
document.body.textContent = greeter(user);
