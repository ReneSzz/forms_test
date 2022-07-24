

let inputs = document.querySelectorAll("input");
let password1 = document.getElementById('password');
let passwordConfirm = document.getElementById('confirmPassword');
const signupButton = document.getElementsByClassName('button2');
console.log(password1);





signupButton[0].addEventListener ('click', function (e){
    // password1 = document.getElementById('password').value
    // passwordConfirm = document.getElementById('confirmPassword').value
    console.log(password1);
    if (passwordConfirm.value === password1.value) {
      
        for (i = 0; i < 6; i++)
        inputs[i].value = "";
        password1.classList.remove("error");
        passwordConfirm.classList.remove("error");

    }

    if (passwordConfirm.value !== password1.value){ 
        password1.classList.add("error");
        passwordConfirm.classList.add("error");
        


    }
});