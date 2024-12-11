function rentalCost(cartype, days) {
    if(cartype === "Economy") return 4000 * days;
    else if(cartype === "Midsize") return 10000 * days;
    else return 20000 * days;
}

console.log(rentalCost("Luxury", 5));