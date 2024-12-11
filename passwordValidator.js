function passwordValidator(password, confirmPassword){
    if(password === confirmPassword){
        console.log('Password Matched. Password Validation Successful');
    }
    else{
        console.log("Password didn't match. Password validation unsuccessful");
    }
}

passwordValidator('suman', 'suman');