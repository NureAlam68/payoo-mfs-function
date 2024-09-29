// dry- code repeat lom korar jonno function use hobe.... 


document.getElementById('btn-add-money').addEventListener('click', function(event) {
    //prevent page reload stop after submit form
    event.preventDefault();

    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');

    if(isNaN(addMoney)) {
        alert('Failed to add money !');
        return;
    }

    // wrong way not for serious website
    if(pinNumber === 1234) {
        const accountBalance = getTextFieldValueById('account-balance');
        const newBalance = accountBalance + addMoney;
        document.getElementById('account-balance').innerText = newBalance;

        const div = document.createElement('div');
        div.classList.add('bg-green-500', 'p-2', 'rounded');
        div.innerHTML = `
        <h4 class="text-xl font-bold">Add Money</h4>
        <p class="font-bold">${addMoney} taka add money. New Balance ${newBalance} taka.</p>

        `
        document.getElementById('transaction-container').appendChild(div);
    }
    else {
        alert('Failed to add money! Try again..')
    }

});