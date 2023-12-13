// ------------------------------------------------------------------------
// common part
let depositButton=giveHtml('deposit-button');
let withdrawButton=giveHtml('withdraw-button');
let deposit=giveHtml('deposit');
let withdraw=giveHtml('withdraw');
let previousDeposit=giveHtml('previous-deposit');
let balance=giveHtml('balance');
let previousWithdraw=giveHtml('previous-withdraw');
// -----------------------------------------------------------------------------


// Account part

    // Deposit Part



depositButton.addEventListener('click', function(){
    
    let depositValue=deposit.value ;
    if(!isNaN(depositValue)&& (depositValue !=='')){
        depositValue=parseFloat(depositValue);
        let previousDepositValue=giveValue(previousDeposit);
        let newPreviousDepositValue=previousDepositValue+depositValue;
        previousDeposit.innerText= newPreviousDepositValue.toFixed(2);
        let balanceValue=giveValue(balance);
        balanceValue=balanceValue+depositValue;
        balance.innerText=balanceValue.toFixed(2)
 
        deposit.value='';
    }

    else{
        
        alert(depositValue+' Is not a number. Please Insert a Valid One In The Deposit Box')
        deposit.value='';
    }
})

// ---------------------------------------------------------------------------
// withdraw part
withdrawButton.addEventListener('click',function(){
    let withdrawValue=withdraw.value ;
    if(!isNaN(withdrawValue) && (withdrawValue!=='') ){
        withdrawValue=parseFloat(withdrawValue);
        let previousWithdrawValue=giveValue(previousWithdraw);
        let newPreviousWithdrawValue=previousWithdrawValue+withdrawValue;
        let balanceValue=giveValue(balance);
        balanceValue=balanceValue-withdrawValue;
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
        
        alert(withdrawValue+' Is not a number. Please Insert a Valid One In The Withdraw Box')
        withdraw.value='';
    }
})