

document.getElementById('btn-out-money').addEventListener('click', function(event) {
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-out-money');
    const cashOutPin = getInputFieldValueById('cash-out-pin');

    if(isNaN(cashOut)) {
        alert('Failed to cash out !');
        return;
    }

    if(cashOutPin === 1234) {

        const accountBalance = getTextFieldValueById('account-balance');
        
        if(cashOut > accountBalance) {
            alert('You do not have enough money to cash out !')
            return;
        }

        const newBalance = accountBalance - cashOut;
        document.getElementById('account-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-red-500', 'p-2', 'rounded');
        div.innerHTML = `
        <h4 class="text-xl font-bold">Cash Out</h4>
        <p class="font-bold">${cashOut} taka cash out. New Balance ${newBalance} taka.</p>

        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('Failed to cash out ! Try again...')
    }
})