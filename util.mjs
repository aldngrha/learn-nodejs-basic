import util from "util";

const firstName = "Aldi";

console.info(`Hello ${firstName}`);
console.info(util.format("Hello %s", firstName));

const person = {
    firstName: "Aldi"
}
console.info(`Person ${JSON.stringify(person)}`);
console.info(util.format("Person %j", person));
