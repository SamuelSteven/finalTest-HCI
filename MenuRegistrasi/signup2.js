function submit_contact_json(){
    var name = document.getElementById("name").value;
    var birthday = document.getElementById("birthday").value;
    var address = document.getElementById("street").value;
    var contact = document.getElementById("contact").value;
    var job = document.getElementById("job").value;

    if(name != ""){
        if(birthday != ""){
            if(address != ""){
                if(contact != ""){
                    if(job != ""){
                        document.getElementById("nextButtonId").onclick = function (){
                        location.href = "index3.html";
                        }
                    }
                    else{
                        alert("Anda belum mengisi pekerjaan.")
                    }
                }
                else{
                    alert("Anda belum mengisi nomor telepon.")
                }
            }
            else{
                alert("Anda belum mengisi tempat tinggal.")
            }
        }
        else{
            alert("Anda belum mengisi ulang tahun.")
        }
    }
    else{
        alert("Anda belum mengisi nama.")
    }
};

document.getElementById("cancelButtonId").onclick = function (){
    location.href = "../MenuMasuk/index.html";
};