function CapitalizeFirstchar(name) {
    if(name.charAt(0) === name.charAt(0).toUpperCase() ? true : false) {
        return name;
    }
    else {
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}

console.log(CapitalizeFirstchar('Suman'));