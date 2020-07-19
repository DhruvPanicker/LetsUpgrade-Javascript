// Q2.Destructure the following object
const student = {
    name: "Helsinki",
    age: 24,
    projects : {
        dicegame:"Two player dicegame using Javascript"
    }
}

const {name, age, projects} = student
console.log(projects);
