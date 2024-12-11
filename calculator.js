function calculator(num1, operator, num2){
    switch (operator){
        case '+':
            return (num1+num2);
        case '-':
            return (num1-num2);
        case '*':
            return (num1*num2);
        case '/':
            return (num1/num2);
        default :
            console.log('Invalid Operator');
    }
}

console.log(calculator(1,'+',2));