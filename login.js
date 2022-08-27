
document.querySelector('form').addEventListener('submit', login);
 
 let registeredUser = JSON.parse(localStorage.getItem('userData'));
 function login(){
     event.preventDefault();
     let enteredEmail = document.querySelector('#email').value;
     let enteredPassword = document.querySelector('#password').value;
     let flag = false;
     registeredUser.forEach(userData => {
         if(userData.email === enteredEmail  && userData.password === enteredPassword){
             flag = true;
             window.location.href = 'homepage.html';
         }
     });
     if(flag){
      alert("Login Successful")
     }else{
      alert("Incorrect Details")
     }
  }
