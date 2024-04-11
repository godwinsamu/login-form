function validateform(){
    var name=document.myform.name.value;
    var password=document.myform.password.value;
    if(name == null || name == ''){
        alert("Name can't be blank");
    }
    else if(password.length<6){
alert("password must 6 digits");
    }
    else{
        document.login.style.backgroundColor="red";
        document.write("You have logged in successfully");
    }
}


