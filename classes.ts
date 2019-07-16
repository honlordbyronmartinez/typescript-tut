// Basic Typescript script on using classes

class Student {
    fullName: string;
    constructor ( public firstName: string, public middleInitial: string, public lastName: string){
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName ;
}

let user = new Student("Byron", "F.", "Martinez")

document.body.textContent = greeter(user) ;
