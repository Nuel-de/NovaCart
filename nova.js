function handBurgerMenu(){
    const handBurgerIcon = document.getElementById("handburger-icon");
    handBurgerIcon.addEventListener("click", () => {
        document.getElementById("handburger-menu").classList.toggle("hidden");
        

    });
    return handBurgerIcon
}
console.log(handBurgerMenu())
    
