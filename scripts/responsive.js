function toggleNavbar(event){
    let navlinks = document.getElementById("navlinks");
    if(navlinks.className.includes("responsive")){
        navlinks.classList.remove("responsive");
    }
    else{
        navlinks.classList.add("responsive");
    }
}