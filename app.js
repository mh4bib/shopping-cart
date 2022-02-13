
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