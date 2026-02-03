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



