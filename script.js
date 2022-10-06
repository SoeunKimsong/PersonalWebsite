let sections = document.querySelectorAll(".section");
let secBtns = document.querySelector(".controls")
let secBtn = document.querySelectorAll(".control");
let allSections = document.body;

function pageTransition() {
    // button click active class
    for (let i = 0; i < secBtn.length; i++) {
        secBtn[i].addEventListener("click", () => {
            let currentBtn = document.querySelector(".active-btn");
            currentBtn.classList.remove('active-btn');
            secBtn[i].classList.add('active-btn');
        })
    }

    //section active class
    secBtn.forEach((section) => {
        section.addEventListener('click', (e) => {
            let id = e.target.dataset.id;
            sections.forEach((section) => {
                section.classList.remove('active');
            })
            let element = document.getElementById(id);
            element.classList.add('active');
        })
    })
}



pageTransition();


// toggle theme

let themeBtn = document.querySelector('.theme-btn');
themeBtn.addEventListener('click', () => {
    let element = document.body;
    element.classList.toggle('light-mode');
    let icon = themeBtn.children[0];
    if(icon.classList.contains('fa-moon')){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }else{
        icon.classList.add('fa-moon');
        icon.classList.remove('fa-sun');
    }
})