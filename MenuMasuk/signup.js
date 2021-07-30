function submit_contact_json(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if(username != ""){
        if(password != ""){
                document.getElementById("signInButtonId").onclick = function (){
                location.href = "../HomePage/homepage.html";
            }
        }
        else{
            alert("Anda belum mengisi password.");
        }
    } 
    else{
        alert("Anda belum mengisi username.");
    }
};

document.getElementById("signUpButtonId").onclick = function (){
    location.href = "../MenuRegistrasi/index2.html";
};