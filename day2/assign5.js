function greet(user) {
    if(user.gender === "male")
        console.log("Hi Mr. " + user.name + " your age is " + user.age);
    else if(user.gender === "female")
        console.log("Hi Mrs. " + user.name + " your age is " + user.age);
    else
        console.log("Hi Others. " + user.name + " your age is " + user.age);

    if(user.age >= 18)
        console.log("You can Vote")
    else
        console.log("You cannot Vote")
}

let user = {
	name: "Harkirat",
	age: 21,
    gender: "shemale"
}

greet(user)
