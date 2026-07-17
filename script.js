function hamBurgerMenu(){
    const hamBurgerIcon = document.getElementById("hamburger-icon");
    hamBurgerIcon.addEventListener("click", () => {
        document.getElementById("hamburger-menu").classList.toggle("show");
        

    });
    return hamBurgerIcon
}
console.log(hamBurgerMenu())
    
