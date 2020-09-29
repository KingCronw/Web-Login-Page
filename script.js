const btn = document.querySelector("button");
const sec = document.querySelector("section");
var senha = document.getElementById("senha").value;
var usuario = document.getElementById("usuario").value;


btn.addEventListener("click", event =>{
    event.preventDefault();
    sec.classList.add("hidden-form");
});

sec.addEventListener("animationstart", event =>{
    if (event.animationName === "donw"){
        document.querySelector("body").style.overflow = "hidden";
    }
})
sec.addEventListener("animationend", event =>{
    if ( event.animationName === "donw" ){
        sec.style.display = "none";
        document.querySelector("body").style.overflow = "none";
    }

});