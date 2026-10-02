document.addEventListener("DOMcontentLoaded",() => {
    const menuResponsivo= document.getElementById("menuResponsivo");
    const navMenu = document.getElementById("nav-menu")

    menuResponsivo.addEventListener("click", () =>{
        navMenu.classList.toggle("active")
    })
});
//Fechamento do evento carregar pagina html //oiiii