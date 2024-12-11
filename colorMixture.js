function matchColor(color1, color2){
    if((color1 === 'red' || color2 === 'red') && (color1 === 'blue' || color2 === 'blue')){
        return 'P';
    }
    else if((color1 === 'red' || color2 === 'red') && (color1 === 'yellow' || color2 === 'yellow')){
        return 'O';
    }
    else if((color1 === 'blue' || color2 === 'blue') && (color1 === 'yellow' || color2 === 'yellow')){
        return 'G'
    }
}
function colorMixture(color1, color2){
    const color = matchColor(color1, color2);
    switch(color){
        case 'P':
            console.log("Purple");
            break;
        case 'O': 
            console.log("Orange");
            break;
        case 'G':
            console.log("Green");
            break
        default:
            console.log("Invalid color combination");
            break;
    }
}

colorMixture('yellow', 'blue');