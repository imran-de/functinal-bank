//input function
function getInputValue(id) {
    const inputFiled = document.getElementById(id);
    const amount = parseFloat(inputFiled.value);
    //clear the input box
    inputFiled.value = '';
    return amount;
}
// current amount calculation function
function updateTotalFiled(current, amount) {
    const totalField = document.getElementById(current);
    const previousTotal = parseFloat(totalField.innerText);
    //total deposit calculate
    const finalAmount = previousTotal + amount;
    totalField.innerText = finalAmount;
    return finalAmount;
}
function currentBalance() {
    const bTotal = document.getElementById('balance');
    return bTotal.innerText;
}
// final balance update function
function updateBalance(amount, isAdd) {
    const bTotal = document.getElementById('balance');
    // total balance calculate
    if (isAdd) {
        bTotal.innerText = parseFloat(bTotal.innerText) + amount;
    } else {
        bTotal.innerText = parseFloat(bTotal.innerText) - amount;
        console.log("You can't withdraw more than what you have!!")
    }
}
// deposit handle
document.getElementById('d-submit').addEventListener('click', function () {
    //collect input amount
    const dAmount = getInputValue('d-amount');
    // validate input value
    if (dAmount > 0) {
        // update total deposit value
        updateTotalFiled('d-total', dAmount);
        //update balance
        updateBalance(dAmount, true);
    }
});

// withdraw handle
document.getElementById('w-submit').addEventListener('click', function () {
    // collect input amonut
    const wAmount = getInputValue('w-amount');
    const cBalance = currentBalance();
    // validate input value
    if (wAmount > 0 && cBalance > wAmount) {
        //update total filed value
        updateTotalFiled('w-total', wAmount);
        // update balance
        updateBalance(wAmount, false);
    }
    // show error message if balance is less
    if (cBalance < wAmount) {
        document.getElementById('error-msg').innerText = "You can't withdraw more than what you have!!";
    }
});