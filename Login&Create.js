// Make the Create Username and Login link work!!!

//DOM ContenetLoaded means that once the document is ready to be worked with, run the function
document.addEventListener("DOMContentLoaded", () => { 
    // Create variables that connects to the forms created in HTML
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    //Once the Create Account link is clicked, the login form would be hiddedn, using the form--hidden class. Use classlist.add
    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault(); //Prevent the link from going to the actually page in the href. 
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    // Same, but other way around
    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });
}); 

//-------------------------------------Creat Account Validation--------------------------------------//

// Email Validation ---------------------------------------------
let emailInput=document.querySelector("#email");
let emailError=document.createElement('p');
document.querySelectorAll(".form--input-group")[3].append(emailError);
emailError.setAttribute("class","error");
let defaultMsg = "";
let emailErrorMsg="Please enter a valid email";

function validateEmail(){
    let email = emailInput.value; 
    let regexp=/\S+@\S+\.\S+/; 
    
    if(regexp.test(email)){
    error = defaultMsg;}
    else {
    error = emailErrorMsg;
    document.getElementById("email").style.borderColor ="red";
    }
    return error;
      
}


// Password Validation-------------------------------------------
let passwordInput = document.querySelector("#password");
let cPasswordInput = document.querySelector("#cPassword");
let passwordError=document.createElement('p');
passwordError.setAttribute("class","error");
document.querySelectorAll(".form--input-group")[4].append(passwordError);


let passErrorMsg1="Password Must be Inputted";
let passErrorMsg2="Please Confirm Password";
let passErrorMsg3="Password Must have 8 Characters Long!";
let passErrorMsg4="Password Must be less than 20 Characters Long!";
let passErrorMsg5="Passwords must match!";


function validatePass() {
    let pass = passwordInput.value;
    let pass2 = cPasswordInput.value;
    
    if (pass == "") {
        error = passErrorMsg1;
        document.getElementById("password").style.borderColor ="red";
        document.getElementById("cPassword").style.borderColor ="red";
    }

    else if (pass2 =="") {
        error = passErrorMsg2;
        document.getElementById("password").style.borderColor ="red";
        document.getElementById("cPassword").style.borderColor ="red";
    }
    
    else if (pass.length < 8) {
        error = passErrorMsg3;
        document.getElementById("password").style.borderColor ="red";
        document.getElementById("cPassword").style.borderColor ="red";
    }
    
    else if (pass.length > 20) {
        error = passErrorMsg4;
        document.getElementById("password").style.borderColor ="red";
        document.getElementById("cPassword").style.borderColor ="red";
    }

    else if (pass2 !== pass) {
        error = passErrorMsg5;
        document.getElementById("password").style.borderColor ="red";
        document.getElementById("cPassword").style.borderColor ="red";
    }
   
    else {
        error = defaultMsg;
    }
    return error;

}

// Main Validation
function validate(){
    let valid = true;//global validation 
    let emailValidation=validateEmail();
    let passValidation = validatePass();
    if(emailValidation !==defaultMsg){
        emailError.textContent = emailValidation;
        valid = false;
    }

    if (passValidation !== defaultMsg) {
        passwordError.textContent = passValidation;
        valid = false;
    }
    return valid;
};

// Remove error message once correct information is inputted.

emailInput.addEventListener("blur",()=>{ // arrow function
    let x=validateEmail();
    if(x == defaultMsg){
        emailError.textContent = defaultMsg;
        document.getElementById("email").style.borderColor =null;
    }
    });


passwordInput.addEventListener("blur",()=>{ // arrow function
    let x=validatePass();
    if(x == defaultMsg){
        passwordError.textContent = defaultMsg;
        document.getElementById("password").style.borderColor =null;
    }
    });
cPasswordInput.addEventListener("blur",()=>{ // arrow function
    let x=validatePass();
    if(x == defaultMsg){
        passwordError.textContent = defaultMsg;
        document.getElementById("cPassword").style.borderColor =null;
    }
    });
