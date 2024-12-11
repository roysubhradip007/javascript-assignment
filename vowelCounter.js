function vowelCounter(name) {
    let count = 0;
    for(let i=0; i<name.length; i++){
        if(name[i] === 'a' || name [i] === 'A') count++;
        else if(name[i] === 'e' || name[i] === 'E') count++;
        else if(name[i] === 'i' || name[i] === 'I') count++;
        else if(name[i] === 'o' || name[i] === 'O') count++;
        else if(name[i] === 'u' || name[i] === 'U') count++;
    }
    return count;
}


console.log('no of vowel in name is : ', vowelCounter('university'));
