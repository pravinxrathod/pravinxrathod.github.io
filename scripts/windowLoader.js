window.onload=function(){
    sayGreet();
    loadContainers();
}



function sayGreet(){
    let bannerGreet = document.querySelector(".container-banner").children[0];
    let bannerName = document.querySelector(".container-banner").children[1];

    setTimeout(()=>bannerGreet.hidden=true,3000);
    let str="My Name Is Pravin.";
    bannerName.style.display="block";    
    let i=0;

    setTimeout(sayName,3000);

    function sayName(){
        if (i < str.length) {
            bannerName.innerHTML = bannerName.innerHTML.slice(0, -1) + str[i] + '|';
            i++;
            setTimeout(sayName, 50);
        }
        else
            bannerName.innerHTML = bannerName.innerHTML.slice(0, i);
    }
}

function loadContainers(){
    let containers = document.querySelectorAll(".container");
    for(item of containers){
        let child = item.firstElementChild;
        child.addEventListener("mouseover",function(){
            child.style.opacity="100%";
            child.style.transform="translate(0)";
        })
    }
}

let tech = document.getElementById("technology").children;
let len = tech.length;
let sc = 0, scb = len - 1;

setTimeout(techSlider);

function techSlider() {
    if (sc < len) {
        tech[scb].style.display = "";
        tech[sc].style.display = "block";
        sc++;
        scb = (scb + 1) % 6;
    }
    else
        sc = 0;
    setTimeout(techSlider, 3000);
}