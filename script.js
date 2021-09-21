    document.getElementById('item-unit-price-1').innerText="SGD$0";
    document.getElementById('item-unit-price-2').innerText="SGD$0";
    document.getElementById('item-unit-price-3').innerText="SGD$0";
    // document.getElementById('item-unit-price-4').innerText="SGD$0";
    document.getElementById('item-unit-price-5').innerText="SGD$0";
    document.getElementById('item-unit-price-6').innerText="SGD$0";
    document.getElementById('item-unit-price-7').innerText="SGD$0";
    document.getElementById('item-unit-price-8').innerText="SGD$0";
    document.getElementById('item-unit-price-9').innerText="SGD$0";
    document.getElementById('item-unit-price-10').innerText="SGD$0";
    document.getElementById('item-unit-price-11').innerText="SGD$0";
    document.getElementById('item-unit-price-12').innerText="SGD$0";
    document.getElementById('item-unit-price-13').innerText="SGD$0";
    document.getElementById('item-unit-price-14').innerText="SGD$0";
    document.getElementById('item-unit-price-15').innerText="SGD$0";
    document.getElementById('item-unit-price-16').innerText="SGD$0";
    document.getElementById('item-unit-price-17').innerText="SGD$0";
    document.getElementById('item-unit-price-18').innerText="SGD$0";
    document.getElementById('item-unit-price-19').innerText="SGD$0";
    document.getElementById('item-unit-price-20').innerText="SGD$0";
    document.getElementById('item-unit-price-21').innerText="SGD$0";
    document.getElementById('item-unit-price-22').innerText="SGD$0";
    document.getElementById('item-unit-price-23').innerText="SGD$0";
    document.getElementById('item-unit-price-24').innerText="SGD$0";
    document.getElementById('item-unit-price-25').innerText="SGD$0";
    document.getElementById('item-unit-price-26').innerText="SGD$0";
    document.getElementById('item-unit-price-27').innerText="SGD$0";
    document.getElementById('item-unit-price-28').innerText="SGD$0";
    document.getElementById('item-unit-price-29').innerText="SGD$0";
    document.getElementById('item-unit-price-30').innerText="SGD$0";
function priceCalculate(unitPrice,unitName,uroot){
  
    let uQuantity   = document.getElementById(uroot).getElementsByClassName('item-quantity')[0].value;
    let uTotal      = unitPrice * uQuantity;
    document.getElementById(unitName).innerText = 'SGD$'+unitPrice;
    document.getElementById(uroot).getElementsByClassName('item-price')[0].innerText= 'SGD$'+uTotal;
   

}

function itemPriceCal(uroot){
    let uQuantity   = document.getElementById(uroot).getElementsByClassName('item-quantity')[0].value;
    let unitPrice   = document.getElementById('item-unit-price-1').innerHTML;
    let uTotal      = unitPrice * uQuantity;
    console.log(unitPrice)
    console.log(uQuantity)
    document.getElementById(uroot).getElementsByClassName('item-price')[0].innerText= 'SGD$'+uTotal;
}

