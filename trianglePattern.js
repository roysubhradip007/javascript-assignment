function makeTrianglePattern(n){
    for(let i=0;i<n;i++){
        let str = "";
        for(let j=n-i;j>0;j--){
            str+="* ";
        }
        console.log(str);
    }
}

makeTrianglePattern(7);