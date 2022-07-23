let password1 = document.getElementById('password').value;
let passwordConfirm = document.getElementById('confirmPassword').value;
const signupButton = document.getElementsByClassName('button2');
console.log(password1);

signupButton[0].addEventListener ('click', function (e){
    password1 = document.getElementById('password').value
    passwordConfirm = document.getElementById('confirmPassword').value
    if (password1 !== passwordConfirm)
    {
        
    }
});