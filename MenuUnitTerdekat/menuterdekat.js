// Effect fade
window.onload = function(){
        $('.container .content .unitterdekat').each(function(i){
            setTimeout(function(){
                $('.container .content .unitterdekat').eq(i).addClass('coming');
            }, 270 * (i + 1));
        });
}