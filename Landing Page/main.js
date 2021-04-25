function toggleMenu(){
    const toggleMenu = document.querySelector(".toggleMenu")
    const navigation = document.querySelector(".navigation")
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}

function button() {
    let button = document.getElementById("button");
    button.addEventListener("click", ()=>{
        button.classList.toggle("fondo");
    })    
};
function close() {
    let closeButton= document.getElementsByClassName("close");
    closeButton.addEventListener("click", ()=>{
        
    })    
}
button();
 