// Event Handling
const deletes = document.querySelectorAll('.container .pesan .pesans .delete');
const pesans = document.querySelectorAll('.container .pesan .pesans');
const img = document.getElementById('dAll');

for(let i = 0; i < deletes.length; i++){    
    deletes[i].addEventListener('click', function(){
        deletes[i].parentElement.style.display = 'none';
    });
}

img.addEventListener('click', function(){
    let jawaban = prompt("Apakah Anda ingin menghapus semua pesan ini? [ya/tidak]");
    if(jawaban == 'ya'){
        for(let x = 0; x < pesans.length; x++){
            pesans[x].style.display = 'none';
        }
    }
});

// Effect scroll
window.onload = function(){
    $('.container .pesan .pesans').each(function(i){
        setTimeout(function(){
            $('.container .pesan .pesans').eq(i).addClass('coming');
        }, 270 * (i + 1));
    });
}