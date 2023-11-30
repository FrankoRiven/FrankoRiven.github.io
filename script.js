let loginScreen = document.getElementById("login");
let registerScreen = document.getElementById("register");
let loginButton = document.getElementById("loginLink");
let registerButton = document.getElementById("registerLink");
registerButton.addEventListener("click", showRegisterScreen);


function showRegisterScreen(){
    loginScreen.style.display="none";
    registerScreen.style.display="flex";
    loginButton.addEventListener("click", showLoginScreen);
}

function showLoginScreen(){
    loginScreen.style.display="flex";
    registerScreen.style.display="none";
}