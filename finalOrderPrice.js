totalOrderPrice = (cartObj) => {
    let totalCost = 0;
    cartObj.forEach((e) => {
        totalCost += Object.keys(e)[0] *  Object.values(e)[0];
    });

    return totalCost;
}

obj = [{2:4}, {4:56}, {6: 4}, {5:4}];

console.log(totalOrderPrice(obj));