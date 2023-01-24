const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector(".dropdown-link");
    const menu = dropdown.querySelector(".menu");
    const options = dropdown.querySelector(".menu li");

    select.addEventListener("click", ()=> {
        select.classList.toggle("select-clicked");
        menu.classList.toggle("menu-open");
        
    });

    
});



