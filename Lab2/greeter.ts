class Student{
  fullname: string;
  constructor(public firstName: string, public middleInitial: string,
  public lastname: string){
    this.fullname = firstName + " " + middleInitial + " " + lastname;
  }

}

interface Person{
  firstName: string;
  lastname: string;
}


function greeter(person: Person){
  return "Hello, " +person.firstName + " " +  person.lastname;
}

let user = new Student("Jane", "M.", "User");

document.body.textContent = greeter(user);
