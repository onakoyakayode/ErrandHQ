



/**** Password Reveal */

function passwordReveal() {
    let x = document.getElementById('password');
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

    x.style.width = "100%";
    x.style.padding ="10px";
    x.style.outline = "1px solid rgba(28, 55, 90, 0.16)";
    x.style.border = "1px solid rgba(28, 55, 90, 0.16)";
    x.style.borderRadius = "6px";
    x.style.fontSize = "16px";
    x.style.lineHeight = "22px";
}






/***** Confirm Password Reveal ******/
function confirmPassword() {
    let x = document.getElementById('confirm-password');
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

    x.style.width = "100%";
    x.style.padding = "10px";
    x.style.outline = "1px solid rgba(28, 55, 90, 0.16)";
    x.style.border = "1px solid rgba(28, 55, 90, 0.16)";
    x.style.borderRadius = "6px";
    x.style.fontSize = "16px";
    x.style.lineHeight = "22px";
}


function signUpBtn() {

    /**Full name Validation */
    let fullName = document.getElementById('fullName').value;
    let errorName = document.getElementById('name-err');

    errorName.innerHTML = "";

    try {
        if (fullName == "") throw "Input is empty";
    } catch(err) {
        errorName.innerHTML = err;
    }

    /** Email Validation */

    let emailValidation = document.getElementById('email').value;
    let emailError = document.getElementById('email-err');
    
    emailError.innerHTML = "";

    try {
        if (emailValidation == "") throw "Email is required"
        if (emailValidation === '/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/') throw "";
    } catch(err) {
        emailError.innerHTML = err;
    }

}



let forgotPassword = document.querySelector('.forgot-password')
let forgotPasswordPanel = document.getElementById('forgot-password')

forgotPassword.addEventListener('click', (event) => {
    forgotPasswordPanel.style.display = 'block'
    forgotPasswordPanel.style.top = '20px'
    forgotPasswordPanel.style.transition = 'all 1s ease-in-out'
});

function cancel() {
    forgotPasswordPanel.style.display = 'none'
}