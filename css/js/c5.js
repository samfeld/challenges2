document.querySelector("#thumbs").addEventListener("mouseover", function trigger(e){
    console.log("hovering");
    console.log(e.target.className);
    if (e.target.className==="thumbnail"){
        document.querySelector("#display").style.backgroundImage= "url('" + (e.target.src)+"')";
        document.querySelector("#display").innerHTML=e.target.alt;
    }
})
document.querySelector("#thumbs").addEventListener("mouseleave", function (e){
    console.log("leaving")
    if(e.target.className==="thumbnail"){
        document.querySelector("#display").innerHTML="Hover over an image";
        document.querySelector("#display").style.backgroundImage=""
    }
    
})