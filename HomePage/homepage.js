// Event for button
document.getElementById("bookingButtonId").onclick = function (){
    location.href = "../MenuPilihUnit/menupilihunit.html";
};

const menutoogle = document.querySelector('.menu-toogle input');
const nav = document.querySelector('nav ul');

menutoogle.addEventListener('click', function(){
    nav.classList.toggle('slide');
})

// Slide Show
var i = 0;
var images = [];
var time = 5000;

// Image List
images[0] = '../Gambar/Untitled-1.jpg';
images[1] = '../Gambar/social-distancing-blog-illustation-1.jpg';
images[2] = '../Gambar/2441742.jpg';
images[3] = '../Gambar/a9b1e624-3cea-4ae0-9e52-8d4aed7bb8b6_169.jpeg';

// Change image
function changeImg(){
    document.slide.src = images[i];

    if(i < images.length - 1){
        i++;
    }
    else{
        i=0;
    }

    setTimeout("changeImg()", time);
}

window.onload = changeImg;  

// Effect scroll
$(window).scroll(function(){
    var scroll = $(this).scrollTop();

    if(scroll > $('.content .header').offset().top -480){
        $('.content .header').addClass('fade');
    }

    if(scroll > $('.container .content .gambar').offset().top -450){
        $('.container .content .gambar .picture').each(function(i){
            setTimeout(function(){
                $('.container .content .gambar .picture').eq(i).addClass('coming');
            }, 270 * (i + 1));
        });
    }
});
