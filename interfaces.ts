// Basic Typescript script on using interfaces

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person){
    return "Hello, " + person.firstName + " " + person.lastName ;
}

let user = {firstName: "Byron", lastName: "Martinez"} ;

document.body.textContent = greeter(user) ;
