function greeting(){
    alert("Good Morning");
    var name=prompt("Please enter your name");
    alert("You entered your name as "+name.toUpperCase());
    var age=prompt("Enter your age");
    alert("You are "+name+" \nYou are of age "+age);
}


function AgeToYear(age){
    var YearOfBirth=2022-age;
    return YearOfBirth;
}
greeting();

alert("You are born in "+AgeToYear(19));