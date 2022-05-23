const inputName = document.getElementById('name');
const inputLastName = document.getElementById('lastname');
const inputMail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const inputSubmit = document.getElementById('submit');
const inputForm = document.querySelector('.containerright__formflex__form');
const allinput = document.querySelectorAll('.here');

const warningName = document.querySelector('.containerright__warning1');
const warningLastName = document.querySelector('.containerright__warning2');
const warninMail = document.querySelector('.containerright__warning3');
const warningPassword = document.querySelector('.containerright__warning4');


const inputError= "url(/images/icon-error.svg) no-repeat";
const allWarning = document.querySelectorAll('.all');

inputForm.addEventListener('submit', (e) =>{
    e.preventDefault();
 if(inputName.value == "" && inputLastName.value == "" && inputMail.value == "" && inputPassword.value == ""){
    for(let i = 0; i < allinput.length; i++){
        allWarning[i].style.display = "inline-block";
        allinput[i].classList.add('add');   
    }}
     if(inputName.value == ""){
        warningName.style.display = "inline-block";
        inputName.classList.add('add');
 }   if(inputLastName.value == ""){
    warningLastName.style.display = "inline-block"; 
    inputLastName.classList.add('add');  
}   if(inputMail.value == ""){
    warninMail.style.display = "inline-block";
    inputMail.classList.add('add');   
} if(inputPassword.value == ""){
    warningPassword.style.display = "inline-block";  
    inputPassword.classList.add('add');  
}});



