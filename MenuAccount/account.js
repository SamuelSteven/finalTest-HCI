// Effect scroll
window.onload = function(){
    $('.container .edit .edits').each(function(i){
        setTimeout(function(){
            $('.container .edit .edits').eq(i).addClass('coming');
        }, 270 * (i + 1));
    });
}