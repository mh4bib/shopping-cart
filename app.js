function plusMinusBtn(product,isPlus,price){
    const input = document.getElementById(product+'-input');
    const priceElmnt = document.getElementById(product+'-price');
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    if(isPlus == true){
        inputValue = parseInt(input.value) + 1;
    }
    else if(isPlus == false && parseInt(input.value)>0){
        inputValue = parseInt(input.value) - 1;
    }
    productTotal = inputValue * price;
    input.value = inputValue;
    priceElmnt.innerText = productTotal;

    console.log(productTotal);
}
function total(){
    const phonePrice = document.getElementById('phone-price');
    const casePrice = document.getElementById('case-price');
    const subTotal = document.getElementById('sub-total');
    const tax = document.getElementById('tax');
    const total = document.getElementById('total');

    subTotal.innerText = parseFloat(phonePrice.innerText) + parseFloat(casePrice.innerText);
    tax.innerText = parseFloat(subTotal.innerText) / 10;
    total.innerText = parseFloat(subTotal.innerText) + parseFloat(tax.innerText);
}

document.getElementById('phone-plus').addEventListener('click',function(){
    plusMinusBtn('phone', true, 1219);
    total();
})
document.getElementById('phone-minus').addEventListener('click',function(){
    plusMinusBtn('phone', false, 1219);
    total();
})
document.getElementById('case-plus').addEventListener('click',function(){
    plusMinusBtn('case', true, 59);
    total();
})
document.getElementById('case-minus').addEventListener('click',function(){
    plusMinusBtn('case', false, 59);
    total();
})