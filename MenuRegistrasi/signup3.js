function submit_contact_json(){
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(email != ""){
        if(username != ""){
            if(password != ""){
                document.getElementById("confirmButtonId").onclick = function (){
                location.href = "../HomePage/homepage.html";
                }
            }
            else{
                alert("Anda belum mengisi password.")
            }
        }
        else{
            alert("Anda belum mengisi username.")
        }  
    }
    else{
        alert("Anda belum mengisi email.")
    }
};

document.getElementById("cancelButtonId").onclick = function (){
    location.href = "index2.html";
};