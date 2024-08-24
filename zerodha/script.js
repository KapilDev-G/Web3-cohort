function returns(numberOfYears, base, yearlyGains) {
    return (base* numberOfYears* yearlyGains) / 100
}

let base = document.getElementById("capi");
let numberOfYears = document.getElementById("years");
let yearlyGains = document.getElementById("rate");