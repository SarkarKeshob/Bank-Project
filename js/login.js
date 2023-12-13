// login 

const myEmail= 'keshob.sarkar.shuvo@gmail.com';
const myPassword='Chicingfuck270';

const loginButton=giveHtml('login-button');
loginButton.addEventListener('click',function(){
    const email=giveHtml('email');
    const password=giveHtml('password');
    let showError = giveHtml('show-error');


    if((email.value.toLowerCase()===myEmail.toLowerCase()) && (password.value===myPassword)){
        window.location.href="bank.html"
    }

    else if((email.value.toLowerCase()!==myEmail.toLowerCase()) && (password.value===myPassword)){
        
        showError.innerText='Email Does not Match!!!'
    }
   

    else if((email.value.toLowerCase()===myEmail.toLowerCase()) && (password.value!==myPassword)){
        showError.innerText='Wrong Password'
        
    }
    else{
        showError.innerText='Email & Password Both Are Wrong!!!'
    }

})


