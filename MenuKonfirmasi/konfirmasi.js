// Button
document.getElementById("confirmButtonId").onclick = function (){
    alert("Terima kasih! Silahkan cek inbox Anda sekarang.");
    location.href = "../HomePage/homepage.html";
};

document.getElementById("cancelButtonId").onclick = function (){
    location.href = "../MenuPilihUnit/menupilihunit.html";
};

// QR Code
var angka = Math.random();
if( angka < 0.2){
    angka = 1;
}
else if( angka > 0.2 && angka < 0.4){
    angka = 2;
}
else if( angka > 0.4 && angka < 0.6){
    angka = 3;
}
else if( angka > 0.6 && angka < 8){
    angka = 4;
}
else{
    angka = 5;
}   
// Randeom QR Code
const y = document.querySelector(".container .content .qr");

if(angka == 1){
    y.innerHTML = `<img src="../Gambar/QRCode/1_PNniLVIC_Hc7gNIxjvWPWg.png" alt=""/>
    <p><b>Scan with QR code</b></p>`;
}

else if(angka == 2){
    y.innerHTML = `<img src="../Gambar/QRCode/M1-LQDCELL-QR-Code.jpg" alt=""/>
    <p><b>Scan with QR code</b></p>`;
}

else if(angka == 3){
    y.innerHTML = `<img src="../Gambar/QRCode/QR-code.png" alt=""/>
    <p><b>Scan with QR code</b></p>`;
}

else if(angka == 4){
    y.innerHTML = `<img src="../Gambar/QRCode/qr-code matthews.png" alt=""/>
    <p><b>Scan with QR code</b></p>`;
}

else if(angka == 5){
    y.innerHTML = `<img src="../Gambar/QRCode/websiteQRCode_noFrame.png" alt=""/>
    <p><b>Scan with QR code</b></p>`;
}


