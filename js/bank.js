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
        setNewValue(previousDeposit,depositValue);
        setNewValue(balance,depositValue);
 
        deposit.value='';
    }

    else{
        giveAlert(deposit);
    }
})

// ---------------------------------------------------------------------------
// withdraw part
withdrawButton.addEventListener('click',function(){
    let withdrawValue=withdraw.value ;
    if(!isNaN(withdrawValue) && (withdrawValue!=='') ){
        withdrawValue=parseFloat(withdrawValue);
        let balanceValue=giveValue(balance);
        balanceValue=balanceValue-withdrawValue;
        if(balanceValue<0){
            alert('insufficient Balance');
            withdraw.value='';
        }
        else{
        balance.innerText=balanceValue.toFixed(2);
        setNewValue(previousWithdraw,withdrawValue);
        withdraw.value='';
        }
    }

    else{
        giveAlert(withdraw);
    }
})