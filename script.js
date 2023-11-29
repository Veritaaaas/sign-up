
var input = document.querySelectorAll("input");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm-password");
var button = document.getElementById("submit");

button.addEventListener("click", function(event) {

    if(validatePassword(password.value, confirm_password.value) == false)
    {
        confirm_password.style.border = "2px solid red";
        confirm_password.setCustomValidity("Passwords do not match!");
        event.preventDefault();
    }
    else
    {
        confirm_password.style.border = ""; 
        confirm_password.setCustomValidity("");
        confirm_password.reportValidity();
    }
    confirm_password.reportValidity();

});

function validatePassword(pass1, pass2)
{
    console.log(pass2);
    if(pass1 === pass2)
    {
        return true;
    }
    else
    {
        return false;
    }
} 

