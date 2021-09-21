
var grandTotal = 0;
function priceCalculate(uroot,unitName,unitPrice,n=0){
    let uQuantity   = document.getElementById(uroot).getElementsByClassName('item-quantity')[0].value;
    let uTotal      = unitPrice * uQuantity;
    document.querySelectorAll('#'+unitName)[n].innerText = 'SGD$'+unitPrice;
    document.getElementById(uroot).getElementsByClassName('item-price')[0].innerText= 'SGD$'+uTotal;
}

function itemPriceCal(uroot,unitName){
    let uQuantity   = document.getElementById(uroot).getElementsByClassName('item-quantity')[0].value;
    let unitPrice   = document.getElementById(unitName).innerHTML.slice(4);
    let uTotal      = unitPrice * uQuantity;
    document.getElementById(uroot).getElementsByClassName('item-price')[0].innerText= 'SGD$'+uTotal;
    console.log(unitPrice)
}

