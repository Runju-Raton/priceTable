
var grandTotalD = 0;
var grandTotalM = 0;
function priceCalculate(uroot,unitName,unitPrice,n=0){
    let uQuantity   = document.getElementById(uroot).getElementsByClassName('item-quantity')[0].value;
    let uTotal      = unitPrice * uQuantity;
    document.querySelectorAll('#'+unitName)[n].innerText = 'SGD$'+unitPrice;
    document.getElementById(uroot).getElementsByClassName('item-price')[0].innerText= 'SGD$'+uTotal;
    calculateGrandTotal(uTotal,n)
}

function itemPriceCal(uroot,unitName){
    let uQuantity   = document.getElementById(uroot).getElementsByClassName('item-quantity')[0].value;
    let unitPrice   = document.getElementById(unitName).innerHTML.slice(4);
    let uTotal      = unitPrice * uQuantity;
    document.getElementById(uroot).getElementsByClassName('item-price')[0].innerText= 'SGD$'+uTotal;
    calculateGrandTotal(uTotal)
}
function calculateGrandTotal(uTotal,n=0){
    // grandTotal+=uTotal;
    grandTotalD=0;
    grandTotalM=0;
    for(i=1;i<=30;i++){
        if(i==4){
            continue;
        }
        grandTotalD+=parseInt(document.getElementById('tr-item-'+''+i).getElementsByClassName('item-price')[0].innerText.slice(4));
        // grandTotalM+=parseInt(document.getElementById('tr-itemm-'+''+i).getElementsByClassName('item-price')[0].innerText.slice(4));
    
    }
    console.log(grandTotalD)
    // console.log(grandTotalM)
    document.getElementsByClassName('pricing-value')[0].innerHTML='SGD$'+grandTotalD;
}

