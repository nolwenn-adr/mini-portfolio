const fond = document.getElementById("navbar");
const navigation = document.getElementById("nav-li");
const burger = document.getElementById("burger");
const retour = document.getElementById("retour")

function openMenu() {
    fond.style.width = "80%";
    navigation.style.display = "block";
    burger.style.display = "none";
    retour.style.display = "block";
}

function closeMenu() {
    fond.style.width = "";
    navigation.style.display = "";
    retour.style.display = "";
    burger.style.display = "";
}

burger.addEventListener("click", openMenu);
navigation.addEventListener("click", closeMenu);
retour.addEventListener("click", closeMenu);



