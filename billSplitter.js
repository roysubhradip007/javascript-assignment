function billSplitter(costDishes, people) {
    let totalBill = 0;
    for(let i=0; i<costDishes.length; i++){
        totalBill += costDishes[i];
    }
    console.log("Total Bill is : ", totalBill);
    console.log("Paid by each Person : ", totalBill/people);
}

let cost = [50,200,31,400,99,499,56];
billSplitter(cost, 3);
