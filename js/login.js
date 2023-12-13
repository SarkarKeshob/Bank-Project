// login 

const myEmail= 'keshob.sarkar.shuvo@gmail.com';
const myPassword='Chicingfuck270';

const loginButton=document.getElementById('login-button');
loginButton.addEventListener('click',function(){
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const checkBox=document.getElementById('remember');
    let showError = document.getElementById('show-error');


    if((email.value.toLowerCase()===myEmail.toLowerCase()) && (password.value===myPassword)){
        window.location.href="bank.html"
    }
    else if((email.value.toLowerCase()!==myEmail.toLowerCase()) && (password.value!==myPassword)){
        
        showError.innerText='Email & Password Both Are Wrong!!!'
    }

    else if((email.value.toLowerCase()!==myEmail.toLowerCase()) && (password.value===myPassword)){
        
        showError.innerText='Email Does not Match!!!'
    }
   

    else if((email.value.toLowerCase()===myEmail.toLowerCase()) && (password.value!==myPassword)){
        showError.innerText='Wrong Password'
        
    }
    else{
        showError.innerText='Email & Password is not Filled'
    }

})


