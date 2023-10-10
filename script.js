const adressBtn = document.querySelector('#adress-form')
const adressClose = document.querySelector('#adress-close')
let index = 0

adressBtn.addEventListener("click",function(){
    const adressForm = document.querySelector('.adress-form');
    adressForm.style.display = "flex";
});
adressClose.addEventListener("click",function(){
    const adressForm  = document.querySelector('.adress-form');
    adressForm.style.display = "none";
});
// slider-----------------------------------------------------
const rightbtn = document.querySelector('.bx-chevron-right');
const leftbtn = document.querySelector('.bx-chevron-left')
const imgNumber = document.querySelectorAll('.slider-content-left-top img')
rightbtn.addEventListener("click",function(){
    index = index+1 
    if(index > imgNumber.length-1){
        index = 0
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
leftbtn.addEventListener("click",function(){
    index = index-1 
    if(index < 0){
        index = imgNumber.length-1
    }
    document.querySelector(".slider-content-left-top").style.right = index *100+"%"
})
// slider------------------------------------------
const imgNumberLi = document.querySelectorAll('.slider-content-left-bottom li')
imgNumberLi.forEach(function(image,index){
    image.addEventListener("click",function(){

        document.querySelector(".slider-content-left-top").style.right = index *100+"%"
    })
})