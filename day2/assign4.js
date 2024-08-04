function sum(n) {
    let totalsum = 0;
    for(let i = 1; i <= n; i++) {
        totalsum += i;
    }
    return totalsum;
}

let num = 7;
console.log(sum(num))