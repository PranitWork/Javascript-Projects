
// target the classes and id's
let imgbox = document.getElementById("imgbox");
let qrimg = document.getElementById("QRimage");
let qrtext = document.getElementById("qrtext");


// let t1 = 'http://192.168.43.42:3500/'


// function for the QR code ganarator
function ganarateQR() {
    // if value of input fild is grather then 0 the run if 
    if (qrtext.value.length > 0) {
        // arimg.src can store the image of that qr code and also api link
        qrimg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;
        // img.box can display that qr code
        imgbox.classList.add("show-img");
    }
    // else user cannot type anything in that input field then go to else condition
    else {
        // added one class error into the qr text
        qrtext.classList.add("error");
        // add settimeout for 1s
        setTimeout(() => {
            // after compliting 1s it will remove that class
            qrtext.classList.remove("error");
        }, 1000);
    }

}