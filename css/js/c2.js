document.querySelector("#sameAddress").addEventListener("click", function fill(){
    console.log("Same please");
    if(this.checked){
        console.log(document.querySelector("#home").value)
        document.querySelector("#home").value=document.querySelector("#bill").value;
    }
    else{
        document.querySelector("#home").value="";
    }
})