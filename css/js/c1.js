document.querySelector("#subscribe").addEventListener("click", function openEmail(){
    console.log("I made it");
    if(this.checked){
        document.querySelector("#emailDiv").style.display="block";
    }
    else{
        document.querySelector("#emailDiv").style.display="none";
    }
})