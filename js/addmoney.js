// dry- code repeat lom korar jonno function use hobe.... 


document.getElementById('btn-add-money').addEventListener('click', function(event) {
    //prevent page reload stop after submit form
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    // wrong way not for serious website
    if(pinNumber === 1234) {
        const accountBalance = getTextFieldValueById('account-balance');
        const newBalance = accountBalance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to add money! Try again..')
    }

});