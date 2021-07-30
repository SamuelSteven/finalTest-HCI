// Effect fade
window.onload = function(){
    $('.container .content .unit').each(function(i){
        setTimeout(function(){
            $('.container .content .unit').eq(i).addClass('coming');
        }, 270 * (i + 1));
    });
}