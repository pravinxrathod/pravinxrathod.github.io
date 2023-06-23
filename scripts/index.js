function loadAboutme(event){    
    let container = event.target.parentElement;
    console.log(container);
    if(container.className.includes("expand-content")){
        container.classList.remove("expand-content");
        event.target.classList.remove("fa-angle-up");
    }
    else{
        container.classList.add("expand-content");
        event.target.classList.add("fa-angle-up");
    }
}


function loadModal(event) {
    let id = event.target.dataset.id;
    document.getElementById(id).style.display = "block";
}

function unloadModal(event) {

    let id = event.target.dataset.id;
    document.getElementById(id).style.display = "";
}