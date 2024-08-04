function print(users) {
    let arr =[]
    for(let i =0; i < users.length; i++) {
        if(users[i].gender === "male" && users[i].age >= 18) {
            arr.push(users[i]);
        }
    }
    return arr;
}

let users = [{
    name: "Harkirat",
    age: 21,
    gender: "male"
}, {
    name: "raman",
    age: 22,
    gender: "male"
}, {
    name: "maki",
    age: 13,
    gender: "other"
}
]

console.log(users)
console.log(print(users));