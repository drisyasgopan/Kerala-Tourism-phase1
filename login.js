let form = document.getElementById('form');
let email = document.getElementById('email');
let password = document.getElementById('password');
let password2 = document.getElementById('password2');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs() {
    // get the values from the input
     let emailValue = email.value.trim();
     let passwordValue = password.value.trim();
     let password2Value = password2.value.trim();
    

if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
} else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
} else {
    setSuccessFor(email);
}



if(passwordValue === '') {
    setErrorFor(password, 'Password cannot be blank');
}else {
    setSuccessFor(password);
}

if(password2Value === '') {
    setErrorFor(password2, 'Password cannot be blank');
} else if(passwordValue !== password2Value) {
    setErrorFor(password2, 'Passwords does not match')
} else {
    setSuccessFor(password2);
}

}     

function setErrorFor(input, message){
    let inputControl = input.parentElement;
    let small = inputControl.querySelector('small');
    inputControl.className = 'input-control error'
    small.innerText = message;

}

function setSuccessFor(input) {
    let inputControl = input.parentElement;
    inputControl.className = 'input-control success'
}


function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(email);
}
