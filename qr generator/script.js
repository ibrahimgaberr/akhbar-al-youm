const qrcard = document.querySelector(".qrcard"),
qrInput =qrcard.querySelector(".form input"),
generateBtn =qrcard.querySelector(".form button"),
qrImg = qrcard.querySelector("qr-code img");

generateBtn.addEventListener("click", () =>{ 
   // let qrValue= qrInput.value;
    fetch("")
    if(!qrValue) return
    //api return img src to the qrImg
    qrImg.src=`http://api.qrserver.com/v1/create-qr-code/?size=170*170&data=${qrValue}`;
    qrcard.classList.add("active");
});