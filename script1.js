var bool = true
function SetStatus (bool){
    var success = "Success";
    var failure = "Failed to Send";
    if(bool)
    document.getElementById("status").textContent = success;
    else 
    document.getElementById("status").textContent = failure
}
