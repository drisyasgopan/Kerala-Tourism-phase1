let form = document.getElementById('form');
let Name = document.getElementById('name');
let email = document.getElementById('email');
let Phonenumber = document.getElementById('phonenumber');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();

});

function checkInputs(){
     let name = Name.value.trim();
     let emailValue = email.value.trim();
     let phonenumber = Phonenumber.value.trim();
    

if(name === '') {
      setErrorFor(Name, 'Name cannot be blank');    
  }else if(name.length <= 3) {
       setErrorFor(Name, 'Enter Full Name');
  }else{
      setSuccessFor(Name);
  }


if(emailValue === '') {
    setErrorFor(email, 'Email cannot be blank');
} else if(!isEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid');
} else {
    setSuccessFor(email);
}

if(phonenumber === '') {
    setErrorFor(Phonenumber, 'This field cannot be blank');
} else if(phonenumber.length !=10) {
    setErrorFor(Phonenumber, 'Not a valid number');
} else if(isNaN(phonenumber)){
    setErrorFor(Phonenumber, 'Not a valid number');
}else {
    setSuccessFor(Phonenumber);
}
}

function getPasswordStrength(password){
    let s = 0;
    if(password.length > 6){
        s++;
    }
    if(password.length > 8){
        s++;
    }
    if(/[A-Z]/.test(password)){
        s++;
    }
    if(/[0-9]/.test(password)){
        s++;
    }
    if(/[^A-Za-z0-9]/.test(password)){
        s++;
    }
    return s;

}
document.querySelector(".input-control #password").addEventListener("focus",function(){
    document.querySelector(".input-control .pw-strength").style.display = "block";
});

document.querySelector(".input-control .pw-display-toggle-btn").addEventListener("click",function(){
    let el = document.querySelector(".input-control .pw-display-toggle-btn");
    if(el.classList.contains("active")){
        document.querySelector(".input-control #password").setAttribute("type","password");
        el.classList.remove("active") ;  
    } else{
        document.querySelector(".input-control #password").setAttribute("type","text");
        el.classList.add("active") ; 
    }
});

document.querySelector(".input-control #password").addEventListener("keyup",function(e) {
    let password = e.target.value;
    let strength = getPasswordStrength(password);
    let passwordStrengthSpans = document.querySelectorAll(".input-control .pw-strength span");
    strength = Math.max(strength,1);
    passwordStrengthSpans[1].style.width = strength*20 + "%";
    if(strength < 2){
        passwordStrengthSpans[0].innerText = "Weak";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#d13636";
    } else if(strength >= 2 && strength <=4){
        passwordStrengthSpans[0].innerText = "Medium";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#e6da44";

    }else {
        passwordStrengthSpans[0].innerText = "Strong";
        passwordStrengthSpans[0].style.color = "#fff";
        passwordStrengthSpans[1].style.background = "#20a820";

    }
});

function getPasswordStrength(password2){
    let s = 0;
    if(password2.length > 6){
        s++;
    }
    if(password2.length > 8){
        s++;
    }
    if(/[A-Z]/.test(password2)){
        s++;
    }
    if(/[0-9]/.test(password2)){
        s++;
    }
    if(/[^A-Za-z0-9]/.test(password2)){
        s++;
    }
    return s;

}
document.querySelector(".input-control #password2").addEventListener("focus",function(){
    document.querySelector(".input-control .pw-strength1").style.display = "block";
});

document.querySelector(".input-control .pw-display-toggle-btn").addEventListener("click",function(){
    let el = document.querySelector(".input-control .pw-display-toggle-btn");
    if(el.classList.contains("active")){
        document.querySelector(".input-control #password2").setAttribute("type","password2");
        el.classList.remove("active") ;  
    } else{
        document.querySelector(".input-control #password2").setAttribute("type","text");
        el.classList.add("active") ; 
    }
});

document.querySelector(".input-control #password2").addEventListener("keyup",function(e) {
    let password2 = e.target.value;
    let strength = getPasswordStrength(password2);
    let passwordStrengthSpans = document.querySelectorAll(".input-control .pw-strength1 span");
    strength = Math.max(strength,1);
    passwordStrengthSpans[1].style.width = strength*20 + "%";
    if(strength < 2){
        passwordStrengthSpans[0].innerText = "Weak";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#d13636";
    } else if(strength >= 2 && strength <=4){
        passwordStrengthSpans[0].innerText = "Medium";
        passwordStrengthSpans[0].style.color = "#111";
        passwordStrengthSpans[1].style.background = "#e6da44";

    }else {
        passwordStrengthSpans[0].innerText = "Strong";
        passwordStrengthSpans[0].style.color = "#fff";
        passwordStrengthSpans[1].style.background = "#20a820";

    }
 });

function validateForm() {
     let pw = document.getElementById("password");
     let pw1 = document.getElementById("password2");

    if(pw !== pw1){
        alert("Passwords did not match ");
    }
    else{
        alert("Password created successfully");
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

function isname(name) {
      return /^[A-Za-z]*\s{1}[A-Za-z]*$/.test(name);
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/.test(email);
}
