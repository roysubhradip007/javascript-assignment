function correctBug(cart) {
    for(let i=0; i<cart.length; i++){
        cart[i] = cart[i]*2;
    }
}

let arr = [3,4,5,6,67,8,9,9];
correctBug(arr);
console.log(arr);