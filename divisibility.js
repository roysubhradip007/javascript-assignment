function divisibility(numArr){
    for(let i=0; i<numArr.length; i++){
        if(numArr[i] % 2 !== 0 && numArr[i] % 3 === 0){
            console.log(numArr[i]);
        }else{
            continue;
        }
    }
}

let arr = [12,5,56,21,15,47,39,33,10];
divisibility(arr);