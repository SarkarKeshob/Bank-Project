// ------------------------------------------------------------------------

// Account part

    // Deposit Part


let depositButton=document.getElementById('deposit-button');
let withdrawButton=document.getElementById('withdraw-button');
let balance=document.getElementById('balance');
let deposit=document.getElementById('deposit');

depositButton.addEventListener('click', function(){
    
    let depositValue=deposit.value ;
    if(!isNaN(depositValue)&& (depositValue !=='')){
        depositValue=parseFloat(depositValue);
        let previousDeposit=document.getElementById('previous-deposit');
        let previousDepositValue = parseFloat(previousDeposit.innerText);
        let newPreviousDepositValue=previousDepositValue+depositValue;
        let balanceValue=balance.innerText;
        balanceValue=parseFloat(balanceValue)+depositValue;
        balance.innerText=balanceValue.toFixed(2)
        previousDeposit.innerText= newPreviousDepositValue.toFixed(2);
        deposit.value='';
    }

    else{
        
        alert(depositValue+' Is not a number. Please Insert a Valid One')
        deposit.value='';
    }
})


withdrawButton.addEventListener('click',function(){
    let withdrawValue=withdraw.value ;
    if(!isNaN(withdrawValue) && (withdrawValue!=='') ){
        withdrawValue=parseFloat(withdrawValue);
        let previousWithdraw=document.getElementById('previous-withdraw');
        let previousWithdrawValue=parseFloat(previousWithdraw.innerText);
        let newPreviousWithdrawValue=previousWithdrawValue+withdrawValue;
        let balanceValue=balance.innerText;
        balanceValue=parseFloat(balanceValue)-withdrawValue;
        if(balanceValue<0){
            alert('insufficient Balance');
            withdraw.value='';
        }
        else{
        balance.innerText=balanceValue.toFixed(2);
        previousWithdraw.innerText=newPreviousWithdrawValue.toFixed(2);
        withdraw.value='';
        }
    }

    else{
        
        alert(withdrawValue+' Is not a number. Please Insert a Valid One')
        withdraw.value='';
    }
})