const adressBtn = document.querySelector('#adress-form')
const adressClose = document.querySelector('#adress-close')


adressBtn.addEventListener("click",function(){
    const adressForm = document.querySelector('.adress-form');
    adressForm.style.display = "flex";
});
adressClose.addEventListener("click",function(){
    const adressForm  = document.querySelector('.adress-form');
    adressForm.style.display = "none";
});