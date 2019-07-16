// Basic Typescript script on using interfaces
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Byron", lastName: "Martinez" };
document.body.textContent = greeter(user);
