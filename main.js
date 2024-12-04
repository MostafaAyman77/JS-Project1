
var amount = document.getElementById("bill-amount");
var percentage = document.getElementById("tip");
var result;
var total;
function calculate(){

    const am = amount.value;
    const per = percentage.value;
    result = am * per / 100;
    total = parseInt(result) + parseInt(am) ;


    var totalSpan = document.getElementById("total");
    totalSpan.textContent = total;
}

