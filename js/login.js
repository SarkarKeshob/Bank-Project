// login 

const myEmail= 'keshob.sarkar.shuvo@gmail.com';
const myPassword='Chicingfuck270';

const loginButton=document.getElementById('login-button');
loginButton.addEventListener('click',function(){
    const email=document.getElementById('email');
    const password=document.getElementById('password');
    const checkBox=document.getElementById('remember');
    let inputBox = document.getElementById('input-box');
    let errorMessage= document.createElement('p');


    if((email.value.toLowerCase()===myEmail.toLowerCase()) && (password.value===myPassword) && (checkBox.checked===true)){
        window.location.href="bank.html"
    }

    else if(((email.value.toLowerCase()!==myEmail.toLowerCase()) || (password.value!==myPassword)) && (checkBox.checked===true)){
        errorMessage.innerText='Wrong Email or Password !!!'
        inputBox.appendChild(errorMessage);
        // console.log('wrong password')
    }
   

    else if((email.value.toLowerCase()===myEmail.toLowerCase()) && (password.value===myPassword) && (checkBox.checked!==true)){
        errorMessage.innerText='Please Check The "Remember" me Box'
        inputBox.appendChild(errorMessage);
    }
    else{
        errorMessage.innerText='Please Fill All The Boxes'
        inputBox.appendChild(errorMessage);
        // console.log('wrong input')
    }

})


