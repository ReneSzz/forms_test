
let errorText = document.getElementById("errorText");
let inputs = document.querySelectorAll("input");
let password1 = document.getElementById('password');
let passwordConfirm = document.getElementById('confirmPassword');
const signupButton = document.getElementsByClassName('button2');






signupButton[0].addEventListener ('click', function (e){
    if (passwordConfirm.value === password1.value) {
      
        for (i = 0; i < 6; i++)
        inputs[i].value = "";
        password1.classList.remove("error");
        passwordConfirm.classList.remove("error");
        errorText.style.display = "none";

    }

    if (passwordConfirm.value !== password1.value){ 
        password1.classList.add("error");
        passwordConfirm.classList.add("error");
        
        errorText.style.display = "block";


    }
});