first_name = document.getElementById("first_name");
last_name = document.getElementById("last_name");
email = document.getElementById("email");
password = document.getElementById("password");
confirm_password = document.getElementById("confirm_password");

if (first_name.value == "") 
{
    first_name.style.border = "2px solid red";
}
else
{
    first_name.style.border = "2px solid green";
}

