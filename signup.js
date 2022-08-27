document.querySelector('form').addEventListener('submit', signUp);

    let userData;
    if(localStorage.getItem('userData')==null){
        userData = []
    } else {
        userData = JSON.parse(localStorage.getItem('userData'));
    }

    function signUp (){
        event.preventDefault();
        alert("Account Creation Success!")
        var userObj= {
            name: document.querySelector('#name').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        }
        userData.push(userObj);
        localStorage.setItem('userData', JSON.stringify(userData))
        window.location.href="./login.html"
    }