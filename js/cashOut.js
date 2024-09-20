

document.getElementById('btn-out-money').addEventListener('click', function(event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-out-money');
    const cashOutPin = getInputFieldValueById('cash-out-pin');

    if(cashOutPin === 1234) {
        const accountBalance = getTextFieldValueById('account-balance');
        const newBalance = accountBalance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;
    }
    else {
        alert('Failed to cash out ! Try again...')
    }
})