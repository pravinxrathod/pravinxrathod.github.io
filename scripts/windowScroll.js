document.onmousemove=function(event){
}

window.onscroll=function(event){
    toggleNavabr();
    toggleScrollUp(event);
}

window.onresize=function(){
    toggleNavabr();
}

function toggleScrollUp(event){
    let window_size = window.innerHeight;

    let scrollUpBtn = document.querySelector(".scroll-up");

    if(window.scrollY>window_size){
        scrollUpBtn.style.right="25px";
        scrollUpBtn.style.opacity="100%";
    }
    else{
        scrollUpBtn.style.right="-100px";
        scrollUpBtn.style.opacity="0%";
    }
}

function scrollUpWindow(event){
    window.scrollTo({top: 0, behavior: 'smooth'});
}


function toggleNavabr(){
    let navbar = document.getElementById("myNav");
    let max_scroll = document.documentElement.offsetHeight - window.innerHeight;
    let pageScrolled = (window.scrollY/max_scroll)*100 + "%";

    let scrollBar = document.querySelector(".nav-scroll").firstElementChild;
    scrollBar.style.width=pageScrolled;

    if(window.scrollY){
        navbar.classList.add("bg-light");
    }
    else{
        navbar.classList.remove("bg-light");
    }
}

function moveMouse(event){
    let cursor = document.querySelector(".custom-cursor");
    cursor.style.top=event.pageY - cursor.offsetHeight/2+'px';
    cursor.style.left=event.pageX - cursor.offsetHeight/2 +'px';
}