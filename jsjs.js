// opgave 1 

let person = {
    firstname: "hans",
    lastname: "hansen",
    age: 92,
    hometown: "Roskilde",
    pet: "abe",
    petnavn: "monkeydonkey"

}

console.log(person.firstname);
console.log(person.age);


console.log(person["lastname"]);
console.log(person["petnavn"]);

// opgave 2 

const person2 = {
    firstname: "hans",
    lastname: "hansen",
    udannelse: true,
    age: 92,
    hometown: "Roskilde",
    hobbies: ["fodbold", "svømning", "boksning"],
    pet: {
        type: "abe",
        navn: "monkeydonkey"
    },

}

console.log(person2.pet.type);
console.log(person2.pet.navn);

person2.hobbies.forEach(function(hobby) {
    console.log(hobby);
});


// opgave 3 

let students = [
  { name: "Sofie", age: 25, course: "Webudvikler" },
  { name: "Lukas", age: 22, course: "Mediegrafiker" },
  { name: "Emil", age: 28, course: "Teknisk designer" },
];


let studentListDiv = document.querySelector(".hey")

students.forEach(function(student) {

    console.log(student);

    let studentDiv = document.createElement("div");
     studentDiv.classList.add("hey");

    studentDiv.textContent = 
    student.name + ', alder: ' + student.age + ', Udannelse:' + student.course;
    studentListDiv.append(studentDiv);
});


// Ekstraopgave 1, ekstraopgaven er øverst, hvor der er tilføjet classlist. add og append.


